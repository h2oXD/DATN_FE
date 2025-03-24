import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../../api/axios';
import { toast } from 'react-toastify';
import { getImageUrl } from '../../../api/common';
import { Skeleton } from 'antd';
import { FaCheckCircle } from "react-icons/fa";

export default function ShowCourse() {
    const { course_id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axiosClient.get(`/lecturer/courses/${course_id}`)
                setCourse(res.data.data)
            } catch (error) {
                if (error.response.status == 404 || error.response.status == 403) {
                    navigate('/404')
                } else {
                    toast.error('Có lỗi xảy ra')
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [course_id])
    if (loading || !course) {
        return (
            <>
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
            </>
        )
    }
    return (
        <>
            <div className="d-flex gap-3 ">
                {/* Cột trái - Sidebar */}
                <div className="">
                    <div className="card p-3" style={{ width: "250px" }}>
                        <ul className="nav flex-column nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/view/goals`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark justify-content-between align-items-center d-flex"
                                            : "nav-link text-dark justify-content-between align-items-center d-flex"
                                    }
                                >
                                    Mục tiêu học viên {<FaCheckCircle className="text-success" />}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/view/curriculum`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark justify-content-between align-items-center d-flex"
                                            : "nav-link text-dark justify-content-between align-items-center d-flex"
                                    }
                                >
                                    Chương trình giảng dạy {<FaCheckCircle className="text-success" />}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/view/basic`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark d-flex justify-content-between align-items-center"
                                            : "nav-link text-dark d-flex justify-content-between align-items-center"
                                    }
                                >
                                    Tổng quan khoá học {<FaCheckCircle className="text-success" />}
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>

                {/* Cột phải - Nội dung */}
                <div className="w-100">
                    <Outlet context={{ courseData: course }} />
                </div>
            </div>
        </>
    )
}
