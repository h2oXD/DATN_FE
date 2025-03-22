export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h5 className="mb-3 text-light">
                <img src="logo.png" width="30" className="me-2" /> LoraSpace -
                Nền Tảng Học Trực Tuyến
              </h5>
              <p style={{ fontSize: "13px" }}>
                <strong>Điện thoại:</strong> 0123456789
              </p>
              <p style={{ fontSize: "13px" }}>
                <strong>Email:</strong> contact@gmail.com
              </p>
              <p style={{ fontSize: "13px" }}>
                <strong>Địa chỉ:</strong> 13 phố Trịnh Văn Bô,TP Hà Nội
              </p>
            </div>

            <div className="col-md-2">
              <h5 className="text-light">VỀ CHÚNG TÔI</h5>
              <ul
                className="list-unstyled "
                style={{ fontSize: "14px", lineHeight: "2" }}
              >
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Điều khoản
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Bảo mật
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-light">CHÍNH SÁCH VÀ ĐIỀU KHOẢN</h5>
              <ul
                className="list-unstyled "
                style={{ fontSize: "14px", lineHeight: "2" }}
              >
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Điều khoản dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Chính sách hoàn tiền
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Chính sách xử lý khiếu nại
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5 className="text-light">HỖ TRỢ KHÁCH HÀNG</h5>
              <ul
                className="list-unstyled"
                style={{ fontSize: "14px", lineHeight: "2" }}
              >
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Gửi yêu cầu hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Liên hệ bộ phận hỗ trợ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-3">
            <p className="mb-0">
              &copy; 2025 LoraSpace. Nền tảng học tập trực tuyến với hàng ngàn
              khóa học chất lượng cao từ các chuyên gia hàng đầu.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
