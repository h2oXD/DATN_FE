/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GoCodeSquare } from "react-icons/go";
import Skeleton from "react-loading-skeleton";
import axiosClient from "../../../../../api/axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import EditVideoModal from "./Edit/EditVideoModal";
import EditDocumentModal from "./Edit/EditDocumentModal";

export default function Lesson({ lesson, section_id, setLessons }) {
    const { course_id } = useParams()
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: lesson.id });
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showEditDocumentModal, setShowEditDocumentModal] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const handleDelete = async (lesson_id) => {
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
                    `lecturer/courses/${course_id}/sections/${section_id}/lessons/${lesson_id}`
                );
                // Hiển thị thông báo xóa thành công
                Swal.fire("Đã xóa!", "Mục đã được xóa thành công.", "success");
                setLessons((prevLessons) =>
                    prevLessons.filter((item) => item.id !== lesson_id)
                );
            } catch (error) {
                console.error("Lỗi khi xóa:", error);
                Swal.fire("Có lỗi xảy ra!", "Không thể xóa mục này.", "error");
            }
        }
    }
    if (!lesson) {
        return <div className="card p-2 my-2 rounded"><Skeleton /></div>;
    }
    
    const handleEdit = (type) => {
        switch (type) {
            case 'video':
                setShowVideoModal(true)
                break;

            case 'document':
                setShowEditDocumentModal(true)
                break;

            default:
                break;
        }
    }
    
    
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}

            className="border rounded px-3 py-2 d-flex justify-content-between align-items-center bg-white mt-1 cursor-pointer"
        >
            <div className="d-flex align-items-center">
                <span className="m-0 me-1 tw-font-semibold">
                    {lesson.type == 'video' && (<><MdOutlineOndemandVideo className="tw-size-5 me-2" />Video: </>)}
                    {lesson.type == 'document' && (<><IoDocumentTextOutline className="tw-size-5 me-2" />Tài liệu:</>)}
                    {lesson.type == 'quiz' && (<><IoIosHelpCircleOutline className="tw-size-5 me-2" />Trắc nghiệm:</>)}
                    {lesson.type == 'coding' && (<GoCodeSquare className="tw-size-5 me-2" />)}
                </span>
                <p className="m-0">{lesson.title}</p>
            </div>
            <div className="d-flex align-items-center">
                {lesson.type != 'quiz' && <i onClick={() => handleEdit(lesson.type)} className="fe fe-edit cursor-pointer mx-2"></i>}
                {lesson.type == 'quiz' && (<Link to={`/lecturer/quiz/edit?lessonId=${lesson.id}&sectionId=${section_id}&courseId=${course_id}`} className="text-dark"><i className="fe fe-edit cursor-pointer mx-2"></i></Link>)}
                <i onClick={() => handleDelete(lesson.id)} className="fe fe-trash-2 cursor-pointer mx-2"></i>
                <i {...listeners} className="fe fe-align-justify cursor-pointer ms-2"></i>
            </div>
            {lesson.type == 'video' && (<EditVideoModal showVideoModal={showVideoModal} setShowVideoModal={setShowVideoModal} lesson={lesson} section_id={section_id} setLessons={setLessons}/>)}
            {lesson.type == 'document' && (<EditDocumentModal showEditDocumentModal={showEditDocumentModal} setShowEditDocumentModal={setShowEditDocumentModal} lesson={lesson} section_id={section_id} setLessons={setLessons}/>)}
        </div>
    );
}
