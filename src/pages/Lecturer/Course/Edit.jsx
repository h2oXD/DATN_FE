// import React from 'react'

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import axiosClient from "../../../api/axios";

export default function Edit() {
    const navigate = useNavigate()
    const { course_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchCourse = async () => {
            if (isLoading === true) return;
            setIsLoading(true);
            await axiosClient.get(`/lecturer/courses/${course_id}`)
                .then(res => {
                    console.log(res.data);
                    setIsLoading(false);
                })
                .catch(errors => {
                    console.log(errors);
                    if (errors.status == 404) {
                        toast.error("Không tìm thấy trang");
                        navigate('pagenotfound')
                    }
                    // toast.error("Không thể tải .");
                    setIsLoading(false);
                })
        };
        fetchCourse();
    }, []);
    return (
        <>
            {!isLoading &&
                <div className="row">
                    {/* Cột trái - Sidebar */}
                    <div className="col-md-3">
                        <div className="card p-3">
                            <ul className="nav flex-column nav-pills">
                                <li className="nav-item">
                                    <Link className="nav-link active text-dark">Chương trình giảng dạy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark">Mục tiêu học viên</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark">Tổng quan khoá học</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Cột phải - Nội dung */}
                    <div className="col-md-9">
                        <div className="card p-4">
                            <h4>Chương Trình Giảng Dạy</h4>

                            {/* Mỗi chương */}
                            <div className="card p-3 mt-3">
                                <h5>Tên chương: Giới thiệu</h5>
                                <p>📘 3 Bài học | ✅ Đã có bài tập</p>
                                <button className="btn btn-light">+ Mục trong chương trình</button>
                            </div>

                            <div className="card p-3 mt-3">
                                <h5>Tên chương: Cấu trúc điều kiện vòng lặp</h5>
                                <p>📘 2 Bài học | ✅ Đã có bài tập</p>
                                <button className="btn btn-light">+ Mục trong chương trình</button>
                            </div>

                            {/* Thêm chương */}
                            <button className="btn btn-primary mt-4">+ Thêm chương</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
