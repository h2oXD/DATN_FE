/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../../../../../api/axios";
import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";


const VideoModal = ({
    showModal,
    setShowLectureForm,
    section_id,
    setLessons
}) => {
    const { updateCheckData } = useOutletContext();
    const { course_id } = useParams()
    const [uploadVideo, setUploadVideo] = useState(null)
    const [loading, setLoading] = useState(false)
    //Tạo video bài giảng
    const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);
    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setUploadVideo({ video_url: file })
        formik.setFieldValue("video_url", file);
        // Tạo URL preview cho thumbnail
        const url = URL.createObjectURL(file);
        setVideoPreviewUrl(url);
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            video_url: null,
            is_preview: false,
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Tiêu đề không được để trống"),
            description: Yup.string(),
            video_url: Yup.mixed().required("Video không được để trống").test(
                "fileType",
                "Chỉ chấp nhận file video (MP4, MOV, AVI, WMV, FLV, WEBM)",
                (value) =>
                    !value ||
                    [
                        "video/mp4",
                        "video/quicktime", // MOV
                        "video/x-msvideo", // AVI
                        "video/x-ms-wmv", // WMV
                        "video/x-flv", // FLV
                        "video/webm", // WEBM
                    ].includes(value.type)
            )
                .test(
                    "fileSize",
                    "Dung lượng video không được vượt quá 500MB",
                    (value) => !value || value.size <= 500 * 1024 * 1024 // 2GB
                ),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            const createLesson = { title: values.title, description: values.description, type: 'video', is_preview: values.is_preview }
            try {
                const res = await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons`, createLesson)
                const lesson_id = res.data.lesson.id
                await axiosClient.post(`lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson_id}/videos`, uploadVideo, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                const res2 = await axiosClient.get(`lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson_id}`)
                console.log(res2.data.lesson);

                setLessons(prevLesson => [...prevLesson, res2.data.lesson]);
                formik.resetForm()
                updateCheckData()
                setShowLectureForm(false)
                formik.setFieldValue("description", '');
                setVideoPreviewUrl(null)
                toast.success('Thao tác thành công')

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
    })
    return (
        <Modal width={1000} open={showModal} onCancel={() => { setShowLectureForm(false); formik.resetForm(); formik.setFieldValue("description", ''); formik.setFieldValue("video_url", ''); setVideoPreviewUrl(null) }} footer={null}>
            <h3 className="mb-3">Thêm video bài giảng</h3>
            <form className="row" onSubmit={formik.handleSubmit}>
                <div className="col-lg-6 col-12 row align-content-start">
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Tên bài tập
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Nhập tên bài tập"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                            {formik.errors.title && formik.touched.title && (
                                <div className="text-danger">{formik.errors.title}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Mô tả
                            </label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={formik.values.description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    formik.setFieldValue("description", data);
                                }}
                                config={{
                                    toolbar: [
                                        "bold",
                                        "italic",
                                    ],

                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 row">
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="video_url" className="form-label">
                                Tải lên video
                            </label>
                            <input
                                className="form-control"
                                onChange={handleThumbnailChange}
                                type="file"
                                name="video_url"
                                id="video_url"
                            />
                            {formik.errors.video_url && formik.touched.video_url && (
                                <div className="text-danger">{formik.errors.video_url}</div>
                            )}
                        </div>
                    </div>
                    <div className="form-check form-switch col-12">
                        <div className="mb-3 ms-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="is_preview"
                                name="is_preview"
                                checked={formik.values.is_preview}
                                onChange={formik.handleChange}
                            />
                            <label className="form-check-label" htmlFor="isFreeCourse">
                                Cho phép xem trước khi mua
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="video" className="form-label">
                                Xem trước video
                            </label>
                            {videoPreviewUrl ? (
                                <video
                                    controls
                                    className="w-100 rounded border"
                                    src={videoPreviewUrl}
                                ></video>
                            ) : (
                                <img
                                    src="/placeholder.jpg"
                                    alt=""
                                    className="w-100 rounded border"
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            {loading ? (<><button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            </button></>) : (<><button type="submit" className="btn btn-primary">
                                Hoàn tất
                            </button></>)}

                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default VideoModal;
