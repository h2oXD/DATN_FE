/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Lesson from "./Lesson/Lesson";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";
import axiosClient from "../../../../api/axios";
import { toast } from "react-toastify";
import { useOutletContext, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SectionEdit from "./SectionEdit";
import VideoModal from "./Lesson/VideoModal";
import QuizModal from "./Lesson/QuizModal";
import DocumentModal from "./Lesson/DocumentModal";
import CodingModal from "./Lesson/CodingModal";

export default function Section({ section, setSections, index }) {
    const { updateCheckData } = useOutletContext();
    const { course_id } = useParams();
    const [showFrameworkItems, setShowFrameworkItems] = useState(false);
    const [showLectureForm, setShowLectureForm] = useState(false);
    const [showFormQuiz, setShowFormQuiz] = useState(false);
    const [isModalCodingOpen, setIsModalCodingOpen] = useState(false);
    const [showButtonLesson, setShowButtonLesson] = useState(true);
    const [showFormDocument, setShowFormDocument] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const [lessons, setLessons] = useState(section.lessons || []);

    // Xử lý khi kết thúc kéo thả
    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = lessons.findIndex((lesson) => lesson.id === active.id);
            const newIndex = lessons.findIndex((lesson) => lesson.id === over.id);

            // Di chuyển bài học trong mảng
            const updatedLessons = arrayMove(lessons, oldIndex, newIndex);

            // Cập nhật lại order của từng bài học
            const newLessons = updatedLessons.map((lesson, index) => ({
                ...lesson,
                order: index + 1, // Sắp xếp lại order theo chỉ mục mới
            }));

            setLessons(newLessons); // Cập nhật lại state với mảng bài học mới

            try {
                const data = newLessons.map((lesson) => ({
                    id: lesson.id,
                    order: lesson.order,
                }));
                const response = await axiosClient.post("/lessons/order", data);
                console.log(response);

                toast.success("Cập nhật thành công");
            } catch (error) {
                console.error("Có lỗi xảy ra khi cập nhật thứ tự:", error);
            }
        }
    };
    const handleDelete = async (section_id) => {
        const result = await Swal.fire({
            title: "Bạn có chắc chắn muốn xóa không?",
            text: "Hành động này không thể hoàn tác!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy",
        });

        if (result.isConfirmed) {
            try {
                // Gọi API xóa
                await axiosClient.delete(
                    `lecturer/courses/${course_id}/sections/${section_id}`
                );
                updateCheckData()
                // Hiển thị thông báo xóa thành công
                Swal.fire("Đã xóa!", "Mục đã được xóa thành công.", "success");
                setSections((prevSections) =>
                    prevSections.filter((item) => item.id !== section_id)
                );
            } catch (error) {
                console.error("Lỗi khi xóa:", error);
                Swal.fire("Có lỗi xảy ra!", "Không thể xóa mục này.", "error");
            }
        }
    };
    return (
        <>
            {/* Chương */}
            <div className="card tw-bg-slate-100 mt-4">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <p className="tw-text-base tw-font-bold m-0">
                        {`Phần ${index + 1}. `}
                        {section.title}
                    </p>
                    <div>
                        <SectionEdit
                            isModalEditOpen={isModalEditOpen}
                            setIsModalEditOpen={setIsModalEditOpen}
                            title={section.title}
                            description={section.description}
                            course_id={course_id}
                            section_id={section.id}
                            setSections={setSections}
                        />
                        <button
                            onClick={() => handleDelete(section.id)}
                            className="btn bg-white mx-1 btn-sm btn-sm btn-outline-light text-dark border"
                        >
                            <i className="fe fe-trash-2"> </i>
                        </button>
                    </div>
                </div>

                <div className="card-body p-2">
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={lessons.map((lesson) => lesson.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {React.Children.toArray(lessons.map((lesson, index) => (
                                <div key={index}> {/* Thêm key vào div bao bọc Lesson */}
                                    <Lesson
                                        lesson={lesson}
                                        section_id={section.id}
                                        setLessons={setLessons}
                                    />
                                </div>
                            )))}
                        </SortableContext>
                    </DndContext>

                    {showButtonLesson && (
                        <button
                            className="p-2 tw-hover:bg-black rounded mt-2 tw-text-[#754ffe] tw-font-semibold tw-border tw-border-[#754ffe]"
                            onClick={() => {
                                setShowFrameworkItems(!showFrameworkItems);
                                setShowButtonLesson(false);
                            }}
                        >
                            + Mục trong khung chương trình
                        </button>
                    )}
                    {showFrameworkItems && (
                        <div className="border rounded p-3 mt-2 bg-white d-flex gap-3 flex-wrap justify-content-between">
                            <div>
                                {/* Video Button */}
                                <button
                                    className="btn btn-sm btn-outline-primary mx-1 border"
                                    onClick={() => {
                                        setShowLectureForm(!showLectureForm);
                                    }}
                                >
                                    + Video bài giảng
                                </button>

                                {/* Document Button */}
                                <button
                                    className="btn btn-sm btn-outline-primary mx-1 border"
                                    onClick={() => {
                                        setShowFormDocument(!showFormDocument);
                                    }}
                                >
                                    + Tài liệu
                                </button>

                                {/* Quiz Button */}
                                <button
                                    className="btn btn-sm btn-outline-primary mx-1 border"
                                    onClick={() => {
                                        setShowFormQuiz(!showFormQuiz);
                                    }}
                                >
                                    + Bài tập trắc nghiệm
                                </button>

                                {/* Coding Button */}
                                <button
                                    className="btn btn-sm btn-outline-primary mx-1 border"
                                    onClick={() => setIsModalCodingOpen(!isModalCodingOpen)}
                                >
                                    + Bài tập coding
                                </button>

                                {/* Modal Components */}
                                <VideoModal
                                    showModal={showLectureForm}
                                    setShowLectureForm={setShowLectureForm}
                                    section_id={section.id}
                                    setLessons={setLessons}
                                />
                                <QuizModal
                                    showFormQuiz={showFormQuiz}
                                    setShowFormQuiz={setShowFormQuiz}
                                    section_id={section.id}
                                    setLessons={setLessons}
                                />
                                <DocumentModal
                                    showModal={showFormDocument}
                                    closeModal={setShowFormDocument}
                                    section_id={section.id}
                                    setLessons={setLessons}
                                />
                                <CodingModal
                                    isModalCodingOpen={isModalCodingOpen}
                                    setIsModalCodingOpen={setIsModalCodingOpen}
                                    section_id={section.id}
                                    setLessons={setLessons}
                                    course_id={course_id}
                                />
                            </div>
                            <button
                                className="btn btn-sm btn-sm btn-outline-light text-dark border"
                                onClick={() => {
                                    setShowFrameworkItems(false);
                                    setShowButtonLesson(true);
                                }}
                            >
                                ✖
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
