import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormRegisterTeacher() {
  const [step, setStep] = useState(1);
  const [avatar, setAvatar] = useState(null);
  const [certificate, setCertificate] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      teachingExperience: [],
      teachingField: [],
      teachingGoals: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Tên quá ngắn!")
        .max(50, "Tên quá dài!")
        .required("Vui lòng nhập họ và tên"),
      email: Yup.string()
        .email("Email không hợp lệ!")
        .required("Vui lòng nhập email"),
      phone: Yup.string()
        .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ!")
        .required("Vui lòng nhập số điện thoại"),
    }),
    onSubmit: (values) => {
      console.log("Dữ liệu đăng ký:", { ...values, avatar, certificate });
    },
  });

  const handleNextStep = async () => {
    formik.setTouched({ name: true, email: true, phone: true });
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      setStep(2);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-95 bg-light px-3 py-3">
      <div
        className="card p-5 shadow-lg w-100"
        style={{ maxWidth: "500px", borderRadius: "12px" }}
      >
        <h2 className="text-center text-primary fw-bold mt-0">
          Đăng ký giảng viên
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {step === 1 && (
            <div>
              <h5 className="mb-3 text-secondary">Thông tin cá nhân</h5>
              <div className="mb-2">
                <label className="form-label">Họ và tên</label>
                <input
                  type="text"
                  className="form-control rounded-2"
                  placeholder="Họ và tên"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger small">{formik.errors.name}</div>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control rounded-2"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger small">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control rounded-2"
                  placeholder="Số điện thoại"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-danger small">{formik.errors.phone}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Ảnh đại diện</label>
                <input
                  type="file"
                  className="form-control rounded-2"
                  onChange={(event) => {
                    setAvatar(event.currentTarget.files[0]);
                  }}
                />
                {avatar && (
                  <p className="small text-success">
                    Ảnh đã chọn: {avatar.name}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="btn btn-primary w-100 rounded-2 py-2"
                onClick={handleNextStep}
              >
                Tiếp theo
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h5 className="mb-3 text-secondary">Thông tin giảng dạy</h5>
              {[
                {
                  label: "Kinh nghiệm giảng dạy",
                  field: "teachingExperience",
                  options: ["Trung tâm", "Trực tuyến", "Đại học", "YouTube"],
                },
                {
                  label: "Lĩnh vực giảng dạy",
                  field: "teachingField",
                  options: [
                    "Lập trình",
                    "Thiết kế",
                    "Kỹ năng mềm",
                    "Kinh doanh",
                  ],
                },
                {
                  label: "Mục tiêu giảng dạy",
                  field: "teachingGoals",
                  options: [
                    "Chia sẻ kiến thức",
                    "Tạo thu nhập",
                    "Xây dựng thương hiệu",
                  ],
                },
              ].map(({ label, field, options }) => (
                <div className="mb-3 p-2 border rounded-2" key={field}>
                  <label className="form-label fw-bold">{label}</label>
                  {options.map((option) => (
                    <div className="form-check" key={option}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={formik.values[field].includes(option)}
                        onChange={() => {
                          formik.setFieldValue(
                            field,
                            formik.values[field].includes(option)
                              ? formik.values[field].filter(
                                  (item) => item !== option
                                )
                              : [...formik.values[field], option]
                          );
                        }}
                      />
                      <label className="form-check-label">{option}</label>
                    </div>
                  ))}
                </div>
              ))}
              <div className="mb-3">
                <label className="form-label">Chứng chỉ</label>
                <input
                  type="file"
                  className="form-control rounded-2"
                  onChange={(event) => {
                    setCertificate(event.currentTarget.files[0]);
                  }}
                />
                {certificate && (
                  <p className="small text-success">
                    Tệp đã chọn: {certificate.name}
                  </p>
                )}
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary rounded-2"
                  onClick={() => setStep(1)}
                >
                  Quay lại
                </button>
                <button type="submit" className="btn btn-success rounded-2">
                  Hoàn tất
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
