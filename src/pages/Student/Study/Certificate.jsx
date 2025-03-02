import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaDownload,
  FaUserGraduate,
  FaStar,
  FaUsers,
  FaFire,
} from "react-icons/fa";
import axiosClient from "../../../api/axios";

const Certificate = () => {
  const { user_id, course_id } = useParams();
  const [certificateUrl, setCertificateUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log("User ID:", user_id, "Course ID:", course_id); // Debugging
    if (!user_id || !course_id) {
      setErrorMessage("Không tìm thấy thông tin khóa học hoặc người dùng.");
      return;
    }

    const fetchCertificate = async () => {
      try {
        const response = await axiosClient.post(
          `/certificates/student/${user_id}/courses/${course_id}`
        );
        if (response.status === 201) {
          setCertificateUrl(response.data.certificate_url);
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        console.error("Lỗi khi lấy chứng chỉ:", error);
        if (error.response) {
          if (error.response.status === 403) {
            setErrorMessage("Bạn không có quyền truy cập chứng chỉ này.");
          } else if (error.response.status === 400) {
            setErrorMessage("Bạn chưa hoàn thành khóa học này.");
          } else if (error.response.status === 404) {
            setErrorMessage("Bạn chưa đăng ký khóa học này.");
          } else {
            setErrorMessage("Lỗi không xác định, vui lòng thử lại.");
          }
        }
      }
    };

    fetchCertificate();
  }, [user_id, course_id]);

  // Xử lý tải chứng chỉ
  const handleDownload = () => {
    if (certificateUrl) {
      const link = document.createElement("a");
      link.href = certificateUrl;
      link.download = "certificate.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="mb-5 fw-bold">Chứng chỉ hoàn thành khóa học</h3>
      {errorMessage ? (
        <div className="alert alert-danger">{errorMessage}</div>
      ) : (
        <div className="row g-2 justify-content-center">
          {/* Phần chứng chỉ */}
          <div className="col-lg-7">
            <img
              src={certificateUrl || "/default-thumbnail.jpg"}
              alt="Chứng chỉ"
              className="img-fluid rounded"
            />
          </div>

          {/* Phần thông tin */}
          <div className="col-lg-4">
            <div className="bg-white p-4 shadow-lg rounded-3 border">
              <h5 className="fw-bold text-dark mb-3">
                <FaUserGraduate className="me-2 text-primary" /> Người nhận giấy
                chứng nhận
              </h5>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <span className="text-secondary fw-bold">N</span>
                </div>
                <p className="ms-2 mb-0 fw-bold text-dark">
                  Nguyễn Thị Hồng Nhung
                </p>
              </div>
              <div className="card border-0 shadow-xl">
                <div className="card-body">
                  <img
                    src="/default-thumbnail.jpg"
                    alt="Course Thumbnail"
                    className="img-fluid rounded mb-3"
                  />
                  <h4 className="fw-semibold text-dark">
                    Lập trình C++ cơ bản, nâng cao
                  </h4>

                  <div className="d-flex justify-content-between text-muted">
                    <span>
                      <FaFire className="me-1 text-danger" /> 560{" "}
                      <span className="text-decoration-line-through">300</span>
                    </span>
                    <span>
                      <FaStar className="text-warning me-1" /> 5
                    </span>
                    <span>
                      <FaUsers className="me-1 text-secondary" /> 1
                    </span>
                  </div>
                  {certificateUrl && (
                    <button
                      className="btn btn-primary w-100 mt-3 fw-semibold"
                      onClick={handleDownload}
                    >
                      <FaDownload className="me-2" /> Tải xuống
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
