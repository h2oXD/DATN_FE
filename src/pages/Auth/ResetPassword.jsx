import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    if (!email || !token) {
      setError("Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn!");
      setLoading(false);
      return;
    }

    try {
      const response = await axiosClient.post("/reset-password", {
        email,
        token,
        password,
        password_confirmation: confirmPassword,
      });

      setMessage(response.data.message || "Đặt lại mật khẩu thành công!");
      setPassword("");
      setConfirmPassword("");

      // Chuyển về trang đăng nhập sau 2s
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError(
        err.response?.data?.error || "Mã xác nhận không hợp lệ hoặc đã hết hạn!"
      );
    }

    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-80 bg-light">
      <div
        className="card shadow-lg p-5 rounded-4 my-8"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <h3 className="text-center fw-bold mb-3">Đặt lại mật khẩu</h3>
        <p className="text-center text-muted mb-4">
          Vui lòng nhập mật khẩu mới để tiếp tục.
        </p>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-4">
          <label className="form-label fw-bold">Mật khẩu mới</label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control rounded-3 p-3 pe-5"
              placeholder="Nhập mật khẩu mới"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
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
            !password ||
            !confirmPassword ||
            password !== confirmPassword ||
            loading
          }
          onClick={handleResetPassword}
        >
          {loading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
        </button>
      </div>
    </div>
  );
}
