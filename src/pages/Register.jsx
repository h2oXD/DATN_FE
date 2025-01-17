import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // Thêm confirmPassword
  });

  const [errors, setErrors] = useState({}); // State lưu trữ lỗi validation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm kiểm tra lỗi validation
  const validate = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Tên người dùng không được để trống.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email không được để trống.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email không hợp lệ.";
    }

    if (!formData.password) {
      errors.password = "Mật khẩu không được để trống.";
    } else if (formData.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Vui lòng nhập lại mật khẩu.";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Mật khẩu xác nhận không khớp.";
    }

    return errors;
  };

  // Hàm xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trình duyệt reload

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Hiển thị lỗi nếu có
    } else {
      console.log("Form data:", formData); // Xử lý logic gửi dữ liệu
      alert("Đăng ký thành công!");
      setErrors({});
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }); // Reset form
    }
  };

  return (
    <div
      className="modal fade row align-items-center justify-content-center g-0 h-lg-100 py-8"
      id="registerModal"
      tabIndex="-1"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="col-lg-5 col-md-8 py-8 py-xl-0 modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title w-100 text-center"
              id="registerModalLabel"
            >
              Register
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Trường Tên người dùng */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Tên
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Nhập tên người dùng"
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              {/* Trường Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Trường Mật khẩu */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Nhập mật khẩu"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Trường Xác nhận Mật khẩu */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Nhập lại mật khẩu"
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
              <span>
                Already have an account?
                <a href="#" className="ms-1">
                  Login
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
