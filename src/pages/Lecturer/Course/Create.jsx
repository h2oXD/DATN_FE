// import React from 'react'

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";

export default function Create() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    // Gọi API lấy danh mục khi component được render
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axiosClient.get("/categories"); // Gọi API backend để lấy danh mục

                setCategories(response.data.data); // Lưu dữ liệu danh mục vào state
            } catch (error) {
                console.log(error);

                toast.error("Không thể tải danh mục.");
            }
        };
        fetchCategories();
    }, []);
    const formik = useFormik({
        initialValues: {
            title: "",
            category_id: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Tiêu đề không được để trống"),
        }),
        onSubmit: async (values) => {
            if (isLoading === true) return;
            setIsLoading(true);
            console.log(values);
            await axiosClient
                .post("/lecturer/courses", values)
                .then((res) => {
                    console.log(res);
                    toast.success("Thành công");
                    setIsLoading(false);
                    navigate(`/lecturer/course/edit/${res.data.course_id}`)
                })
                .catch((errors) => {
                    if (errors.status == 422) {
                        const errorsMessageServe = errors.response.data.errors
                        console.log(errorsMessageServe);
                    } else {
                        console.log(errors);
                    }
                    toast.error("Thất bại");
                    setIsLoading(false);
                });
        },
    });
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">Tạo mới khoá học</h3>
                    <button
                        type="submit"
                        className="h-100 m-0 btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault(); // Ngăn chặn hành vi mặc định của button
                            formik.handleSubmit(); // Submit form trước khi chuyển trang
                        }}
                    >Tiếp tục</button>
                </div>
                <div className="card-body">
                    <form className="row" onSubmit={formik.handleSubmit}>
                        <div className="mb-3 col-12">
                            <div className="d-flex">
                                <label htmlFor="addCourseTitle" className="form-label">Tiêu đề</label>
                                <small className="ms-1 text-danger">*</small>
                                {formik.errors.title && <small className="text-danger mx-3">{formik.errors.title}</small>}
                            </div>
                            <input name="title" value={formik.values.title}
                                onChange={formik.handleChange} type="text" className="form-control" id="addCourseTitle" placeholder="Tiêu đề của khoá học" />
                            <small className="ms-1">Nếu bạn không nghĩ ra được một tiêu đề hay ngay bây giờ. Bạn có thể thay đổi sau.</small>
                        </div>
                        <div className="mb-3 col-12">
                            <div className="d-flex">
                                <label htmlFor="" className="form-label">Danh mục</label>
                                <small className="ms-1 text-danger">*</small>
                            </div>
                            <select name="category_id" value={formik.values.category_id}
                                onChange={formik.handleChange} className="form-select">
                                <option value="">Chọn một danh mục</option>
                                {categories.length > 0 ? (
                                    categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Đang tải danh mục...</option>
                                )}
                            </select>
                            <small className="ms-1">Nếu không chắc chắn về thể loại phù hợp, bạn có thể thay đổi sau.</small>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
