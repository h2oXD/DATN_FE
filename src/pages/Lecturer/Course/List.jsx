// import React from 'react'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
// import Icon from "../../../components/Icon";

export default function List() {
    const [page, setPage] = useState(1);
    const [courses, setCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                await axiosClient.get(`lecturer/courses?page=${page}`)
                    .then(res => {
                        console.log(res.data.courses);

                        setCourses(res.data.courses.data);
                        setTotalPages(res.data.courses.last_page);
                    })
            } catch (error) {
                console.log(error);
                toast.error("Không thể tải .");
            }
        };
        fetchCourse();
    }, [page]);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-header d-flex">
                    <h3 className="mb-0">Tất cả khoá học</h3>
                </div>
                <div className="card-body">
                    <form className="row gx-3">
                        <div className="col-lg-7 col-md-4 col-12 mb-lg-0 mb-2">
                            <input type="search" className="form-control" placeholder="Tìm kiếm khoá học" />
                        </div>
                        <div className="col-lg-3 col-md-4 mb-lg-0 mb-2 col-12">
                            <select className="form-select">
                                <option value="">Tất cả khoá học</option>
                                <option value="">Mới nhất</option>
                                <option value="">Cũ nhất</option>
                                <option value="">Bản nháp</option>
                                <option value="">Đã duyệt</option>
                                <option value="">Chờ duyệt</option>
                                <option value="">A-Z</option>
                                <option value="">Z-A</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-md-4 col-12">
                            <Link to={'/lecturer/course/create'} className="btn btn-success">Tạo mới khoá học</Link>
                        </div>
                    </form>
                </div>
                <div className="table-responsive overflow-y-hidden">
                    <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th>Khoá học</th>
                                <th>Số lượng học viên</th>
                                <th>Đánh giá</th>
                                <th>Trạng thái</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <a href="#">
                                                    <img src="../assets/images/course/course-wordpress.jpg" alt="course" className="rounded img-4by3-lg" />
                                                </a>
                                            </div>
                                            <div className="ms-3">
                                                <h4 className="mb-1 h5">
                                                    <a href="#" className="text-inherit">{course.title}</a>
                                                </h4>
                                                <ul className="list-inline fs-6 mb-0">
                                                    <li className="list-inline-item">
                                                        <span className="align-text-bottom">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>1h 30m</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                                        </svg>
                                                        Beginner
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        11,200
                                    </td>
                                    <td>
                                        <span className="lh-1">
                                            <span className="text-warning">4.5</span>
                                            <span className="mx-1 align-text-top">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </span>
                                            (3,250)
                                        </span>
                                    </td>
                                    <td>
                                        {course.status == 'draft' && (<span className="badge bg-dark">Bản nháp</span>)}
                                        {course.status == 'pending' && (<span className="badge bg-warning">Chờ duyệt</span>)}
                                        {course.status == 'published' && (<span className="badge bg-success">Đã xuất bản</span>)}
                                    </td>
                                    <td>
                                        <span className="dropdown dropstart">
                                            <a
                                                className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                href="#"
                                                role="button"
                                                id="courseDropdown"
                                                data-bs-toggle="dropdown"
                                                data-bs-offset="-20,20"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical"></i>
                                            </a>
                                            <span className="dropdown-menu" aria-labelledby="courseDropdown">
                                                <span className="dropdown-header">Setting</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fe fe-edit dropdown-item-icon"></i>
                                                    Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fe fe-trash dropdown-item-icon"></i>
                                                    Remove
                                                </a>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className="p-5">
                        <ul className="pagination mb-0">
                            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                                <button className="page-link mx-1 rounded" onClick={() => handlePageChange(page - 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className={`page-item ${page === index + 1 ? "active" : ""}`}>
                                    <button className="page-link mx-1 rounded" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                                <button className="page-link mx-1 rounded" onClick={() => handlePageChange(page + 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}
