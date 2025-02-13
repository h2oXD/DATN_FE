// import React from 'react'
import {
  FaMedal,
  FaBook,
  FaTrophy,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

export default function Goals() {
  return (
    <div className="container mt-4">
      {/* Tiêu đề */}
      <div className="text-center">
        <h2 className="fw-bold">
          <FaTrophy className="text-success me-2" /> Mục Tiêu Khóa Học
        </h2>
        <p className="text-muted">
          Định nghĩa mục tiêu học tập để thu hút học viên tham gia khóa học.
        </p>
      </div>

      {/* Mục tiêu khóa học */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="fw-bold">
          <FaBook className="text-primary me-2" /> Mục Tiêu Học Tập
        </h5>
        <ul className="list-group">
          <li className="list-group-item">
            <FaCheckCircle className="text-success me-2" /> Hiểu cơ bản về lập
            trình Python.
          </li>
          <li className="list-group-item">
            <FaCheckCircle className="text-success me-2" /> Xây dựng ứng dụng
            web với ReactJS.
          </li>
          <li className="list-group-item">
            <FaCheckCircle className="text-success me-2" /> Thành thạo SQL và
            quản lý dữ liệu.
          </li>
        </ul>
      </div>

      {/* Yêu cầu đầu vào */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="fw-bold">
          <FaUsers className="text-danger me-2" /> Yêu Cầu Tham Gia
        </h5>
        <p>Học viên cần có kiến thức cơ bản về toán và tư duy logic.</p>
        <p>Không yêu cầu kinh nghiệm lập trình trước.</p>
      </div>

      {/* Đối tượng phù hợp */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="fw-bold">
          <FaLightbulb className="text-warning me-2" /> Ai Nên Tham Gia?
        </h5>
        <ul className="list-group">
          <li className="list-group-item">
            Người mới bắt đầu muốn học lập trình.
          </li>
          <li className="list-group-item">
            Sinh viên CNTT cần kiến thức nền tảng.
          </li>
          <li className="list-group-item">
            Những ai muốn ứng dụng SQL vào công việc.
          </li>
        </ul>
      </div>

      {/* Hệ thống huy hiệu */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="fw-bold">
          <FaMedal className="text-warning me-2" /> Huy Hiệu & Chứng Chỉ
        </h5>
        <p>
          Học viên sẽ nhận được chứng chỉ hoàn thành khóa học và huy hiệu thành
          tích.
        </p>
      </div>
    </div>
  );
}
