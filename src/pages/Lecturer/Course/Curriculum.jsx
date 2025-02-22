import { useEffect, useState } from "react";
import { Modal, Skeleton } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { createSection } from "../../../api/apiService";
import { useOutletContext, useParams } from "react-router-dom";
import Section from "./Section/Section";
import { useCourseContext } from "../../../contexts/CourseProvider";

export default function Curriculum() {
    const { courseData, loading, error } = useCourseContext();
    const { updateCheckData } = useOutletContext();
    const { course_id } = useParams();
    const [isModalSectionOpen, setIsModalSectionOpen] = useState(false);
    const [sections, setSections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Tiêu đề không được để trống"),
            description: Yup.string(),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                const res = await createSection(course_id, values);
                setSections((prevSections) => [...prevSections, res.data.section]);
                formik.resetForm();
                updateCheckData()
                setIsModalSectionOpen(false);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        },
    });

    useEffect(() => {
        if (courseData) {
            setSections(courseData.sections);
        }
    }, [courseData]);

    if (loading) {
        return (
            <div className="card p-5">
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </div>
        );
    }

    if (error) {
        return <div>Lỗi: {error.message || "Không thể tải dữ liệu."}</div>; // Hiển thị lỗi
    }

    if (!sections) {
        return <div>Không có dữ liệu khóa học.</div>; // Xử lý trường hợp không có dữ liệu
    }

    return (
        <>
            <div className="card p-3">
                <div className="card-header ps-0 py-2">
                    <h3 className="m-0 mb-2">Chương trình giảng dạy</h3>
                </div>
                {sections &&
                    sections.map((section, index) => (
                        <Section
                            key={section.order}
                            section={section}
                            setSections={setSections}
                            index={index}
                        />
                    ))}

                {/* Nút thêm mới chương */}
                <button
                    className="btn btn-outline-primary mt-3 w-25"
                    onClick={() => setIsModalSectionOpen(true)}
                >
                    + Phần
                </button>
                <Modal
                    width={600}
                    open={isModalSectionOpen}
                    onCancel={() => {
                        setIsModalSectionOpen(false);
                        formik.resetForm(); // Xoá message validate khi đóng modal
                    }}
                    footer={null}
                >
                    <h3 className="text-center">Tạo phần mới</h3>
                    <h5>Tiêu đề phần mới</h5>
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
                            data=""
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                formik.values.description = data;
                            }}
                            config={{
                                toolbar: ["bold", "italic"],
                            }}
                        />
                        <div className="d-flex justify-content-end mt-3">
                            {isLoading ? (
                                <>
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                    </button>
                                </>
                            ) : (
                                <><button type="submit" className="btn btn-primary">
                                    Thêm mới
                                </button>



                                </>
                            )}
                        </div>
                    </form>
                </Modal>
            </div>

        </>
    );
}
