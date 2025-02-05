// import React from 'react'

import { Link } from "react-router-dom";

export default function Create() {
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">Tạo mới khoá học</h3>
                    <Link to={'/lecturer/course/edit'} className="h-100 m-0 btn btn-primary">Tiếp tục</Link>
                </div>
                <div className="card-body">
                    <form className="row">
                        <div className="mb-3 col-12">
                            <div className="d-flex">
                                <label htmlFor="addCourseTitle" className="form-label">Tiêu đề</label>
                                <small className="ms-1 text-danger">*</small>
                            </div>
                            <input type="text" className="form-control" id="addCourseTitle" placeholder="Tiêu đề của khoá học" />
                            <small className="ms-1">Nếu bạn không nghĩ ra được một tiêu đề hay ngay bây giờ. Bạn có thể thay đổi sau.</small>
                        </div>
                        <div className="mb-3 col-12">
                            <div className="d-flex">
                                <label htmlFor="" className="form-label">Danh mục</label>
                                <small className="ms-1 text-danger">*</small>
                            </div>
                            <select className="form-select">
                                <option value="">Chọn một danh mục</option>
                                <option value="">Thiêt kế đồ hoạ</option>
                                <option value="">Công nghệ thông tin</option>
                                <option value="">Tôi chưa biết</option>
                            </select>
                            <small className="ms-1">Nếu không chắc chắn về thể loại phù hợp, bạn có thể thay đổi sau.</small>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
