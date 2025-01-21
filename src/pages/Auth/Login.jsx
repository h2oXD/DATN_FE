import { useContext, useState } from "react";
import axiosClient from "../../api/axios";
import { useStateContext } from "../../contexts/ContextProvider";
import ForgetPassword from "./ForgetPassword";
import { ToastContext } from "../../contexts/ToastProvider";
import Cookies from "js-cookie";

const Login = () => {
  const { setToken, setUser, setRole } = useStateContext()

  const { toast } = useContext(ToastContext)

  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email không được để trống.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Password không được để trống.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading === true) return
    if (validateForm()) {
      setIsLoading(true)
      await axiosClient.post("/login", formData)
        .then(res => {
          console.log(res.data);
          const { token, role, user } = res.data

          Cookies.set('token',token)
          Cookies.set('role',role)
          Cookies.set('user',user)
          setToken(res.data.token)
          setUser(res.data.user)
          setRole(res.data.role)
          toast.success('Đăng nhập thành công')
          setIsLoading(false)
        })
        .catch(errors => {
          if (errors.status === 401) {
            setErrors(errors.response.data)
            toast.error('Đăng nhập thất bại')
            setIsLoading(false)
          }
        })
    }
  };

  return (
    <>
      <button
        href="#loginModal"
        className="btn btn-outline-dark shadow-sm me-1"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Đăng nhập
      </button>
      <div
        className="modal fade row align-items-center justify-content-center g-0 h-lg-100 py-8"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="col-lg-5 col-md-8 py-8 py-xl-0 modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title w-100 text-center"
                id="registerModalLabel"
              >
                Đăng nhập
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="signInEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="signInEmail"
                    className={`form-control ${errors.email ? "is-invalid" : ""
                      }`}
                    name="email"
                    placeholder="Nhập địa chỉ Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="signInPassword" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="signInPassword"
                    className={`form-control ${errors.password ? "is-invalid" : ""
                      }`}
                    name="password"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                {errors.message && (
                  <p className="text-danger p-0" role="alert">
                    {errors.message}
                  </p>
                )}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberme"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />

                    <label className="form-check-label" htmlFor="rememberme">
                      Ghi nhớ đăng nhập
                    </label>
                  </div>
                  <div>
                    <ForgetPassword />
                  </div>
                </div>
                <div>
                  <div className="d-grid">
                    {isLoading ? (<button className="btn btn-primary" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Loading...
                    </button>) : (<button type="submit" className="btn btn-primary">
                      Đăng nhập
                    </button>)}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
