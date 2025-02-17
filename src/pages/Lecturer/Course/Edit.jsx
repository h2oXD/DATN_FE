import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { showCourseBasic } from "../../../api/apiService";
import { Skeleton } from "antd";

export default function Edit() {
    const { course_id } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchCourseData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await showCourseBasic(course_id);
                if (isMounted) {
                    setCourseData(res.data.data); // Lưu dữ liệu vào state
                }
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchCourseData();

        return () => { isMounted = false; };
    }, [course_id]);

    if (loading) return <div className="card p-5"><Skeleton active /><Skeleton active /><Skeleton active /><Skeleton active /></div>;
    if (error) return <div>Lỗi: {error.message || "Không thể tải dữ liệu."}</div>;
    if (!courseData) return <div>Không có dữ liệu khóa học.</div>;

    return (
        <>
            <div className="d-flex gap-3 ">
                {/* Cột trái - Sidebar */}
                <div className="">
                    <div className="card p-3" style={{ width: '250px' }}>
                        <ul className="nav flex-column nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/basic`}
                                    className={({ isActive }) => isActive ? "nav-link active text-dark" : "nav-link text-dark"}
                                >
                                    Tổng quan khoá học
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/goals`}
                                    className={({ isActive }) => isActive ? "nav-link active text-dark" : "nav-link text-dark"}
                                >
                                    Mục tiêu học viên
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/lecturer/course/${course_id}/edit/curriculum`}
                                    className={({ isActive }) => isActive ? "nav-link active text-dark" : "nav-link text-dark"}
                                >
                                    Chương trình giảng dạy
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                </div>

                {/* Cột phải - Nội dung */}
                <div className="w-100">

                    <Outlet context={{ courseData: courseData }} />

                </div>
            </div>
        </>
    )
}
