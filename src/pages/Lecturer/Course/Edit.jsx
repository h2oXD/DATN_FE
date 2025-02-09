// import React from 'react'

// import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { NavLink } from "react-router-dom";

// import { toast } from "react-toastify";
// import axiosClient from "../../../api/axios";

export default function Edit() {

    const { course_id } = useParams();


    // const [isLoading, setIsLoading] = useState(false);
    // const [course, setCourse] = useState([]);

    // useEffect(() => {
    //     const fetchCourse = async () => {
    //         if (isLoading === true) return;
    //         setIsLoading(true);
    //         await axiosClient.get(`/lecturer/courses/${course_id}`)
    //             .then(res => {
    //                 console.log(res.data);
    //                 setCourse(res.data.course)
    //                 setIsLoading(false);
    //             })
    //             .catch(errors => {
    //                 console.log(errors);
    //                 if (errors.status == 404) {
    //                     toast.error("Không tìm thấy trang");
    //                     navigate('pagenotfound')
    //                 }
    //                 // toast.error("Không thể tải .");
    //                 setIsLoading(false);
    //             })
    //     };
    //     fetchCourse();
    // }, []);

    return (
        <>
            <div className="row">
                {/* Cột trái - Sidebar */}
                <div className="col-md-3">

                    <div className="card p-3">
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
                <div className="col-md-9">

                    <Outlet />

                </div>
            </div>
        </>
    )
}
