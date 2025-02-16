// import React from 'react'

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { showCourseBasic } from "../../../api/apiService";
import { useParams } from "react-router-dom";

export default function Basic() {
    const { course_id } = useParams()
    const [course, setCourse] = useState([])

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/tinymce/7.6.0/tinymce.min.js";
        script.integrity = "sha512-/4EpSbZW47rO/cUIb0AMRs/xWwE8pyOLf8eiDWQ6sQash5RP1Cl8Zi2aqa4QEufjeqnzTK8CLZWX7J5ZjLcc1Q==";
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";
        script.onload = () => {
            window.tinymce.init({
                selector: "textarea#coursedescriptioneditor",
                license_key: 'gpl',
                height: 250,
                menubar: false,
            });
        };
        document.body.appendChild(script);
        const getCourseBasic = async () => {
            try {
                const res = await showCourseBasic(course_id)
                setCourse(res.data.course)

            } catch (error) {
                console.log(error);
            }
        }
        getCourseBasic();
    }, []);
    console.log(course);

    return (
        <>
            {course &&
                <div className="card">
                    <div className="card-header">
                        <h3 className="m-0">Tổng quan khóa học</h3>
                    </div>
                    <div className="card-body">
                        <form className="row">
                            <div className="col-12 mb-3">
                                <label htmlFor="" className="fw-bold">Tiêu đề</label>
                                <input placeholder="Nhập tiêu đề khoá học" type="text" name="" id="" className="form-control" />
                                <small>Tiêu đề của bạn không những phải thu hút sự chú ý, chứa nhiều thông tin mà còn được tối ưu hóa để dễ tìm kiếm</small>
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="" className="fw-bold">Mô tả</label>
                                <textarea placeholder="Nhập mô tả" name="" id="coursedescriptioneditor"></textarea>
                                <small>Mô tả phải dài ít nhất là 200 từ.</small>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="" className="fw-bold">Mức giá thông thường</label>
                                <input placeholder="Nhập giá tiền" className="form-control" type="number" name="" id="" />
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="" className="fw-bold">Mức giá khuyến mãi</label>
                                <input placeholder="Nhập giá khuyến mãi" className="form-control" type="number" name="" id="" />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="" className="fw-bold">Thông tin cơ bản</label>
                                <div className="row">
                                    <div className="col-4 mb-3">
                                        <select className="form-select" name="" id="">
                                            <option value="">--Chọn ngôn ngữ--</option>
                                        </select>
                                    </div>
                                    <div className="col-4 mb-3">
                                        <select className="form-select" name="" id="">
                                            <option value="">--Chọn trình độ--</option>
                                        </select>
                                    </div>
                                    <div className="col-4 mb-3">
                                        <select className="form-select" name="" id="">
                                            <option value="">--Chọn danh mục--</option>
                                        </select>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label htmlFor="" className="fw-bold">Khóa học của bạn chủ yếu giảng dạy nội dung nào?</label>
                                        <input placeholder="Ví dụ: Lập trình website" className="form-control" type="text" name="" id="" />
                                    </div>

                                    <div className="col-12 row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="" className="fw-bold">Hình ảnh khoá học</label>
                                            {course
                                                ? (<></>)
                                                : (<><img src="/default-thumbnail.jpg" alt="ảnh khoá học" className="w-100 rounded border" /></>)}
                                        </div>
                                        <div className="col-6 mt-3">
                                            <p>Tải hình ảnh khóa học lên tại đây. Để được chấp nhận, hình ảnh phải đáp ứng tiêu chuẩn chất lượng hình ảnh khóa học. Hướng dẫn quan trọng: 750x422 pixel; .jpg, .jpeg,. gif, hoặc .png. và không có chữ trên hình ảnh.</p>
                                            <input type="file" name="" className="form-control" id="" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="col-6 row">
                                            <label htmlFor="" className="fw-bold">Video quảng cáo
                                            </label>
                                            <ReactPlayer
                                                url="nan"
                                                controls={true}
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
