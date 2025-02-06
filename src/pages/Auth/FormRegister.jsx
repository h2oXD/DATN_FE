// import React from 'react'
import { useContext, useState } from "react";
import axiosClient from "../../api/axios";
import { ToastContext } from "../../contexts/ToastProvider";
import Cookies from "js-cookie";

export default function FormRegister() {
  const { toast } = useContext(ToastContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});

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

    if (!formData.name.trim()) {
      errors.name = "Tên người dùng không được để trống.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email không được để trống.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email không hợp lệ.";
    }

    if (!formData.password) {
      errors.password = "Mật khẩu không được để trống.";
    } else if (formData.password.length < 8) {
      errors.password = "Mật khẩu phải có ít nhất 8 ký tự.";
    }

    if (!formData.password_confirmation) {
      errors.password_confirmation = "Vui lòng nhập lại mật khẩu.";
    } else if (formData.password_confirmation !== formData.password) {
      errors.password_confirmation = "Mật khẩu xác nhận không khớp.";
    }

    return errors;
  };

  // Hàm xử lý gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Hiển thị lỗi nếu có
    } else {
      if (isLoading === true) return;
      setIsLoading(true);
      await axiosClient
        .post("/register", formData)
        .then((res) => {
          const { token } = res.data;

          Cookies.set("token", token);
          toast.success("Đăng ký thành công");

          window.location = "/";
          
          setIsLoading(false);

          setErrors({});
          setFormData({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
        })
        .catch((errors) => {
          if (errors.status === 400) {
            console.log(errors.response.data.errors);
            setErrors(errors.response.data.errors);
            toast.error("Đăng ký thất bại");
            setIsLoading(false);
          }
        });
    }
  };
  return (
    <>
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
                Đăng ký
              </h1>
              <button
                type="button"
                className="btn-close bg-light rounded-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Trường Tên người dùng */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên người dùng"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Trường Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
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
                  <label htmlFor="password_confirmation" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password_confirmation ? "is-invalid" : ""
                    }`}
                    id="password_confirmation"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    placeholder="Nhập lại mật khẩu"
                  />
                  {errors.password_confirmation && (
                    <div className="invalid-feedback">
                      {errors.password_confirmation}
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary w-100">
                    Đăng ký
                  </button>
                )}
                <span>
                  Bạn đã có tài khoản?
                  <a href="#" className="ms-1">
                    Đăng nhập
                  </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
