import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useCourseContext } from "../../../contexts/CourseProvider";

export default function Edit() {
    const { courseData , loading , error } = useCourseContext()
    const { course_id } = useParams();
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
        if(courseData){
            setCourse(course)
        }
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
                                            ? "nav-link active text-dark"
                                            : "nav-link text-dark"
                                    }
                                >
                                    Tổng quan khoá học
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/goals`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark"
                                            : "nav-link text-dark"
                                    }
                                >
                                    Mục tiêu học viên
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/curriculum`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active text-dark"
                                            : "nav-link text-dark"
                                    }
                                >
                                    Chương trình giảng dạy
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
    );
}
