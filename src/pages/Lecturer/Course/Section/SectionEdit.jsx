/* eslint-disable react/prop-types */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Modal } from "antd";
import axiosClient from "../../../../api/axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

export default function SectionEdit({
    setIsModalEditOpen,
    isModalEditOpen,
    title,
    description,
    course_id,
    section_id,
    setSections
}) {
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            title: title || "",
            description: description || "",
        },
        enableReinitialize: true,

        validationSchema: Yup.object({
            title: Yup.string(),
            description: Yup.string().min(2, "Mô tả phải dài ít nhất 200 từ"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            values._method = "PUT";
            try {
                await axiosClient.post(
                    `/lecturer/courses/${course_id}/sections/${section_id}`,
                    values
                );
                toast.success("Cập nhật thành công");
                setSections((prevSections) =>
                    prevSections.map((item) =>
                        item.id === section_id ? { ...item, ...values } : item
                    )
                );
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        },
    });
    return (
        <>
            <button
                onClick={() => setIsModalEditOpen(true)}
                className="btn bg-white mx-1 btn-sm btn-sm btn-outline-light text-dark border"
            >
                <i className="fe fe-edit"> </i>
            </button>
            <Modal
                width={600}
                open={isModalEditOpen}
                onCancel={() => {
                    setIsModalEditOpen(false);
                    formik.resetForm(); // Xoá message validate khi đóng modal
                }}
                footer={null}
            >
                <h3 className="text-center">Cập nhật chương</h3>
                <h5>Tiêu đề chương</h5>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        type="text"
                        className="form-control mt-2"
                        placeholder="Nhập tiêu đề"
                        maxLength={80}
                    />
                    {formik.errors.title && (
                        <span className="text-danger">{formik.errors.title}</span>
                    )}
                    <h5 className="mt-3">Mô tả</h5>
                    <CKEditor
                        editor={ClassicEditor}
                        data={formik.values.description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            formik.values.description = data;
                        }}
                        config={{
                            toolbar: ["bold", "italic"],
                        }}
                    />
                    {loading ? (
                        <>
                            <div className="d-flex justify-content-end mt-3">
                                <button className="btn btn-primary" type="button" disabled>
                                    <span
                                        className="spinner-border spinner-border-sm me-1"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Loading...
                                </button>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="d-flex justify-content-end mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Thêm mới
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </Modal>
        </>
    );
}
