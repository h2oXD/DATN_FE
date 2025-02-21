/* eslint-disable react/prop-types */
import { Modal } from 'antd';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import axiosClient from '../../../../../../api/axios';
import { getImageUrl } from '../../../../../../api/common';

export default function EditDocumentModal({ showEditDocumentModal, setShowEditDocumentModal, lesson, section_id, setLessons }) {
    const { course_id } = useParams();
    const [loading, setLoading] = useState(false);
    const [document, setDocument] = useState([]);

    useEffect(() => {
        const fetchLessonDocument = async () => {
            const res = await axiosClient.get(`lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson.id}`)
            setDocument(res.data.lesson)
        }
        fetchLessonDocument()
    }, [lesson])
    const handleDocumentChange = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("document_url", file);
    };
    const formik = useFormik({
        initialValues: {
            title: lesson.title ?? '',
            description: lesson.description ?? '',
            document_url: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Tiêu đề không được để trống"),
            description: Yup.string(),
            document_url: Yup.mixed().test(
                "fileType",
                "Chỉ chấp nhận file PDF, DOC, DOCX",
                (value) =>
                    !value ||
                    ["application/pdf", "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value.type)
            ),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                console.log(lesson.documents[0].id);
                const updateLesson = { title: values.title, description: values.description, type: 'document', _method: 'PUT' }
                await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson.id}`, updateLesson)
                const lesson_id = lesson.id

                if (values.document_url) {
                    const uploadDocument = { document_url: values.document_url, _method: 'PUT' }
                    await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson_id}/documents/${lesson.documents[0].id}`, uploadDocument, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                }
                const res2 = await axiosClient.get(
                    `lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson.id}`
                );
                const updatedLesson = res2.data.lesson;

                setLessons((prevLessons) => {
                    return prevLessons.map((l) => {
                        if (l.id === lesson.id) {
                            return updatedLesson; // Replace the old lesson with the updated one
                        }
                        return l;
                    });
                });

                // console.log(response);
                toast.success("Cập nhật tài liệu thành công");
            } catch (error) {
                console.error("Lỗi khi Cập nhật tài liệu:", error);
                toast.error("Cập nhật tài liệu thất bại");
            } finally {
                setLoading(false);
            }
        },
    });


    return (
        <Modal
            width={1000}
            open={showEditDocumentModal}
            onCancel={() => {
                setShowEditDocumentModal(false);
            }}

            footer={null}
        >
            <h3 className="mb-3">Cập nhật tài liệu</h3>
            <form className="row" onSubmit={formik.handleSubmit}>
                <div className="col-lg-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Tiêu đề
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Nhập tiêu đề tài liệu"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div className="text-danger">{formik.errors.title}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Mô tả
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Nhập mô tả tài liệu"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        {formik.errors.description && formik.touched.description && (
                            <div className="text-danger">{formik.errors.description}</div>
                        )}
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="mb-3">
                        <label htmlFor="document_url" className="form-label">
                            Tải lên tài liệu
                        </label>
                        <input className="form-control"
                            onChange={handleDocumentChange}
                            type="file"
                            name="document_url"
                            id="document_url" />
                        {formik.errors.document_url && formik.touched.document_url && (
                            <div className="text-danger">{formik.errors.document_url}</div>
                        )}
                    </div>
                    {document && document.documents && (<>Tài liệu hiện tại <a href={getImageUrl(document.documents[0].document_url)} download="document_name.pdf">Tải xuống</a></>)}
                </div>
                <div className="d-flex justify-content-end">
                    {loading ? (<><button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button></>) : (<><button type="submit" className="btn btn-primary">
                        Hoàn tất
                    </button></>)}
                </div>
            </form>
        </Modal>
    );
}
