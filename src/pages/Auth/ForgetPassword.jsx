// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import axiosClient from "../../api/axios";
import { toast } from "react-toastify";

// export default function ForgetPassword() {
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState("");

//   return (
//     <>
//       {/* Link mở modal */}
//       <a className="mt-1" href="#" onClick={() => setShowModal(true)}>
//         Quên mật khẩu?
//       </a>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal fade show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content p-4">
//               <div className="d-flex justify-content-between align-items-center">
//                 <button
//                   className="btn btn-link"
//                   onClick={() => setShowModal(false)}
//                 >
//                   &larr; Quay lại
//                 </button>
//                 <button
//                   className="btn-close"
//                   onClick={() => setShowModal(false)}
//                 ></button>
//               </div>

//               {/* Logo */}
//               <div className="text-center mt-2">
//                 <img src="" alt="Logo" width={40} />
//               </div>

//               {/* Tiêu đề */}
//               <h3 className="text-center mt-2 fw-bold">Quên mật khẩu?</h3>
//               <p className="text-center text-muted">
//                 Nhập email của bạn và chúng tôi sẽ gửi đường dẫn đặt lại mật
//                 khẩu.{" "}
//               </p>

//               {/* Form nhập email */}
//               <div className="mb-3">
//                 <label className="form-label fw-bold">Email</label>
//                 <input
//                   type="email"
//                   className="form-control rounded-3 p-2"
//                   placeholder="Nhập email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <button
//                 className="btn btn-primary w-100 rounded-3 py-2 fw-bold"
//                 disabled={!email}
//               >
//                 Gửi yêu cầu đặt lại mật khẩu
//               </button>

//               {/* Điều khoản sử dụng */}
//               <p className="text-center text-muted mt-3">
//                 Việc bạn tiếp tục sử dụng trang web này đồng nghĩa với bạn đồng
//                 ý với <a href="#">điều khoản sử dụng</a>.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
export default function ForgetPassword() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    toast.success("Gửi yêu cầu thành công!");
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await axiosClient.post("/forgot-password", { email });
      setMessage(response.data.message);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError(err.response.data.errors.email[0]);
      } else {
        setError("Đã có lỗi xảy ra. Vui lòng thử lại!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Link mở modal */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        Quên mật khẩu?
      </a>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4" style={{ minHeight: "450px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-link"
                  onClick={() => setShowModal(false)}
                >
                  &larr; Quay lại
                </button>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              {/* Logo */}
              <div className="text-center mt-2">
                <img src="" alt="Logo" width={40} />
              </div>
              <h3 className="text-center mt-3 fw-bold">Quên mật khẩu?</h3>
              <p className="text-center text-muted">
                Nhập email của bạn và chúng tôi sẽ gửi đường dẫn đặt lại mật
                khẩu.
              </p>

              {/* Thay form bằng div */}
              <div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className={`form-control rounded-3 p-2 ${
                      error ? "is-invalid" : ""
                    }`}
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
                </div>

                {/* Thay button submit bằng button thường */}
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-3 py-2 fw-bold my-3"
                  disabled={!email || loading}
                  onClick={handleSubmit} // Không còn submit form, chỉ gọi API
                >
                  {loading ? "Đang gửi..." : "Gửi yêu cầu đặt lại mật khẩu"}
                </button>
              </div>

              {message && (
                <div className="alert alert-success mt-3">{message}</div>
              )}
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
