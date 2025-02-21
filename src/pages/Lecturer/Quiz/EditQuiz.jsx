import { Link, useSearchParams } from "react-router-dom";
import AddQuizModal from "./AddQuizModal";
import { useState } from "react";


export default function EditQuiz() {
    const [searchParams] = useSearchParams();
    const lessonId = searchParams.get('lessonId');
    const sectionId = searchParams.get('sectionId');
    const courseId = searchParams.get('courseId');
    // const title = searchParams.get('title');

    const [showAddQuizModal, setShowAddQuizModal] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ zIndex: 999 }}>
                <div className="container-fluid px-0">
                    <Link to={`/lecturer/course/${courseId}/edit/curriculum`} className="text-dark py-1"><button className="btn btn-sm btn-primary text-light">Quay lại</button></Link>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 col-12 mb-2">
                        <div className="card shadow-sm rounded">
                            <h4 className="py-3 px-2">Khoá học JavaScript</h4>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 mb-2 row">
                        <div className="col-12">
                            <div className="card shadow-sm rounded">
                                <h4 className="mt-3 ms-3">Tìm kiếm câu hỏi</h4>
                                <div className="input-group mb-3 px-2">
                                    <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Tìm kiếm</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <div className="d-flex justify-content-between">
                                <h4 className="m-0 fw-bold">0 Câu hỏi</h4>
                                <button onClick={() => setShowAddQuizModal(true)} className="btn btn-sm btn-outline-primary">+ Thêm câu hỏi</button>
                            </div>
                        </div>
                        <div className="col-12 mb-5">
                            <div className="card shadow-sm text-dark">
                                <div className="card-body p-3">
                                    <div className="d-flex justify-content-between pb-2 align-items-center">
                                        <div>
                                            <i className="fe fe-align-justify cursor-pointer p-1 rounded border"></i>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-sm me-2">Chỉnh sửa</button>
                                            <i className="fe fe-trash-2 cursor-pointer p-1 rounded border"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="m-0">Sông nào dài nhất nước ta</p>
                                        <p className="m-0 fs-6 tw-font-semibold">Lựa chọn câu trả lời</p>
                                        <div className="row gap-y-2 gap-x-1">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fe fe-check me-1 text-success"></i><p className="m-0">Câu trả lời 1</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <i className="fe fe-x me-1 text-danger"></i><p className="m-0">Câu trả lời 1</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fe fe-x me-1 text-danger"></i><p className="m-0">Câu trả lời 1</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <i className="fe fe-x me-1 text-danger"></i><p className="m-0">Câu trả lời 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddQuizModal
                showAddQuizModal={showAddQuizModal}
                setShowAddQuizModal={setShowAddQuizModal}
                lesson_id={lessonId}
                section_id={sectionId}
                course_id={courseId} />
        </>
    )
}
