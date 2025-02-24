import {
  FaChalkboardTeacher,
  FaRegLightbulb,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function First() {
  return (
    <>
      <div className="container mt-4">
        {/* Banner */}
        <div className="bg-primary text-white rounded p-5 d-flex flex-column flex-md-row align-items-center shadow animate__animated animate__fadeIn">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold animate__animated animate__fadeInLeft">
              Hãy đến dạy cùng chúng tôi
            </h1>
            <p className="mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
              Trở thành người hướng dẫn và thay đổi cuộc sống của chính bạn.
            </p>
            <Link
              to="/registerTeacher/Last"
              className="btn btn-light btn-lg mt-3 fw-semibold animate__animated animate__fadeInUp animate__delay-2s"
            >
              Đăng ký ngay
            </Link>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://watermark.lovepik.com/photo/20211201/large/lovepik-beautiful-woman-sitting-and-playing-computer-picture_501316138.jpg"
              alt="Giảng viên"
              className="img-fluid rounded shadow animate__animated animate__zoomIn animate__delay-1s"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Lợi ích */}
        <div className="row mt-5 text-center">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-4 h-100 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="text-primary display-4 mb-3">
                <FaChalkboardTeacher />
              </div>
              <h5 className="fw-bold">Dạy theo cách của bạn</h5>
              <p className="text-muted">
                Xuất bản khóa học theo nhu cầu của bạn và làm chủ nội dung của
                chính mình.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-4 h-100 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="text-warning display-4 mb-3">
                <FaRegLightbulb />
              </div>
              <h5 className="fw-bold">Truyền cảm hứng cho người học</h5>
              <p className="text-muted">
                Giúp người học khám phá đam mê và nâng cao kỹ năng.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-4 h-100 animate__animated animate__fadeInUp animate__delay-3s">
              <div className="text-success display-4 mb-3">
                <FaMoneyBillWave />
              </div>
              <h5 className="fw-bold">Nhận thưởng</h5>
              <p className="text-muted">
                Kiếm tiền từ mỗi lần tải xuống và nhận thù lao xứng đáng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
