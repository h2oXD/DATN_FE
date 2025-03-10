// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axiosClient from "../../api/axios";

// export default function ChangePassword() {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChangePassword = async () => {
//     setLoading(true);
//     setMessage(null);
//     setError(null);

//     try {
//       const response = await axiosClient.post("/change-password", {
//         current_password: currentPassword,
//         password: newPassword,
//         password_confirmation: confirmPassword,
//       });

//       setMessage(response.data.message || "Đổi mật khẩu thành công!");
//       localStorage.removeItem("token"); // Nếu token lưu ở localStorage
//       sessionStorage.removeItem("token"); // Nếu token lưu ở sessionStorage

//       // Chuyển về trang đăng nhập sau 2s
//       setTimeout(() => navigate("/"), 2000);
//     } catch (err) {
//       setError(err.response?.data?.error || "Đổi mật khẩu thất bại!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-80 bg-light">
//       <div
//         className="card shadow-lg p-5 rounded-4 my-8"
//         style={{ maxWidth: "420px", width: "100%" }}
//       >
//         <h3 className="text-center fw-bold mb-3">Đổi mật khẩu</h3>
//         <p className="text-center text-muted mb-4">
//           Vui lòng nhập thông tin để đổi mật khẩu.
//         </p>

//         {message && <div className="alert alert-success">{message}</div>}
//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-4">
//           <label className="form-label fw-bold">Mật khẩu hiện tại</label>
//           <div className="position-relative">
//             <input
//               type={showCurrentPassword ? "text" : "password"}
//               className="form-control rounded-3 p-3 pe-5"
//               placeholder="Nhập mật khẩu hiện tại"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               autoComplete="current-password"
//             />
//             <span
//               className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
//               onClick={() => setShowCurrentPassword(!showCurrentPassword)}
//               style={{ cursor: "pointer" }}
//             >
//               {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="form-label fw-bold">Mật khẩu mới</label>
//           <div className="position-relative">
//             <input
//               type={showNewPassword ? "text" : "password"}
//               className="form-control rounded-3 p-3 pe-5"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               autoComplete="new-password"
//             />
//             <span
//               className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
//               onClick={() => setShowNewPassword(!showNewPassword)}
//               style={{ cursor: "pointer" }}
//             >
//               {showNewPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="form-label fw-bold">Xác nhận mật khẩu</label>
//           <div className="position-relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               className="form-control rounded-3 p-3 pe-5"
//               placeholder="Nhập lại mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               autoComplete="new-password"
//             />
//             <span
//               className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               style={{ cursor: "pointer" }}
//             >
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//         </div>

//         <button
//           className="btn btn-primary w-100 rounded-3 py-3 fw-bold mb-2"
//           disabled={
//             !currentPassword ||
//             !newPassword ||
//             !confirmPassword ||
//             newPassword !== confirmPassword ||
//             loading
//           }
//           onClick={handleChangePassword}
//         >
//           {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
//         </button>
//       </div>
//     </div>
//   );
// }

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../contexts/StoreProvider"; // Lấy context để mở modal
import axiosClient from "../../api/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { setShowLoginModal } = useContext(StoreContext); // Sử dụng biến để mở modal đăng nhập

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChangePassword = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await axiosClient.post("/change-password", {
        current_password: currentPassword,
        password: newPassword,
        password_confirmation: confirmPassword,
      });

      setMessage(response.data.message || "Đổi mật khẩu thành công!");

      // Xóa token
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");

      // Điều hướng về trang chủ
      setTimeout(() => {
        navigate("/"); // Quay về trang chủ
        setShowLoginModal(true); // Mở modal đăng nhập
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Đổi mật khẩu thất bại!");
    }

    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-80 bg-light">
      <div
        className="card shadow-lg p-5 rounded-4 my-8"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <h3 className="text-center fw-bold mb-3">Đổi mật khẩu</h3>
        <p className="text-center text-muted mb-4">
          Vui lòng nhập thông tin để đổi mật khẩu.
        </p>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-4">
          <label className="form-label fw-bold">Mật khẩu hiện tại</label>
          <div className="position-relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              className="form-control rounded-3 p-3 pe-5"
              placeholder="Nhập mật khẩu hiện tại"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              style={{ cursor: "pointer" }}
            >
              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">Mật khẩu mới</label>
          <div className="position-relative">
            <input
              type={showNewPassword ? "text" : "password"}
              className="form-control rounded-3 p-3 pe-5"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              onClick={() => setShowNewPassword(!showNewPassword)}
              style={{ cursor: "pointer" }}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">Xác nhận mật khẩu</label>
          <div className="position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control rounded-3 p-3 pe-5"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ cursor: "pointer" }}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button
          className="btn btn-primary w-100 rounded-3 py-3 fw-bold mb-2"
          disabled={
            !currentPassword ||
            !newPassword ||
            !confirmPassword ||
            newPassword !== confirmPassword ||
            loading
          }
          onClick={handleChangePassword}
        >
          {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
        </button>
      </div>
    </div>
  );
}
