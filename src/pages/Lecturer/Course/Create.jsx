// import React from 'react'

export default function Create() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="mb-0">Tạo mới khoá học</h3>
                </div>
                <div className="card-body">
                    <form className="row">
                        <div className="mb-3 col-lg-6">
                            {/* <div className="d-flex">
                                <label htmlFor="addCourseTitle" className="form-label">Tiêu đề</label>
                                <small className="ms-1 text-danger">*</small>
                            </div> */}
                            <input type="text" className="form-control" id="addCourseTitle" placeholder="Tiêu đề của khoá học" />
                        </div>
                        <div className="mb-3 col-lg-6">
                            {/* <div className="d-flex">
                                <label htmlFor="" className="form-label">Danh mục</label>
                                <small className="ms-1 text-danger">*</small>
                            </div> */}
                            <select className="form-select">
                                <option value="">Chọn một danh mục</option>
                                <option value="">Thiêt kế đồ hoạ</option>
                                <option value="">Công nghệ thông tin</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
