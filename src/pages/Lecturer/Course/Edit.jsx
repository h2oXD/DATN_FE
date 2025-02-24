import { Outlet, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal, Skeleton } from "antd";
import { useCourseContext } from "../../../contexts/CourseProvider";
import axiosClient from "../../../api/axios";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Edit() {
    const { courseData, loading, error } = useCourseContext()
    const { course_id } = useParams();
    const [course, setCourse] = useState(null);
    const [checkData, setCheckData] = useState([])
    const navigate = useNavigate()
    const [modalCheck, setModalCheck] = useState(false)
    const [checkDataMessage, setCheckDataMessage] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (courseData) {
            setCourse(course)
        }
        const checkData = async () => {
            const courseShow = await axiosClient.get(`/lecturer/courses/${course_id}/check`)

            setCheckData(courseShow.data)
        }
        checkData()
    }, [courseData]);

    if (loading)
        return (
            <div className="d-flex gap-3 ">
                {/* Cột trái - Sidebar */}
                <div className="">
                    <div className="card p-3" style={{ width: "250px" }}>
                        <Skeleton active />
                    </div>
                </div>

                {/* Cột phải - Nội dung */}
                <div className="w-100">
                    <div className="card p-5">
                        <Skeleton active />
                        <Skeleton active />
                        <Skeleton active />
                        <Skeleton active />
                    </div>
                </div>
            </div>
        );
    if (error) return <div>Lỗi: {error.message || "Không thể tải dữ liệu."}</div>;
    if (!courseData) return <div>Không có dữ liệu khóa học.</div>;

    const handleRequestCensor = async (course_id) => {
        try {
            setIsLoading(true)
            const courseShow = await axiosClient.get(`/lecturer/courses/${course_id}/pending`)

            console.log(courseShow.data);
            if (courseShow.data.status == 'success') {
                toast.success('Gửi yêu cầu phê duyệt thành công')
                navigate('/lecturer/course')
            }
        } catch (error) {
            // if (error.data.muc_tieu || error.data.giang_day || error.data.tong_quan) {
            setModalCheck(true)
            setCheckDataMessage(error.response.data)
            // }
            console.log(error.response.data);
        } finally {
            setIsLoading(false)
        }

    }
    const updateCheckData = async () => {
        try {
            const courseShow = await axiosClient.get(`/lecturer/courses/${course_id}/check`);
            setCheckData(courseShow.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="d-flex gap-3 ">
                {/* Cột trái - Sidebar */}
                <div className="">
                    <div className="card p-3" style={{ width: "250px" }}>
                        <ul className="nav flex-column nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/basic`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark d-flex justify-content-between align-items-center"
                                            : "nav-link text-dark d-flex justify-content-between align-items-center"
                                    }
                                >
                                    Tổng quan khoá học {!checkData.tong_quan && <FaCheckCircle className="text-success" />}
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/goals`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark justify-content-between align-items-center d-flex"
                                            : "nav-link text-dark justify-content-between align-items-center d-flex"
                                    }
                                >
                                    Mục tiêu học viên {!checkData.muc_tieu && <FaCheckCircle className="text-success" />}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/curriculum`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark justify-content-between align-items-center d-flex"
                                            : "nav-link text-dark justify-content-between align-items-center d-flex"
                                    }
                                >
                                    Chương trình giảng dạy {!checkData.giang_day && <FaCheckCircle className="text-success" />}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        {isLoading ? (<><button className="btn btn-primary w-100" type="button" disabled>
                            <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        </button></>) : (<><button onClick={() => { handleRequestCensor(course_id) }} className="btn btn-primary w-100">Gửi đi để xem xét</button></>)}

                        <Modal
                            width={600}
                            open={modalCheck}
                            onCancel={() => {
                                setModalCheck(false);
                            }}
                            footer={null}
                        >
                            <h3>Tại sao chưa thể gửi xét duyệt?</h3>
                            <p className="fs-4">Bạn sắp sẵn sàng gửi khóa học rồi. Đây là một số việc khác mà bạn cần xử lý.</p>
                            {checkDataMessage.giang_day && (<p className="fs-4 fw-bold m-0">Trên trang Chương trình giảng dạy</p>)}
                            <ul>
                                {checkDataMessage.giang_day && (<li className="fs-4 m-0">{checkDataMessage.giang_day}</li>)}
                                {checkDataMessage.lesson && (<li className="fs-4 m-0">{checkDataMessage.lesson}</li>)}
                            </ul>
                            {checkDataMessage.tong_quan && (<p className="fs-4 fw-bold m-0 mt-2">Trên trang Trang tổng quan khóa học</p>)}
                            <ul>
                                {checkDataMessage.thumbnail && (<li className="fs-4 m-0">{checkDataMessage.thumbnail}</li>)}
                                {checkDataMessage.video_preview && (<li className="fs-4 m-0">{checkDataMessage.video_preview}</li>)}
                                {checkDataMessage.description && (<li className="fs-4 m-0">{checkDataMessage.description}</li>)}
                                {checkDataMessage.level && (<li className="fs-4 m-0">{checkDataMessage.level}</li>)}
                                {checkDataMessage.price_regular && (<li className="fs-4 m-0">{checkDataMessage.price_regular}</li>)}
                            </ul>
                            {checkDataMessage.muc_tieu && (<p className="fs-4 fw-bold m-0 mt-2">Trên trang Học viên mục tiêu</p>)}
                            <ul>
                                {checkDataMessage.target_students && (<li className="fs-4 m-0">{checkDataMessage.target_students}</li>)}
                                {checkDataMessage.learning_outcomes && (<li className="fs-4 m-0">{checkDataMessage.learning_outcomes}</li>)}
                                {checkDataMessage.prerequisites && (<li className="fs-4 m-0">{checkDataMessage.prerequisites}</li>)}
                            </ul>
                        </Modal>
                    </div>
                </div>

                {/* Cột phải - Nội dung */}
                <div className="w-100">
                    <Outlet context={{ courseData: course, updateCheckData }} />
                </div>
            </div>
        </>
    );
}
