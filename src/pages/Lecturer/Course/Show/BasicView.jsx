/* eslint-disable react/prop-types */

import { useOutletContext } from "react-router-dom";
import { getImageUrl } from "../../../../api/common";


export default function BasicView() {
    const courseData = useOutletContext()
    console.log(courseData);
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div>
                        <h3 className="m-0">Tổng quan khóa học</h3>
                    </div>
                </div>
                <div className="card-body">
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="fw-bold">
                            Tiêu đề
                        </label>
                        <input
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Nhập tiêu đề khoá học"
                            className="form-control"
                            value={`${courseData.courseData.title}`}
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="fw-bold">
                            Mô tả
                        </label>
                        <textarea
                            className="form-control"
                            id="description" // <-- ID rất quan trọng cho label và accessibility
                            name="description" // <-- NAME bắt buộc để Formik quản lý giá trị
                            placeholder="Nhập mô tả"
                            value={courseData.courseData.description}
                            disabled
                            readOnly
                        ></textarea>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="is_free"
                                name="is_free"
                                checked={courseData.courseData.is_free}
                                disabled
                                readOnly
                            />
                            <label className="form-check-label" htmlFor="is_free">
                                Khóa học miễn phí
                            </label>
                        </div>
                    </div>
                    {!courseData.courseData.is_free && (
                        <>
                            <div className="col-12 row">
                                <div className="col-lg-6 mb-3 col-12">
                                    <label htmlFor="" className="fw-bold">
                                        Mức giá thông thường
                                    </label>
                                    <input
                                        min={1}
                                        placeholder="Nhập giá tiền"
                                        className="form-control"
                                        type="number"
                                        name="price_regular"
                                        id="price_regular"
                                        value={courseData.courseData.price_regular}
                                        disabled
                                        readOnly
                                    />
                                </div>
                                <div className="col-lg-6 mb-3 col-12">
                                    <label htmlFor="" className="fw-bold">
                                        Mức giá khuyến mãi
                                    </label>
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="Nhập giá khuyến mãi"
                                        className="form-control"
                                        name="price_sale"
                                        id="price_sale"
                                        value={courseData.courseData.price_sale}
                                        disabled
                                        readOnly
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="fw-bold">
                            Thông tin cơ bản
                        </label>
                        <div className="row">
                            <div className="col-lg-4 mb-3 col-12">
                                <input
                                    id="language" // <-- ID rất quan trọng cho label và accessibility
                                    name="language" // <-- NAME bắt buộc để Formik quản lý giá trị
                                    className={`form-select text-dark`}
                                    value={courseData.courseData.language}
                                    disabled
                                    readOnly
                                />
                            </div>
                            <div className="col-lg-4 mb-3 col-12">
                                <input
                                    className="form-select text-dark"
                                    name="level"
                                    id="level"
                                    value={courseData.courseData.level}
                                    disabled
                                    readOnly
                                />
                            </div>
                            <div className="col-lg-4 mb-3 col-12">
                                <input
                                    className="form-select text-dark"
                                    name="category_id"
                                    id="category_id"
                                    value={courseData.courseData.category.name}
                                    disabled
                                    readOnly
                                />
                            </div>
                            <div className="col-lg-6 mb-3 col-12">
                                <label htmlFor="" className="fw-bold">
                                    Khóa học của bạn chủ yếu giảng dạy nội dung nào?
                                </label>
                                <input
                                    placeholder="Ví dụ: Nhiếp ảnh"
                                    className="form-control"
                                    type="text"
                                    name="primary_content"
                                    id="primary_content"
                                    value={courseData.courseData.primary_content}
                                    disabled
                                    readOnly
                                />
                            </div>

                            <div className="col-12 row mb-3">
                                <div className="col-lg-6 col-12">
                                    <label htmlFor="" className="fw-bold">
                                        Hình ảnh khoá học
                                    </label>
                                    <img
                                        src={getImageUrl(courseData.courseData.thumbnail)}
                                        alt="ảnh khoá học"
                                        className="w-100 rounded border"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="" className="fw-bold">
                                        Video quảng cáo
                                    </label>
                                    <video
                                        controls
                                        src={getImageUrl(courseData.courseData.video_preview)}
                                        alt="ảnh khoá học"
                                        className="w-100 rounded border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
