import { useOutletContext } from "react-router-dom"
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GoCodeSquare } from "react-icons/go";
import { Modal } from "antd";
import { useState } from "react";
import { getImageUrl } from "../../../../api/common";
import { Editor } from "@monaco-editor/react";

export default function CurriculumView() {
    const course = useOutletContext()
    const sections = course.courseData.sections
    const [showModal, setShowModal] = useState(false)
    console.log(course);

    return (
        <>
            <div className="card p-3">
                <div className="card-header ps-0 py-2">
                    <h3 className="m-0 mb-2">Chương trình giảng dạy</h3>
                </div>
                {sections &&
                    sections.map((section, index) => (
                        <div key={index} className="card tw-bg-slate-100 mt-4 pb-2">
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <p className="tw-text-base tw-font-bold m-0">
                                    {`Phần ${index + 1}. `}
                                    {section.title}
                                </p>
                            </div>
                            {section.lessons.map((lesson, index) => (
                                <div key={index} className="border mx-2 mb-1 rounded px-3 py-2 d-flex justify-content-between align-items-center bg-white mt-1 cursor-pointer">
                                    <div className="d-flex align-items-center">
                                        <span className="m-0 me-1 tw-font-semibold">
                                            {lesson.type == 'video' && (<><MdOutlineOndemandVideo className="tw-size-5 me-2" />Video: </>)}
                                            {lesson.type == 'document' && (<><IoDocumentTextOutline className="tw-size-5 me-2" />Tài liệu:</>)}
                                            {lesson.type == 'quiz' && (<><IoIosHelpCircleOutline className="tw-size-5 me-2" />Trắc nghiệm:</>)}
                                            {lesson.type == 'coding' && (<GoCodeSquare className="tw-size-5 me-2" />)}
                                        </span>
                                        <p className="m-0">{lesson.title}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button onClick={() => { setShowModal(lesson.id) }} className="btn btn-sm btn-primary">Xem</button>
                                    </div>
                                    <Modal
                                        className="tw-top-[20px]"
                                        width={1000}
                                        open={showModal == lesson.id}
                                        onCancel={() => { setShowModal(false) }}
                                        footer={null}
                                    >
                                        <h3>{lesson.title}</h3>
                                        {lesson.type == 'video' && lesson.videos && lesson.videos.video_url &&
                                            <>
                                                <video className="w-100" controls src={getImageUrl(lesson.videos.video_url)} />
                                            </>
                                        }
                                        {lesson.type == 'document' && lesson.documents && lesson.documents.document_url &&
                                            <>
                                                <p>{lesson.description}</p>
                                                <p>Tài liệu hiện tại <a href={getImageUrl(lesson.documents.document_url)} download="document_name.pdf">Tải xuống</a></p>
                                            </>
                                        }
                                        {lesson.type == 'quiz' && lesson.quizzes[0] &&
                                            <>
                                                {lesson.quizzes[0].questions.map((question, index) => (
                                                    <div key={index} className="mb-2">
                                                        <h4>Câu {index + 1}: {question.question_text} {question.is_multiple_choice ? ('(Nhiều đáp án đúng)') : ('(Một đáp án đúng)')}</h4>
                                                        {question.answers.map((answer, index) => (
                                                            <div key={index} className="card my-2 shadow-none p-1">
                                                                <div className="d-flex align-items-center gap-2">
                                                                    {answer.is_correct ? <i className="fe fe-check text-success"></i> : <i className="fe fe-x text-danger"></i>}
                                                                    <p className="m-0">{answer.answer_text}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </>
                                        }
                                        {lesson.type == 'coding' && lesson.codings &&
                                            <>
                                                <form className="row">
                                                    <div className="mb-3 col-6">
                                                        <label htmlFor="tenBaiTap" className="form-label">
                                                            Tên bài tập
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="tenBaiTap"
                                                            placeholder="Nhập tên bài tập"
                                                            value={lesson.codings.problem_title}
                                                            readOnly
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-6">
                                                        <label htmlFor="loaiNgonNgu" className="form-label">
                                                            Ngôn ngữ lập trình
                                                        </label>
                                                        <input className="form-select text-dark" id="loaiNgonNgu" value={lesson.codings.language} readOnly disabled />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="mucTieu" className="form-label">
                                                            Mục tiêu bài tập
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            id="mucTieu"
                                                            rows="3"
                                                            placeholder="Cung cấp một mục tiêu học tập cho bài tập coding này."
                                                            value={lesson.codings.problem_description}
                                                            readOnly
                                                            disabled
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-12 row ">
                                                        <div className="mb-3 col-6">
                                                            <label htmlFor="">Mã khởi đầu dành cho học viên</label>
                                                            <Editor value={lesson.codings.starter_code} options={{ readOnly: true }} theme="vs-dark" height="30vh" language={lesson.codings.language} />
                                                        </div>
                                                        <div className="mb-3 col-6">
                                                            <label htmlFor="">Mã đáp án</label>
                                                            <Editor value={lesson.codings.solution_code} options={{ readOnly: true }} theme="vs-dark" height="30vh" language={lesson.codings.language} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="">OutPut</label>
                                                        <input value={lesson.codings.output} readOnly disabled name="" type="text" className="form-control bg-dark text-light" id="" />
                                                    </div>
                                                </form>
                                            </>
                                        }
                                    </Modal>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </>
    )
}
