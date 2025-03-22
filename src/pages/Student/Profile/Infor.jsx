import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsers, FaEye, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditInfor from "./EditInfor";

const ProfileStudent = () => {
  return (
    <div className=" py-5">
      <div className="row">
        {/* Thông tin cá nhân */}
        <div className="col-md-4">
          <div className="card p-4 border-0 shadow-sm text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              className="rounded-circle img-fluid mx-auto mb-3 w-30"
              alt="User Avatar"
            />
            <h4 className="fw-bold">Nguyen Thi Hong Nhung (FPL HN)</h4>
            <p className="text-muted">@thihongnhungfplhnnguyen</p>
            <p className="small text-secondary">
              0 người theo dõi · 0 đang theo dõi
            </p>
            <p className="small text-secondary">Tham gia từ 9 ngày trước</p>
            <Link
              className="position-absolute top-0 end-0 m-2"
              style={{ fontSize: "1.2rem", color: "#333" }}
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              <EditInfor />
            </Link>
          </div>
        </div>

        {/* Danh sách khóa học */}
        <div className="col-md-8">
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-4 position-relative d-inline-block pb-2">
              Khóa học đã đăng ký (1)
              <span
                className="position-absolute start-0 bottom-0 w-100"
                style={{
                  height: "4px",
                  background: "linear-gradient(to right, #ff7eb3, #ff758c)",
                  borderRadius: "2px",
                }}
              ></span>
            </h4>

            {/* Card khóa học */}
            <div
              className="card border-0 shadow-sm rounded-4 overflow-hidden"
              style={{ maxWidth: "300px" }}
            >
              {/* Hình ảnh khóa học */}
              <div className="position-relative">
                <img
                  src=" /default-thumbnail.jpg"
                  className="img-fluid w-100"
                  alt="Course Thumbnail"
                  style={{ height: "150px", objectFit: "cover" }}
                />
              </div>

              {/* Nội dung khóa học */}
              <div className="p-3">
                <h5 className="mb-2" style={{ fontSize: "1rem" }}>
                  Kiến Thức Nhập Môn IT
                </h5>
                <p
                  className="text-danger fw-bold mb-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  Miễn phí
                </p>

                {/* Thông tin khóa học */}
                <div className="d-flex justify-content-between text-muted small">
                  <span>
                    <FaUsers className="me-1" /> 133.464
                  </span>
                  <span>
                    <FaEye className="me-1" /> 9
                  </span>
                  <span>
                    <FaClock className="me-1" /> 3h12p
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudent;
