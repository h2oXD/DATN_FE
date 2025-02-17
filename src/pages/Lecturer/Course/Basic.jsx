import { useEffect, useRef, useState } from "react";
import { Skeleton } from "antd";
import { useCourseContext } from "../../../contexts/CourseProvider";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLecturerContext } from "../../../contexts/LecturerProvider";
import axiosClient from "../../../api/axios";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../../../api/common";
import { toast } from "react-toastify";

export default function Basic() {
    const { course_id } = useParams()
    const formRef = useRef(null);
    const { courseData, loading, error } = useCourseContext(); // Sử dụng custom hook
    const { categories } = useLecturerContext();
    const [course, setCourse] = useState(null);
    const [selectedThumbnail, setSelectedThumbnail] = useState(null);
    const [selectedVideoPreview, setSelectedVideoPreview] = useState(null);
    const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState(null); // Thêm state cho URL preview của thumbnail
    const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);     // Thêm state cho URL preview của video

    const [serverErrors, setServerErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setSelectedThumbnail(file);
        formik.setFieldValue('thumbnail', file);

        // Tạo URL preview cho thumbnail
        const url = URL.createObjectURL(file);
        setThumbnailPreviewUrl(url);
    };

    const handleVideoPreviewChange = (event) => {
        const file = event.target.files[0];
        setSelectedVideoPreview(file);
        formik.setFieldValue('videoPreview', file);

        // Tạo URL preview cho video
        const url = URL.createObjectURL(file);
        setVideoPreviewUrl(url);
    };

    useEffect(() => {
        if (courseData) {
            setCourse(courseData);
        }
    }, [courseData]);

    const formik = useFormik({
        initialValues: {
            title: course?.title || "", // Khởi tạo giá trị ban đầu từ courseData
            description: course?.description || "",
            price_regular: course?.price_regular || "",
            price_sale: course?.price_sale || "",
            language: course?.language || "",
            level: course?.level || "",
            category_id: course?.category_id || "",
            primary_content: course?.primary_content || "", // Nội dung chính của khóa học
            thumbnail: selectedThumbnail, // Hình ảnh khóa học (chú ý xử lý riêng)
            video_preview: selectedVideoPreview, // Video preview (chú ý xử lý riêng)
        },
        enableReinitialize: true, // Quan trọng: cho phép cập nhật initialValues khi courseData thay đổi

        validationSchema: Yup.object({
            title: Yup.string(),
            description: Yup.string()
                .min(2, "Mô tả phải dài ít nhất 200 từ"),
            price_regular: Yup.number()
                .typeError("Giá phải là số")
                .positive("Giá phải lớn hơn 0"),
            price_sale: Yup.number()
                .typeError("Giá khuyến mãi phải là số")
                .positive("Giá phải lớn hơn 0")
                .lessThan(Yup.ref('price_regular'), "Giá khuyến mãi phải nhỏ hơn giá gốc"),
            language: Yup.string(),
            level: Yup.string(),
            category_id: Yup.string(),
            primary_content: Yup.string(),
            // Các trường khác nếu cần validate
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true)
            values._method = 'PUT'
            console.log(values);

            try {
                const res = await axiosClient.post('/lecturer/courses/' + course_id, values, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                console.log(res);
                toast.success('Cập nhật thành công')
            } catch (error) {
                setServerErrors(error.response.data.errors);
            } finally {
                setIsSubmitting(false); // Kết thúc loading dù thành công hay thất bại
            }
        },
    });

    if (loading) {
        return (
            <div>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </div>
        ); // Hiển thị loading
    }

    if (error) {
        return <div>Lỗi: {error.message || "Không thể tải dữ liệu."}</div>; // Hiển thị lỗi
    }

    if (!course) {
        return <div>Không có dữ liệu khóa học.</div>; // Xử lý trường hợp không có dữ liệu
    }
    // if (course) {
    //     const loadTinyMCE = () => {
    //         const script = document.createElement("script");
    //         script.src =
    //             "https://cdnjs.cloudflare.com/ajax/libs/tinymce/7.6.0/tinymce.min.js";
    //         script.integrity =
    //             "sha512-/4EpSbZW47rO/cUIb0AMRs/xWwE8pyOLf8eiDWQ6sQash5RP1Cl8Zi2aqa4QEufjeqnzTK8CLZWX7J5ZjLcc1Q==";
    //         script.crossOrigin = "anonymous";
    //         script.referrerPolicy = "no-referrer";
    //         script.onload = () => {
    //             window.tinymce.init({
    //                 selector: "textarea#descriptions",
    //                 license_key: "gpl", // Consider removing or replacing this if not needed
    //                 height: 250,
    //                 menubar: false,
    //             });
    //         };
    //         document.body.appendChild(script);
    //     };
    //     loadTinyMCE();
    // }
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div>
                        <h3 className="m-0">Tổng quan khóa học</h3>
                    </div>
                    <div>
                        {isSubmitting ? (
                            <button className="btn btn-sm btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                               
                            </button>
                        ) : <button type="submit" className="btn btn-sm btn-primary" onClick={() => formRef.current.requestSubmit()}>Lưu</button>}
                        
                    </div>
                </div>
                <div className="card-body">
                    <form ref={formRef} className="row" onSubmit={formik.handleSubmit}>
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="fw-bold">
                                Tiêu đề
                            </label>
                            <input
                                name="title"
                                id="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                placeholder="Nhập tiêu đề khoá học"
                                className="form-control"
                            />
                            {formik.touched.title && formik.errors.title && (
                                <div className="invalid-feedback">{formik.errors.title}</div>
                            )}
                            <small>
                                Tiêu đề của bạn không những phải thu hút sự chú ý, chứa nhiều
                                thông tin mà còn được tối ưu hóa để dễ tìm kiếm
                            </small>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="fw-bold">
                                Mô tả
                            </label>
                            <textarea
                                className="form-control"
                                id="description" // <-- ID rất quan trọng cho label và accessibility
                                name="description" // <-- NAME bắt buộc để Formik quản lý giá trị
                                placeholder="Nhập mô tả"
                                value={formik.values.description} // <-- Giá trị được liên kết với Formik
                                onChange={formik.handleChange} // <-- Xử lý sự kiện thay đổi
                                onBlur={formik.handleBlur}
                            ></textarea>
                            <small>Mô tả phải dài ít nhất là 200 từ.</small>
                        </div>
                        <div className="col-6 mb-3">
                            <label htmlFor="" className="fw-bold">
                                Mức giá thông thường
                            </label>
                            <input
                                placeholder="Nhập giá tiền"
                                className="form-control"
                                type="number"
                                name="price_regular"
                                id="price_regular"
                                value={formik.values.price_regular}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <label htmlFor="" className="fw-bold">
                                Mức giá khuyến mãi
                            </label>
                            <input
                                type="number"
                                placeholder="Nhập giá khuyến mãi"
                                className="form-control"
                                name="price_sale"
                                id="price_sale"
                                value={formik.values.price_sale}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="fw-bold">
                                Thông tin cơ bản
                            </label>
                            <div className="row">
                                <div className="col-4 mb-3">
                                    <select
                                        id="language" // <-- ID rất quan trọng cho label và accessibility
                                        name="language" // <-- NAME bắt buộc để Formik quản lý giá trị
                                        className={`form-select text-dark`}
                                        value={formik.values.language} // <-- Giá trị được liên kết với Formik
                                        onChange={formik.handleChange} // <-- Xử lý sự kiện thay đổi
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Chọn ngôn ngữ--</option>
                                        <option value="Tiếng việt">Tiếng việt</option>
                                        <option value="Tiếng Anh">Tiếng Anh</option>
                                        <option value="Tiếng Trung">Tiếng Trung</option>
                                    </select>
                                </div>
                                <div className="col-4 mb-3">
                                    <select
                                        className="form-select text-dark"
                                        name="level"
                                        id="level"
                                        value={formik.values.level}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Chọn trình độ--</option>
                                        <option value="Sơ cấp">Sơ cấp</option>
                                        <option value="Trung cấp">Trung cấp</option>
                                        <option value="Chuyên gia">Chuyên gia</option>
                                        <option value="Tất cả trình độ">Tất cả trình độ</option>
                                    </select>
                                </div>
                                <div className="col-4 mb-3">
                                    <select
                                        className="form-select text-dark"
                                        name="category_id"
                                        id="category_id"
                                        value={formik.values.category_id}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Chọn danh mục--</option>
                                        {categories.length > 0 ? (
                                            categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>Đang tải danh mục...</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="" className="fw-bold">
                                        Khóa học của bạn chủ yếu giảng dạy nội dung nào?
                                    </label>
                                    <input
                                        placeholder="Ví dụ: Nhiếp ảnh"
                                        className="form-control"
                                        type="text"
                                        name="primary_content"
                                        id="primary_content"
                                        value={formik.values.primary_content}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                <div className="col-12 row mb-3">
                                    <div className="col-6">
                                        <label htmlFor="" className="fw-bold">
                                            Hình ảnh khoá học
                                        </label>
                                        {/* Hiển thị preview của thumbnail */}
                                        {thumbnailPreviewUrl ? (
                                            <img src={thumbnailPreviewUrl} alt="Thumbnail Preview" className="w-100 rounded border mb-2" />
                                        ) : course.thumbnail ? (
                                            <img src={getImageUrl(course.thumbnail)} alt="ảnh khoá học" className="w-100 rounded border" />
                                        ) : (
                                            <img src="/default-thumbnail.jpg" alt="ảnh khoá học" className="w-100 rounded border" />
                                        )}
                                    </div>
                                    <div className="col-6 mt-3">
                                        <p>
                                            Tải hình ảnh khóa học lên tại đây. Để được chấp nhận, hình
                                            ảnh phải đáp ứng tiêu chuẩn chất lượng hình ảnh khóa học.
                                            Hướng dẫn quan trọng: 750x422 pixel; .jpg, .jpeg,. gif,
                                            hoặc .png. và không có chữ trên hình ảnh.
                                        </p>
                                        <input type="file" name="thumbnail" className="form-control" id="thumbnail" onChange={handleThumbnailChange} />

                                    </div>
                                </div>
                                <div className="col-12 row mb-3">
                                    <div className="col-6">
                                        <label htmlFor="" className="fw-bold">
                                            Video quảng cáo
                                        </label>
                                        {/* Hiển thị preview của video */}
                                        {videoPreviewUrl ? (
                                            <video src={videoPreviewUrl} controls className="w-100 rounded border mb-2" />
                                        ) : course.video_preview ? (
                                            <video className="w-100" controls src={getImageUrl(course.video_preview)}></video>
                                            // <ReactPlayer url={getImageUrl(course.video_preview)} controls={true} width="100%" />
                                        ) : (
                                            <img src="/default-thumbnail.jpg" alt="ảnh khoá học" className="w-100 rounded border" />
                                        )}
                                    </div>


                                    <div className="col-6 mt-3">
                                        <p>
                                            Tải hình ảnh khóa học lên tại đây. Để được chấp nhận, hình
                                            ảnh phải đáp ứng tiêu chuẩn chất lượng hình ảnh khóa học.
                                            Hướng dẫn quan trọng: 750x422 pixel; .jpg, .jpeg,. gif,
                                            hoặc .png. và không có chữ trên hình ảnh.
                                        </p>
                                        <input type="file" name="video_preview" className="form-control" id="video_preview" onChange={handleVideoPreviewChange} />
                                        {serverErrors.video_preview && <span className="text-danger">{serverErrors.video_preview[0]}</span>}
                                    </div>
                                </div>
                                <div>
                                    {isSubmitting ? (
                                        <button className="btn btn-primary" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </button>
                                    ) : <button type="submit" className="btn btn-primary">Lưu</button>}

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
