/* eslint-disable react/prop-types */

import { useState } from "react";
import axiosClient from "../../../../api/axios";

export default function Quiz({ lesson, course_id, setRefresh }) {
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [results, setResults] = useState([]);

    if (lesson.type === 'quiz' && lesson.quizzes && lesson.quizzes.length > 0) {
        const quiz = lesson.quizzes[0];

        const handleSubmit = async (e) => {
            e.preventDefault();
            let newScore = 0;
            const newResults = quiz.questions.map(question => {
                const userAnswer = userAnswers[question.id];
                const correctAnswer = question.answers.filter(answer => answer.is_correct).map(answer => answer.id);
                const isCorrect = question.is_multiple_choice
                    ? arraysAreEqual(userAnswer || [], correctAnswer)
                    : userAnswer === correctAnswer[0];

                if (isCorrect) {
                    newScore++;
                }

                return {
                    questionId: question.id,
                    isCorrect: isCorrect,
                };
            });

            setScore(newScore);
            setResults(newResults);

            // Tính phần trăm số câu đúng
            const percentage = (newScore / quiz.questions.length) * 100;

            // Nếu đạt từ 80% trở lên, gửi API cập nhật trạng thái lesson
            if (percentage >= 80) {
                try {
                    const res = await axiosClient.post(`student/courses/${course_id}/lessons/${lesson.id}/completes`)
                    setRefresh(prev => !prev);
                    console.log(res);
                } catch (error) {
                    console.error("Error updating lesson status", error);
                }
            }
        };

        const arraysAreEqual = (a, b) => {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        };

        return (
            <div className=" mt-4 px-5" style={{ width: '1000px' }}>
                <form onSubmit={handleSubmit} className="px-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>{lesson.title}</h2>
                        <button className="btn btn-primary btn-sm" type="submit">Nộp bài</button>
                    </div>
                    {lesson.description && <p className="mb-3">{lesson.description}</p>}

                    {quiz.questions.map((question, questionIndex) => (
                        <div key={question.id} className="mb-4 border p-3 rounded">
                            <p className="mb-2"><strong>Câu {questionIndex + 1}:</strong> {question.question_text}</p>
                            {results.length > 0 && (
                                <div className="mb-2">
                                    {results.find(result => result.questionId === question.id)?.isCorrect ? (
                                        <span className="text-success">Đúng</span>
                                    ) : (
                                        <span className="text-danger">Sai</span>
                                    )}
                                </div>
                            )}
                            {question.answers.map((answer) => (
                                <div key={answer.id} className="form-check">
                                    <input
                                        type={question.is_multiple_choice ? "checkbox" : "radio"}
                                        name={question.is_multiple_choice ? `question-${question.id}-${answer.id}` : `question-${question.id}`}
                                        value={answer.id}
                                        onChange={(e) => {
                                            const questionId = question.id;
                                            const answerId = parseInt(e.target.value);

                                            if (question.is_multiple_choice) {
                                                setUserAnswers(prevAnswers => {
                                                    const updatedAnswers = { ...prevAnswers };
                                                    if (!updatedAnswers[questionId]) {
                                                        updatedAnswers[questionId] = [];
                                                    }

                                                    if (e.target.checked) {
                                                        if (!updatedAnswers[questionId].includes(answerId)) {
                                                            updatedAnswers[questionId].push(answerId);
                                                        }
                                                    } else {
                                                        updatedAnswers[questionId] = updatedAnswers[questionId].filter(id => id !== answerId);
                                                    }
                                                    return updatedAnswers;
                                                });
                                            } else {
                                                setUserAnswers(prevAnswers => ({
                                                    ...prevAnswers,
                                                    [questionId]: answerId,
                                                }));
                                            }
                                        }}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">{answer.answer_text}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button className="btn btn-primary btn-sm" type="submit">Nộp bài</button>
                </form>
                {results.length > 0 && (
                    <div className="mt-4">
                        <h3>Kết quả: {score}/{quiz.questions.length} ({((score / quiz.questions.length) * 100).toFixed(2)}%)</h3>
                    </div>
                )}
            </div>
        );
    }
    return null;
}
