import { useEffect, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";

import { Link, useParams } from "react-router-dom";
import axiosClient from "../../../../api/axios";
import { Checkbox } from "antd";

export default function ListLesson({ lesson_id }) {
    const { course_id } = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const showCourse = async () => {
            try {
                const res = await axiosClient.get(`/student/courses/${course_id}`);
                setCourseData(res.data.data);
            } catch (error) {
                console.error(error); // Use console.error for errors
            }
        };
        showCourse();
    }, [course_id]); // Add course_id to the dependency array

    if (!courseData) {
        return <div>Loading...</div>; // Display a loading message
    }

    return (
        <div
            className="card shadow-none"
            style={{
                width: "400px",
                height: "80vh",
                overflowY: "auto",
                position: "sticky",
                top: "70px",
                right: 0,
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
                                            backgroundColor: lesson_id == lesson.id ? '#e9ecef' : '#f7f8fa' // Conditional background color
                                        }}
                                        className="d-flex justify-content-between border-bottom align-items-center px-3 py-2 shadow-sm text-dark"
                                        to={`?lesson=${lesson.id}`} // You'll likely want to link to the actual lesson content here
                                        role="tab"
                                    >
                                        <div className="text-truncate d-flex">
                                            <div className="me-3">
                                                <Checkbox defaultChecked={false} disabled />
                                                {/* <Checkbox defaultChecked disabled /> */}
                                            </div>
                                            <div>
                                                <span className="fs-5">{`${sectionIndex + 1}.${lessonIndex + 1
                                                    } ${lesson.title}`}</span>
                                                <div className="d-flex align-items-center">
                                                    {lesson.type == 'video' && <RiPlayCircleFill className="text-primary" />}
                                                    {lesson.type == 'document' && <IoMdDocument className="text-primary" />}
                                                    <span className="fs-6 ms-2">
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
