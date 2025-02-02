// import React from 'react'
import { useContext, useState } from "react";
import axiosClient from "../../api/axios";
import ForgetPassword from "./ForgetPassword";
import { ToastContext } from "../../contexts/ToastProvider";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function FormLogin() {
    const { toast } = useContext(ToastContext)

    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
            password: Yup.string().min(8, 'Mật khẩu phải có tối thiểu 8 ký tự').required('Mật khẩu không được để trống')
        }),
        onSubmit: async (values) => {
            console.log(values);

            if (isLoading === true) return
            setIsLoading(true)
            await axiosClient.post("/login", values)
                .then(res => {
                    const { token, role, user } = res.data

                    Cookies.set('token', token)
                    Cookies.set('role', role)
                    Cookies.set('userID', user)
                    window.location = '/'
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
    })
    const [errors, setErrors] = useState({});

    const handleChange = () => {
        formik.resetForm()
        setErrors('')
    }
    // if(formik.values.email && !formik.errors.email){
    //   console.log(('is-valid'));
    // }
    // if((formik.errors.email && formik.touched.email)){
    //   console.log('is-invalid')
    // }
    return (
        <>
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
                role="dialog"
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
                                className="btn-close bg-light rounded-5"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={handleChange}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={formik.handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="signInEmail" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="signInEmail"
                                        className={`form-control ${(formik.errors.email && formik.touched.email) ? "is-invalid" : ""
                                            }`}
                                        name="email"
                                        placeholder="Nhập địa chỉ Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signInPassword" className="form-label">
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        id="signInPassword"
                                        className={`form-control ${formik.errors.password && formik.touched.password ? "is-invalid" : ""
                                            }`}
                                        name="password"
                                        placeholder="Nhập mật khẩu"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <div className="invalid-feedback">{formik.errors.password}</div>
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
                                        // checked={formData.rememberMe}
                                        // onChange={handleInputChange}
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
    )
}
