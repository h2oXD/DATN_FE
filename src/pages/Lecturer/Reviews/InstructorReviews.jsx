export default function InstructorReviews() {
  return (
    <div className="container py-5">
      <h2
        className="p-3 mb-4"
        style={{
          borderLeft: "5px solid #007bff",
          paddingLeft: "15px",
          color: "#333",
          backgroundColor: "#f8f9fa",
          borderRadius: "5px",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Đánh giá Giảng viên
      </h2>

      {/* Chọn giảng viên */}
      <div className="mb-4">
        <select className="form-select">
          <option>Chọn giảng viên</option>
          <option>Thầy Nguyễn Văn A</option>
          <option>Thầy Trần Thị B</option>
          <option>Thầy Lê Văn C</option>
        </select>
      </div>

      {/* Thông tin giảng viên */}
      <div className="card shadow-sm p-4">
        <div className="d-flex align-items-center mb-3">
          <img
            src="../assets/images/avatar/avatar-1.jpg"
            alt="Giảng viên"
            className="rounded-circle border border-2 me-3"
            style={{ width: "70px", height: "70px" }}
          />
          <div>
            <h4 className="fw-semibold">Nguyễn Văn A</h4>
            <p className="text-muted mb-1">Giảng viên Khoa CNTT</p>
            <div className="text-warning fs-5">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* Danh sách đánh giá */}
        <div className="border-top pt-3">
          <div className="border rounded p-3 bg-light mb-3">
            <h5 className="fw-semibold">Lê Thị Thùy Linh</h5>
            <p className="text-muted small">01/12/2024</p>
            <div className="text-warning fs-5">⭐⭐⭐⭐⭐</div>
            <p className="mt-2">
              Giảng viên giảng rất dễ hiểu, truyền đạt tốt!
            </p>
            <div className="d-flex align-items-center gap-3 mt-3">
              <button className="btn btn-primary">Phản hồi</button>
              <button className="text-danger fs-4 border-0 bg-transparent">
                ❤️
              </button>
            </div>
          </div>

          <div className="border rounded p-3 bg-light">
            <h5 className="fw-semibold">Trần Văn Bảo</h5>
            <p className="text-muted small">10/11/2024</p>
            <div className="text-warning fs-5">⭐⭐⭐⭐</div>
            <p className="mt-2">Thầy dạy khá tốt nhưng hơi nhanh.</p>
            <div className="d-flex align-items-center gap-3 mt-3">
              <button className="btn btn-primary">Phản hồi</button>
              <button className="text-danger fs-4 border-0 bg-transparent">
                ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
