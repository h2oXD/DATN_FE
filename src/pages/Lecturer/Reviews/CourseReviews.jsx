import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export default function CourseReviews() {
  return (
    <div className="container mt-5">
      {/* Tiêu đề đánh giá - Cập nhật đẹp hơn */}
      <h2
        className="fw-bold text-center text-white py-3 rounded shadow"
        style={{
          background: "linear-gradient(to right, #007bff, #6610f2)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        Đánh giá Khóa học
      </h2>

      {/* Dropdown chọn khóa học */}
      <div className="mb-4 mt-3 text-center">
        <select className="form-select w-auto d-inline-block">
          <option>Lập trình C++ cơ bản, nâng cao</option>
          <option>Lập trình JavaScript nâng cao</option>
          <option>Thiết kế UI/UX</option>
        </select>
      </div>

      {/* Card hiển thị đánh giá */}
      <div className="card shadow-sm p-4 w-50 mx-auto">
        {/* Hàng chứa Avatar và Thông tin học viên */}
        <div className="d-flex align-items-center mb-2">
          {/* Avatar Icon */}
          <FaUserCircle className="text-secondary fs-1 me-2" />

          {/* Thông tin học viên */}
          <div>
            <h5 className="fw-bold mb-1">Lê Thị Thùy Linh</h5>
            <p className="text-muted small m-0">01/12/2024</p>
          </div>
        </div>

        {/* Đánh giá sao */}
        <div className="text-warning fs-5">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
        </div>

        {/* Nhận xét */}
        <p className="mt-2 mb-3">Khóa học rất hay</p>

        {/* Nút phản hồi */}
        <button className="btn btn-primary btn-sm">Phản hồi</button>
      </div>
    </div>
  );
}
