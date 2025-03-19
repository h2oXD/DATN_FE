/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { Segmented } from 'antd';
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import { getImageUrl } from "../../../api/common";

export default function EditQuizModal({ question, quiz_id, showEditQuizModal, setShowEditQuizModal, lesson_id, setQuestionAdded, question_id }) {
    console.log(question);

    const [questionType, setQuestionType] = useState(question.is_multiple_choice.toString());
    const [questionText, setQuestionText] = useState(question.question_text)
    const [questionImage, setQuestionImage] = useState(null);
    const [previewQuestionImage, setPreviewQuestonImage] = useState(null)
    const [currentImage, setCurrentImage] = useState(question.image_url)
    const handleQuestionTypeChange = (value) => {
        setQuestionType(value);
        if (value === "0") {
            setAnswers(answers.map(answer => ({ ...answer, is_correct: 0 })));
        }
    }
    // Hàm xử lý upload ảnh cho question_text
    const handleQuestionImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            setQuestionImage(image);
            setPreviewQuestonImage(URL.createObjectURL(image));
        }
    };
    const [answers, setAnswers] = useState(question.answers)
    const handleAddInput = () => {
        if (answers.length < 5) {
            setAnswers([...answers, { answer_text: "", is_correct: 0 }]);
        }
    };
    const handleRemoveInput = (index) => {
        if (answers.length > 2) {
            setAnswers(answers.filter((_, i) => i !== index));
        }
    };
    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index].answer_text = value;
        setAnswers(newAnswers);
    };
    const handleCorrectAnswerChange = (index) => {
        if (questionType === "0") {
            setAnswers(answers.map((answer, i) => ({ ...answer, is_correct: i === index ? 1 : 0 })));
        } else {
            setAnswers(answers.map((answer, i) => ({
                ...answer,
                is_correct: i === index ? (answer.is_correct === 1 ? 0 : 1) : answer.is_correct,
            })));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!questionText.trim()) {
            return toast.error("Câu hỏi không được để trống");
        }

        if (questionType !== "0" && questionType !== "1") {
            return toast.error("Loại câu hỏi không hợp lệ");
        }

        if (answers.some(answer => !answer.answer_text.trim())) {
            return toast.error("Tất cả các câu trả lời phải được nhập");
        }

        if (answers.some(answer => answer.is_correct !== 0 && answer.is_correct !== 1)) {
            return toast.error("Giá trị is_correct phải là 0 hoặc 1");
        }

        if (!answers.some(answer => answer.is_correct === 1)) {
            return toast.error("Phải có ít nhất một câu trả lời đúng");
        }

        const quizData = {
            question_text: questionText,
            image_url: questionImage,
            is_multiple_choice: questionType,
            answers,
            _method: 'PUT'
        };
        try {
            const res = await axiosClient.post(`/lecturer/quizzes/${quiz_id}/questions/${question_id}`, quizData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            toast.success('Cập nhật thành công')
            setShowEditQuizModal(false)
            setQuestionAdded(pre => !pre)
            console.log(res);
        } catch (error) {
            console.log("Lỗi:", error);
        }
    };

    return (
        <>
            <Modal
                className="tw-top-[40px]"
                width={1000}
                open={showEditQuizModal == question_id}
                onCancel={() => {
                    setShowEditQuizModal(false)
                }}
                footer={null}
            >
                <h3 className="text-center">Tạo mới câu hỏi</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-none flex-row align-items-center">
                                {previewQuestionImage && (
                                    <div>
                                        <i
                                            className="fe fe-trash-2 cursor-pointer p-1 rounded border"
                                            style={{ position: 'absolute', left: '5px', top: '5px' }}
                                            onClick={() => { setQuestionImage(null), setPreviewQuestonImage(null) }}
                                        ></i>
                                        <img src={previewQuestionImage} alt="Question" className="p-5" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                    </div>
                                )}
                                {!previewQuestionImage && currentImage && (
                                    <div>
                                        <i
                                            className="fe fe-trash-2 cursor-pointer p-1 rounded border"
                                            style={{ position: 'absolute', left: '5px', top: '5px' }}
                                            onClick={() => { setQuestionImage(null), setPreviewQuestonImage(null), setCurrentImage(null) }}
                                        ></i>
                                        <img src={getImageUrl(currentImage)} alt="Question" className="p-5" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                    </div>
                                )}
                                <input
                                    type="text"
                                    name="question_text"
                                    id="question_text"
                                    value={questionText}
                                    onChange={(e) => { setQuestionText(e.target.value) }}
                                    placeholder="Nhập câu hỏi vào đây"
                                    className="form-control d-flex fs-4 text-center p-5"
                                    style={{ height: "200px" }}
                                />
                                {!previewQuestionImage && !currentImage && (<div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
                                    <input type="file" accept="image/*" onChange={handleQuestionImageUpload} style={{ display: 'none' }} id='question_image' /> {/* Sử dụng ID duy nhất */}
                                    <label htmlFor='question_image' style={{ cursor: 'pointer' }}>
                                        <i className="fe fe-upload cursor-pointer p-1 rounded border"></i>
                                    </label>
                                </div>)}
                            </div>
                        </div>
                        <div className="col-12 d-flex gap-3 mt-3 align-items-center">
                            {answers.map((answer, index) => (
                                <div key={index} className="tw-relative tw-inline-block tw-mb-2.5">
                                    <input
                                        type="text"
                                        className="form-control text-center tw-h-[200px] tw-pl-[30px]"
                                        placeholder={`Nhập câu trả lời ${index + 1}`}
                                        value={answer.answer_text}
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    />
                                    {answers.length > 2 &&
                                        <i
                                            onClick={() => { handleRemoveInput(index) }}
                                            className="fe fe-trash-2 cursor-pointer p-1 rounded border tw-absolute tw-left-[5px] tw-top-[5px]"
                                        ></i>
                                    }
                                    <input
                                        type={questionType === "0" ? "radio" : "checkbox"}
                                        name="is_correct"
                                        checked={answer.is_correct}
                                        onChange={() => handleCorrectAnswerChange(index)}
                                        className="tw-size-5 tw-absolute tw-right-[5px] tw-top-[5px]"
                                    />
                                </div>
                            ))}
                            {answers.length < 5 && (
                                <div>
                                    <button className="btn btn-sm border p-0 m-0 px-2 pb-1" type="button" onClick={handleAddInput}>
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="col-12 mt-2 d-flex justify-content-between align-items-center">
                            <Segmented
                                options={[
                                    { label: 'Câu trả lời đúng duy nhất', value: '0' },
                                    { label: 'Nhiều câu trả lời đúng', value: '1' },
                                ]}
                                value={questionType}
                                onChange={handleQuestionTypeChange}
                            />
                            <button
                                className="btn btn-sm btn-primary"
                                type="submit"
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}
