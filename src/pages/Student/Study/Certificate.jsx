import {
  FaDownload,
  FaUserGraduate,
  FaStar,
  FaUsers,
  FaFire,
} from "react-icons/fa";

const Certificate = () => {
  // Hàm xử lý tải xuống
  const handleDownload = () => {
    const certificateUrl = "/default-thumbnail.jpg"; // Thay thế bằng URL thực tế của chứng chỉ
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = "certificate.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container py-5">
      <h3 className="mb-5 fw-bold">Chứng chỉ hoàn thành khóa học</h3>
      <div className="row g-2 justify-content-center">
        {/* Phần chứng chỉ (hiển thị ảnh mặc định) */}
        <div className="col-lg-7 ">
          <img
            src="/default-thumbnail.jpg"
            alt="Chứng chỉ mặc định"
            className="img-fluid rounded"
          />
        </div>

        {/* Phần thông tin bên phải */}
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
                <h4 className=" fw-semibold text-dark">
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
                <button
                  className="btn btn-primary w-100 mt-3 fw-semibold"
                  onClick={handleDownload}
                >
                  <FaDownload className="me-2" />
                  Tải xuống
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
