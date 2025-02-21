import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Modal } from "antd";
import BuyCourse from "../Student/BuyCourse/BuyCourse";
import axiosClient from "../../api/axios";

export default function CourseDetail() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!course_id) return;
    console.log("course_id của khóa học:", course_id);
    axiosClient
      .get(`/courses/${course_id}/public`)
      .then((response) => {
        setCourse(response.data.data.course);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy chi tiết khoá học:", error);
      });
  }, [course_id]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!course) {
    return <p>Khoá học không tồn tại hoặc đã bị xoá.</p>;
  }

  return (
    <div className="row">
      <div className="col-lg-9 col-md-12 col-12 mb-4 mb-lg-0">
        <div className="card rounded-3">
          {/* <!-- Card header --> */}
          <div className="card-header border-bottom-0 p-0">
            <div className="p-2">
              <video
                className="w-100 rounded-2"
                controls
                src="https://www.youtube.com/watch?v=4tn5YLcDR4E"
              ></video>
            </div>
            <div className="px-3">
              <h2>Khoá học</h2>
            </div>
            <div>
              {/* <!-- Nav --> */}
              <ul className="nav nav-lb-tab" id="tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="table-tab"
                    data-bs-toggle="pill"
                    href="#table"
                    role="tab"
                    aria-controls="table"
                    aria-selected="true"
                  >
                    Nội dung
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="description-tab"
                    data-bs-toggle="pill"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="false"
                  >
                    Thông tin
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="review-tab"
                    data-bs-toggle="pill"
                    href="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Đánh giá
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <div className="tab-content" id="tabContent">
              <div
                className="tab-pane fade show active"
                id="table"
                role="tabpanel"
                aria-labelledby="table-tab"
              >
                {/* <!-- Card --> */}
                <div className="accordion" id="courseAccordion">
                  <div>
                    {/* <!-- List group --> */}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0 pt-0">
                        {/* <!-- Toggle --> */}
                        <a
                          className="h4 mb-0 d-flex align-items-center active"
                          data-bs-toggle="collapse"
                          href="#courseTwo"
                          aria-expanded="true"
                          aria-controls="courseTwo"
                        >
                          <div className="me-auto">
                            Introduction to JavaScript
                          </div>
                          {/* <!-- Chevron --> */}
                          <span className="chevron-arrow ms-4">
                            <i className="fe fe-chevron-down fs-4"></i>
                          </span>
                        </a>
                        {/* <!-- Row --> */}
                        {/* <!-- Collapse --> */}
                        <div
                          className="collapse show"
                          id="courseTwo"
                          data-bs-parent="#courseAccordion"
                        >
                          <div className="pt-3 pb-2">
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Introduction</span>
                              </div>
                              <div className="text-truncate">
                                <span>1m 7s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Installing Development Software</span>
                              </div>
                              <div className="text-truncate">
                                <span>3m 11s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Hello World Project from GitHub</span>
                              </div>
                              <div className="text-truncate">
                                <span>2m 33s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Our Sample Website</span>
                              </div>
                              <div className="text-truncate">
                                <span>2m 15s</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* <!-- List group item --> */}
                      <li className="list-group-item px-0">
                        {/* <!-- Toggle --> */}
                        <a
                          className="h4 mb-0 d-flex align-items-center"
                          data-bs-toggle="collapse"
                          href="#courseThree"
                          aria-expanded="false"
                          aria-controls="courseThree"
                        >
                          <div className="me-auto">
                            {/* <!-- Title --> */}
                            JavaScript Beginning
                          </div>
                          {/* <!-- Chevron --> */}
                          <span className="chevron-arrow ms-4">
                            <i className="fe fe-chevron-down fs-4"></i>
                          </span>
                        </a>
                        {/* <!-- Row --> */}
                        {/* <!-- Collapse --> */}
                        <div
                          className="collapse"
                          id="courseThree"
                          data-bs-parent="#courseAccordion"
                        >
                          <div className="pt-3 pb-2">
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Introduction</span>
                              </div>
                              <div className="text-truncate">
                                <span>1m 41s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>
                                  Adding JavaScript Code to a Web Page
                                </span>
                              </div>
                              <div className="text-truncate">
                                <span>3m 39s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Working with JavaScript Files</span>
                              </div>
                              <div className="text-truncate">
                                <span>6m 18s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Formatting Code</span>
                              </div>
                              <div className="text-truncate">
                                <span>2m 18s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Detecting and Fixing Errors</span>
                              </div>
                              <div className="text-truncate">
                                <span>3m 14s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Case Sensitivity</span>
                              </div>
                              <div className="text-truncate">
                                <span>1m 48s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-2 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Commenting Code</span>
                              </div>
                              <div className="text-truncate">
                                <span>2m 24s</span>
                              </div>
                            </a>
                            <a
                              href="course-resume.html"
                              className="mb-0 d-flex justify-content-between align-items-center text-inherit"
                            >
                              <div className="text-truncate">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                  </svg>
                                </span>
                                <span>Summary</span>
                              </div>
                              <div className="text-truncate">
                                <span>2m 14s</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                {/* <!-- Description --> */}
                <div className="mb-4">
                  <h3 className="mb-2">Course Descriptions</h3>
                  <p>
                    If you’re learning to program for the first time, or if
                    you’re coming from a different language, this course,
                    JavaScript
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                {/* <!-- Reviews --> */}
                <div className="mb-3">
                  <h3 className="mb-4">How students rated this courses</h3>
                  <div className="row align-items-center">
                    <div className="col-auto text-center">
                      <h3 className="display-2 fw-bold">4.5</h3>
                      <span className="fs-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-star-fill text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-star-fill text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-star-fill text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-star-fill text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-star-fill text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </span>
                      <p className="mb-0 fs-6">(Based on 27 reviews)</p>
                    </div>
                    {/* <!-- Progress Bar --> */}
                    <div className="col order-3 order-md-2">
                      <div className="progress mb-3" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="progress mb-3" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="progress mb-3" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="progress mb-3" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="progress mb-0" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-auto col-6 order-2 order-md-3">
                      {/* <!-- Rating --> */}
                      <div>
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                        <span className="ms-1">53%</span>
                      </div>
                      <div>
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                        <span className="ms-1">36%</span>
                      </div>
                      <div>
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                        <span className="ms-1">9%</span>
                      </div>
                      <div>
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                        <span className="ms-1">3%</span>
                      </div>
                      <div>
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-light"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                        <span className="ms-1">2%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="mb-3">
                  <div className="d-lg-flex align-items-center justify-content-between mb-5">
                    {/* <!-- Reviews --> */}
                    <div className="mb-3 mb-lg-0">
                      <h3 className="mb-0">Reviews</h3>
                    </div>
                    <div>
                      <form className="form-inline">
                        <div className="d-flex align-items-center me-2">
                          <span className="position-absolute ps-3">
                            <i className="fe fe-search"></i>
                          </span>
                          <label
                            htmlFor="courseReviews"
                            className="visually-hidden"
                          >
                            Reviews
                          </label>
                          <input
                            type="search"
                            className="form-control ps-6"
                            placeholder="Search Review"
                            id="courseReviews"
                            name="courseReviews"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Rating --> */}
                  <div className="d-flex align-items-start border-bottom pb-4 mb-4">
                    <img
                      src="../assets/images/avatar/avatar-2.jpg"
                      alt=""
                      className="rounded-circle avatar-lg"
                    />
                    <div className="ms-3">
                      <h4 className="mb-1">
                        Max Hawkins
                        <span className="ms-1 fs-6">2 Days ago</span>
                      </h4>
                      <div className="mb-2">
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                      </div>
                      <p>
                        Lectures were at a really good pace and I never felt
                        lost. The instructor was well informed and allowed me to
                        learn and navigate Figma easily.
                      </p>
                      <div className="d-lg-flex">
                        <p className="mb-0">Was this review helpful?</p>
                        <a href="#" className="btn btn-xs btn-primary ms-lg-3">
                          Yes
                        </a>
                        <a
                          href="#"
                          className="btn btn-xs btn-outline-secondary ms-1"
                        >
                          No
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Rating --> */}
                  <div className="d-flex align-items-start border-bottom pb-4 mb-4">
                    <img
                      src="../assets/images/avatar/avatar-3.jpg"
                      alt=""
                      className="rounded-circle avatar-lg"
                    />
                    <div className="ms-3">
                      <h4 className="mb-1">
                        Arthur Williamson
                        <span className="ms-1 fs-6">3 Days ago</span>
                      </h4>
                      <div className="mb-2">
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                      </div>
                      <p>
                        Its pretty good.Just a reminder that there are also
                        students with Windows, meaning Figma its a bit different
                        of yours. Thank you!
                      </p>
                      <div className="d-lg-flex">
                        <p className="mb-0">Was this review helpful?</p>
                        <a href="#" className="btn btn-xs btn-primary ms-lg-3">
                          Yes
                        </a>
                        <a
                          href="#"
                          className="btn btn-xs btn-outline-secondary ms-1"
                        >
                          No
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Rating --> */}
                  <div className="d-flex align-items-start border-bottom pb-4 mb-4">
                    <img
                      src="../assets/images/avatar/avatar-4.jpg"
                      alt=""
                      className="rounded-circle avatar-lg"
                    />
                    <div className="ms-3">
                      <h4 className="mb-1">
                        Claire Jones
                        <span className="ms-1 fs-6">4 Days ago</span>
                      </h4>
                      <div className="mb-2">
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                      </div>
                      <p>
                        Great course for learning Figma, the only bad detail
                        would be that some icons are not included in the assets.
                        But 90% of the icons needed are included, and the voice
                        of the instructor was very clear and easy to understood.
                      </p>
                      <div className="d-lg-flex">
                        <p className="mb-0">Was this review helpful?</p>
                        <a href="#" className="btn btn-xs btn-primary ms-lg-3">
                          Yes
                        </a>
                        <a
                          href="#"
                          className="btn btn-xs btn-outline-secondary ms-1"
                        >
                          No
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Rating --> */}
                  <div className="d-flex align-items-start">
                    <img
                      src="../assets/images/avatar/avatar-5.jpg"
                      alt=""
                      className="rounded-circle avatar-lg"
                    />
                    <div className="ms-3">
                      <h4 className="mb-1">
                        Bessie Pena
                        <span className="ms-1 fs-6">5 Days ago</span>
                      </h4>
                      <div className="mb-2">
                        <span className="fs-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span>
                      </div>
                      <p>
                        I have really enjoyed this className and learned a lot,
                        found it very inspiring and helpful, thank you!
                      </p>
                      <div className="d-lg-flex">
                        <p className="mb-0">Was this review helpful?</p>
                        <a href="#" className="btn btn-xs btn-primary ms-lg-3">
                          Yes
                        </a>
                        <a
                          href="#"
                          className="btn btn-xs btn-outline-secondary ms-1"
                        >
                          No
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="card p-2">
          <div className="card">
            <img
              src={course.thumbnail || "/default-thumbnail.jpg"}
              alt={course.title}
              className="card-img-top rounded"
            />
          </div>
          <div className="px-1 py-1">
            <h4 className="mt-1 mb-1 text-truncate-line-2">{course.title}</h4>
            <small>By: {course.instructor?.name || "Unknown"}</small>
            <div className="lh-1 mt-2 text-warning">
              {course.rating} ★ ({course.reviews?.length || 0} reviews)
            </div>
          </div>
          <div className="d-flex mt-2">
            <h5 className="mb-0">{course.price_sale || "Free"}</h5>
            {course.price_regular && (
              <h6
                className="mb-0 text-muted text-decoration-line-through text-gray-500"
                style={{ marginLeft: "10px" }}
              >
                {course.price_regular}
              </h6>
            )}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary flex-grow-1" onClick={showModal}>
              Mua khóa học
            </button>
            <Modal
              open={isModalVisible}
              onCancel={handleCancel}
              width={700}
              footer={null}
            >
              <BuyCourse />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
