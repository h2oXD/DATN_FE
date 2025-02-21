export default function BuyCourse() {
  return (
    <div className="row bg-white p-2 shadow rounded">
      <div className="col-md-7 p-3 border-end">
        <h4 className="mb-3">Thông tin khóa học</h4>
        <div className="d-flex align-items-center">
          <img
            src="../../../assets/images/course/course-javascript.jpg"
            className="rounded "
            alt="Khóa học"
            style={{ maxWidth: "170px", height: "110px" }}
          />
          <div className="ms-2">
            <h5 className="mb-2 fw-bold">Lập trình C++ cơ bản, nâng cao</h5>
            <span className="badge bg-secondary mb-2">Chuyên Ngành FE</span>
            <div className="d-flex align-items-center mt-1">
              <img
                src="../../../assets/images/avatar/avatar-1.jpg"
                className="rounded-circle me-2"
                alt="Giảng viên"
                style={{ width: "24px", height: "24px" }}
              />
              <span className="text-muted">Thầy Tống Văn Đức</span>
            </div>
            <div className="lh-1 mt-2 text-warning">4.5 ★ (9,300)</div>
          </div>
        </div>
      </div>
      <div className="col-md-5 p-3">
        <h4 className="mb-3">Chi tiết thanh toán</h4>
        <div className="mb-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập mã giảm giá"
              style={{ flex: "3", height: "40px" }}
            />
            <button className="btn btn-primary ms-1">Áp dụng</button>
          </div>
          <a
            href="#"
            className="d-block mt-1 text-primary"
            style={{ fontSize: "14px" }}
          >
            Xem danh sách mã giảm giá
          </a>
        </div>
        <p className="d-flex justify-content-between">
          <span>Số dư hiện tại:</span>
          <span className="fw-bold text-warning"> 5228 VNĐ</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Giá gốc:</span> <span className="fw-bold">300 VNĐ</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Giảm giá:</span> <span className="fw-bold">0</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Tổng thanh toán:</span>
          <span className="fw-bold text-danger">300 VNĐ</span>
        </p>
        <button className="btn btn-primary w-100 mb-2">Thanh toán</button>
        <button className="btn btn-outline-warning w-100">Nạp thêm tiền</button>
      </div>
    </div>
  );
}
