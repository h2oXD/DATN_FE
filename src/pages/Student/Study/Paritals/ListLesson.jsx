/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../../../../api/axios";
import { IoMdCode } from "react-icons/io";


export default function ListLesson({ lesson_id, refresh }) {
    const { course_id } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [lessonStatus, setLessonStatus] = useState(null);

    useEffect(() => {
        const showCourse = async () => {
            try {
                const res = await axiosClient.get(`/student/courses/${course_id}`);
                setCourseData(res.data.data);
            } catch (error) {
                console.error(error); // Use console.error for errors
            }
        };
        const getStatusLesson = async () => {
            try {
                const res = await axiosClient.get(`course/${course_id}/lesson`);
                setLessonStatus(res.data.data)
                console.log(res);

            } catch (error) {
                console.error(error); // Use console.error for errors
            }
        };
        getStatusLesson()
        showCourse();
    }, [course_id, refresh]); // Add course_id to the dependency array

    if (!courseData) {
        return null; // Display a loading message
    }

    return (
        <div
            className="card tw-rounded-none"
            style={{
                // width: "400px",
                height: "100vh",
                overflowY: "auto",
            }}
        >
            <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                    <h4 className="mb-0">Nội dung khoá học</h4>
                </li>
                {courseData.sections.map((section, sectionIndex) => (
                    <li className="list-group-item p-0" key={section.id}>
                        <a
                            className="d-flex align-items-center h4 mb-0 p-3 shadow-sm"
                            style={{ backgroundColor: "#f7f8fa" }}
                            data-bs-toggle="collapse"
                            href={`#course${section.id}`}
                            role="button"
                            aria-expanded="false"
                            aria-controls={`course${section.id}`}
                        >
                            <div className="me-auto fs-5">{`${sectionIndex + 1}. ${section.title
                                }`}</div>
                            <span className="chevron-arrow ms-4">
                                <i className="fe fe-chevron-down fs-4"></i>
                            </span>
                        </a>
                        <div
                            className="collapse"
                            id={`course${section.id}`}
                            data-bs-parent="#courseAccordion"
                        >
                            <div
                                className="pb-4 nav"
                                id={`course-tab${section.id}`}
                                role="tablist"
                                aria-orientation="vertical"
                                style={{ display: "inherit" }}
                            >
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <Link
                                        key={lesson.id}
                                        style={{
                                            backgroundColor: lesson_id == lesson.id ? '#e9ecef' : '#fff' // Conditional background color
                                        }}
                                        className="d-flex justify-content-between border-bottom align-items-center px-3 py-2 shadow-sm text-dark"
                                        to={`?lesson=${lesson.id}`} // You'll likely want to link to the actual lesson content here
                                        role="tab"
                                    >
                                        <div className="text-truncate d-flex">
                                            <div className="me-3">
                                                {lessonStatus && lessonStatus.map(status => {
                                                    if (status.lesson_id == lesson.id) {
                                                        return (
                                                            <div key={status.id}> {/* Thêm key ở đây */}
                                                                {status.status == 'completed' ? (
                                                                    <FaRegCheckCircle key="completed" className="text-success tw-size-4" />
                                                                ) : (
                                                                    <FaRegCircle key="in_progress" className="tw-size-4" />
                                                                )}
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                            <div>
                                                <span className="fs-5"><span className="tw-font-semibold me-2">{`${sectionIndex + 1}.${lessonIndex + 1
                                                    }`}</span>{`${lesson.title}`}</span>
                                                <div className="d-flex align-items-center">
                                                    {lesson.type == 'video' && <RiPlayCircleFill className="text-dark" />}
                                                    {lesson.type == 'document' && <IoMdDocument className="text-dark" />}
                                                    {lesson.type == 'quiz' && <IoIosHelpCircle className="text-dark" />}
                                                    {lesson.type == 'coding' && <IoMdCode className="text-dark" />}
                                                    <span className="fs-6 ms-1">
                                                        {lesson.videos && lesson.videos.duration
                                                            ? `${Math.floor(lesson.videos.duration / 60)}:${lesson.videos.duration % 60
                                                            }`
                                                            : "0:00"}
                                                    </span>{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
