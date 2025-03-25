import { Link, useSearchParams } from "react-router-dom";
import AddQuizModal from "./AddQuizModal";
import { useCallback, useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { RiFileExcel2Fill } from "react-icons/ri";
import { Modal } from "antd";
import { useDropzone } from "react-dropzone";
import { getImageUrl, getUrl } from "../../../api/common";
import EditQuizModal from "./EditQuizModal";



export default function EditQuiz() {
    const [searchParams] = useSearchParams();
    const lessonId = searchParams.get('lessonId');
    const sectionId = searchParams.get('sectionId');
    const courseId = searchParams.get('courseId');
    // const title = searchParams.get('title');

    const [showAddQuizModal, setShowAddQuizModal] = useState(false)
    const [showEditQuizModal, setShowEditQuizModal] = useState(false)
    const [questionAdded, setQuestionAdded] = useState(false);

    const [questions, setQuestions] = useState(null)
    const [course, setCourse] = useState(null)
    const [quizId, setQuizId] = useState(null)
    const [loadingImport, setLoadingImport] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosClient.get(`/lecturer/quizzes/${lessonId}/questions`)
                console.log(res.data.data);
                setQuizId(res.data.data.id)
                setQuestions(res.data.data.questions)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()
    }, [questionAdded, lessonId])
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await axiosClient.get(`/lecturer/courses/${courseId}`)
                console.log(res.data.data);
                setCourse(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchCourse()
    }, [courseId])
    const handleDeleteQuestion = async (question_id) => {
        const result = await Swal.fire({
            title: "Bạn có chắc chắn muốn xóa không?",
            text: "Hành động này không thể hoàn tác!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy",
        });
        if (result.isConfirmed) {
            try {
                await axiosClient.delete(`/lecturer/questions/${question_id}`)
                setQuestionAdded(pre => !pre)
                toast.success('Xoá thành công')
            } catch (error) {
                console.log(error);
            }
        }

    }
    const [modalExcel, setModalExcel] = useState(false)
    const [fileExcel, setFileExcel] = useState(null)
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFileExcel(acceptedFiles[0])
            console.log(acceptedFiles[0]);
        }

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, maxFiles: 1, multiple: false, accept: {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
            "application/vnd.ms-excel": [".xls"],
        },
    });
    const handleSubmitExcel = async () => {
        if (!fileExcel) return toast.error('Không được để trống file tải lên')
        if (fileExcel) {
            const data = {
                file: fileExcel
            }
            console.log(data);
            setLoadingImport(true)
            try {
                const res = await axiosClient.post(`/lessons/${lessonId}/quizzes/${quizId}/upload`, data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                console.log(res);

                toast.success('Tải lên thành công')
                setFileExcel(null)
                setModalExcel(false)
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch (error) {
                console.log(error);
                toast.error('Tải lên thất bại')
            } finally {
                setLoadingImport(false)
            }
        }

    }
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
                            <h4 className="py-3 px-3">{course && course.title}</h4>
                        </div>
                        <div className="card shadow-sm rounded mt-2">
                            <button className="py-3 px-3 btn" onClick={() => { setModalExcel(true) }}>
                                <RiFileExcel2Fill className="me-2 tw-size-6 tw-text-green-600" />Nhập từ trang tính
                            </button>
                            <Modal
                                className="tw-top-[40px]"
                                open={modalExcel}
                                onCancel={() => {
                                    setModalExcel(false)
                                }}
                                footer={null}
                            >
                                <h4>Nhập từ trang tính</h4>
                                {!fileExcel &&
                                    <div className="mt-3 mb-3" {...getRootProps()} style={{ border: "2px dashed #ccc", padding: 20, textAlign: "center" }}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? <p>Thả file vào đây...</p> : <p>Kéo & thả file vào đây hoặc bấm để chọn file</p>}
                                    </div>
                                }
                                {fileExcel &&
                                    <div className="mt-3 mb-3 border rounded">
                                        <div className="p-5 d-flex gap-3 justify-content-between">
                                            <p className="m-0">{fileExcel.name}</p>
                                            <p className="m-0 text-primary tw-cursor-pointer" onClick={() => { setFileExcel(null) }}>Xoá file</p>
                                        </div>
                                    </div>
                                }

                                <div className="d-flex justify-content-between">
                                    <a href={getUrl('excel/quiz_template.xlsx')}>
                                        <button type="button" className="btn btn-sm btn-success">
                                            Tải xuống mẫu
                                        </button>
                                    </a>
                                    {fileExcel && loadingImport ?
                                        <button className="btn btn-sm btn-primary" disabled>
                                            Nhập file
                                        </button> :
                                        <button className="btn btn-sm btn-primary" onClick={handleSubmitExcel}>
                                            Nhập file
                                        </button>
                                    }
                                </div>
                            </Modal>
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
                                <h4 className="m-0 fw-bold">{questions && questions.length} Câu hỏi</h4>
                                <button onClick={() => setShowAddQuizModal(true)} className="btn btn-sm btn-outline-primary">+ Thêm câu hỏi</button>
                            </div>
                        </div>
                        {questions && questions.length < 1 && (<div className="text-center">Chưa có câu hỏi nào</div>)}
                        {questions && questions.length > 0 && (
                            <div className="col-12 mb-5">
                                {questions.map((question) => (
                                    <div key={question.id} className="card shadow-sm text-dark mb-2">
                                        <div className="card-body p-3">
                                            <div className="d-flex justify-content-between pb-2 align-items-center">
                                                <div>
                                                    <i className="fe fe-align-justify cursor-pointer p-1 rounded border"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <button onClick={() => setShowEditQuizModal(question.id)} className="btn btn-sm me-2">Chỉnh sửa</button>
                                                    <EditQuizModal setQuestionAdded={setQuestionAdded} question={question} quiz_id={quizId} question_id={question.id} showEditQuizModal={showEditQuizModal} setShowEditQuizModal={setShowEditQuizModal} />
                                                    <i onClick={() => { handleDeleteQuestion(question.id) }} className="fe fe-trash-2 cursor-pointer p-1 rounded border"></i>
                                                </div>
                                            </div>
                                            <div>
                                                {question.image_url && <img src={getImageUrl(question.image_url)} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                                                <p className="m-0">{question.question_text}</p>
                                                <p className="m-0 fs-6 tw-font-semibold">Lựa chọn câu trả lời</p>
                                                <div className="row gap-y-2 gap-x-1">
                                                    {question.answers && question.answers.map((answer) => (
                                                        <div key={answer.id} className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                {answer.is_correct ? (
                                                                    <i className="fe fe-check me-1 text-success"></i>
                                                                ) : (
                                                                    <i className="fe fe-x me-1 text-danger"></i>
                                                                )}
                                                                <p className="m-0">{answer.answer_text}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <AddQuizModal
                showAddQuizModal={showAddQuizModal}
                setShowAddQuizModal={setShowAddQuizModal}
                lesson_id={lessonId}
                section_id={sectionId}
                course_id={courseId}
                setQuestionAdded={setQuestionAdded} />
        </>
    )
}
