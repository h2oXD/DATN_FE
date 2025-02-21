import { useState } from "react";
import boostrapImg from "../../assets/images/course/course-javascript.jpg";
import BuyCourse from "../Student/BuyCourse/BuyCourse";
import { Modal, Button } from "antd";

export default function CourseDetail() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
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
                        {/* <!-- List group item --> */}
                        <li className="list-group-item px-0">
                          {/* <!-- Toggle --> */}
                          <a
                            className="h4 mb-0 d-flex align-items-center"
                            data-bs-toggle="collapse"
                            href="#courseFour"
                            aria-expanded="false"
                            aria-controls="courseFour"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Variables and Constants
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
                            id="courseFour"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 19s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>What Is a Variable?</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 11s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Declaring Variables</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 30s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Using let to Declare Variables</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 28s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Naming Variables</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 14s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Common Errors Using Variables</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 30s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Changing Variable Values</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 4s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Constants</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 15s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>The var Keyword</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 20s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-0 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Summary</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 49s</span>
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
                            href="#courseFive"
                            aria-expanded="false"
                            aria-controls="courseFive"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Types and Operators
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
                            id="courseFive"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 55s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Numbers</span>
                                </div>
                                <div className="text-truncate">
                                  <span>6m 14s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Operator Precedence</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 58s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Number Precision</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 22s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Negative Numbers</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 35s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Strings</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 7s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Manipulating Strings</span>
                                </div>
                                <div className="text-truncate">
                                  <span>5m 8s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Converting Strings and Numbers</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 55s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-0 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Boolean Variables</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 39s</span>
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
                            href="#courseSix"
                            aria-expanded="false"
                            aria-controls="courseSix"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Program Flow
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
                            id="courseSix"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 52s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Clip Watched</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 27s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Conditionals Using if()</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 25s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Truthy and Falsy</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 30s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>if ... else</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 30s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Comparing === and ==</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 52s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>The Ternary Operator</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 47s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Block Scope Using let</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 21s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Looping with for()</span>
                                </div>
                                <div className="text-truncate">
                                  <span>5m 30s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Looping with do ... while()</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 58s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-0 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Summary</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 21s</span>
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
                            href="#courseSeven"
                            aria-expanded="false"
                            aria-controls="courseSeven"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Functions
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
                            id="courseSeven"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 52s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Function Basics</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 46s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Function Expressions</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 32s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Passing Information to Functions</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 19s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Function Return Values</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 13s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Function Scope</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 20s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>
                                    Using Functions to Modify Web Pages
                                  </span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 42s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-0 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Summary</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 3s</span>
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
                            href="#courseEight"
                            aria-expanded="false"
                            aria-controls="courseEight"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Objects and the DOM
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
                            id="courseEight"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 48s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Object Properties</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 28s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Object Methods</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 3s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Passing Objects to Functions</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 27s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Standard Built-in Objects</span>
                                </div>
                                <div className="text-truncate">
                                  <span>6m 55s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>The Document Object Model (DOM)</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 29s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Styling DOM Elements</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 42s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Detecting Button Clicks</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 3s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Showing and Hiding DOM Elements</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 37s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Summary</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 47s</span>
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
                            href="#courseNine"
                            aria-expanded="false"
                            aria-controls="courseNine"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Arrays
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
                            id="courseNine"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 48s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Creating and Initializing Arrays</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 7s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Accessing Array Items</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 4s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Manipulating Arrays</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 3s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>slice() and splice()</span>
                                </div>
                                <div className="text-truncate">
                                  <span>5m 54s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Array Searching and Looping</span>
                                </div>
                                <div className="text-truncate">
                                  <span>7m 32s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Arrays in the DOM</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 11s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Summary</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 28s</span>
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
                            href="#courseTen"
                            aria-expanded="false"
                            aria-controls="courseTen"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Scope and Hoisting
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
                            id="courseTen"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Introduction</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 20s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Global Scope</span>
                                </div>
                                <div className="text-truncate">
                                  <span>4m 7s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Clip Watched</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 14s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Function Scope</span>
                                </div>
                                <div className="text-truncate">
                                  <span>3m 45s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Var and Hoisting</span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 21s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>
                                    Undeclared Variables and Strict Mode
                                  </span>
                                </div>
                                <div className="text-truncate">
                                  <span>2m 16s</span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit disableClick"
                              >
                                <div className="text-truncate">
                                  <span className="icon-shape bg-light text-secondary icon-sm rounded-circle me-2">
                                    <i className="fe fe-lock"></i>
                                  </span>
                                  <span>Summary</span>
                                </div>
                                <div className="text-truncate">
                                  <span>1m 33s</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </li>
                        {/* <!-- List group item --> */}
                        <li className="list-group-item px-0 pb-0">
                          {/* <!-- Toggle --> */}
                          <a
                            className="h4 mb-0 d-flex align-items-center"
                            data-bs-toggle="collapse"
                            href="#courseEleven"
                            aria-expanded="false"
                            aria-controls="courseEleven"
                          >
                            <div className="me-auto">
                              {/* <!-- Title --> */}
                              Summary
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
                            id="courseEleven"
                            data-bs-parent="#courseAccordion"
                          >
                            <div className="pt-3 pb-2">
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repudiandae esse velit eos
                                sunt ab inventore est tenetur blanditiis?
                                Voluptas eius molestiae ad itaque tempora nobis
                                minima eveniet aperiam molestias, maiores natus
                                expedita dolores ea non possimus magnam corrupt
                                i quas rem unde quo enim porro culpa! Quaerat
                                veritatis veniam corrupti iusto.
                              </p>
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
                      JavaScript: Getting Started, will give you the basics for
                      coding in JavaScript. First, ll discover the types of
                      applications that can be built with JavaScript, and the
                      platforms they’ll run on.
                    </p>
                    <p>
                      Next, you’ll explore the basics of the language, giving
                      plenty of examples. Lastly, you’ll put your JavaScript
                      knowledge to work and modify a modern, responsive web
                      page. When you’re finished with this course, you’ll have
                      the skills and knowledge in JavaScript to create simple
                      programs, create simple web applications, and modify web
                      pages.
                    </p>
                  </div>
                  <h4 className="mb-3">What you’ll learn</h4>
                  <div className="row mb-3">
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled">
                        <li className="d-flex mb-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-check-circle text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          </span>
                          <span>
                            Recognize the importance of understanding your
                            objectives wheimport {Modal} from 'antd'; n
                            addressing an audience.
                          </span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-check-circle text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          </span>
                          <span>
                            Identify the fundaments of composing a successful
                            close.
                          </span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-check-circle text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          </span>
                          <span>
                            Explore how to connect with your audience through
                            crafting compelling stories.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled">
                        <li className="d-flex mb-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-check-circle text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          </span>
                          <span>
                            Examine ways to connect with your audience by
                            personalizing your content.
                          </span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-check-circle text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          </span>
                          <span>
                            Break down the best ways to exude executive
                            presence.
                          </span>
                        </li>
                        <li className="d-flex mb-2">
                          <span className="me-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-check-circle text-success"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                          </span>
                          <span>
                            Explore how to communicate the unknown in an
                            impromptu communication.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Maecenas viverra condimentum nulla molestie condimentum.
                    Nunc ex libero, feugiat quis lectus vel, ornare euismod
                    ligula. Aenean sit amet arcu nulla.
                  </p>
                  <p>
                    Duis facilisis ex a urna blandit ultricies. Nullam sagittis
                    ligula non eros semper, nec mattis odio ullamcorper.
                    Phasellus feugiat sit amet leo eget consectetur.
                  </p>
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
                        <div
                          className="progress mb-3"
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div
                          className="progress mb-3"
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div
                          className="progress mb-3"
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div
                          className="progress mb-3"
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div
                          className="progress mb-0"
                          style={{ height: "6px" }}
                        >
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
                          lost. The instructor was well informed and allowed me
                          to learn and navigate Figma easily.
                        </p>
                        <div className="d-lg-flex">
                          <p className="mb-0">Was this review helpful?</p>
                          <a
                            href="#"
                            className="btn btn-xs btn-primary ms-lg-3"
                          >
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
                          students with Windows, meaning Figma its a bit
                          different of yours. Thank you!
                        </p>
                        <div className="d-lg-flex">
                          <p className="mb-0">Was this review helpful?</p>
                          <a
                            href="#"
                            className="btn btn-xs btn-primary ms-lg-3"
                          >
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
                          would be that some icons are not included in the
                          assets. But 90% of the icons needed are included, and
                          the voice of the instructor was very clear and easy to
                          understood.
                        </p>
                        <div className="d-lg-flex">
                          <p className="mb-0">Was this review helpful?</p>
                          <a
                            href="#"
                            className="btn btn-xs btn-primary ms-lg-3"
                          >
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
                          I have really enjoyed this className and learned a
                          lot, found it very inspiring and helpful, thank you!
                        </p>
                        <div className="d-lg-flex">
                          <p className="mb-0">Was this review helpful?</p>
                          <a
                            href="#"
                            className="btn btn-xs btn-primary ms-lg-3"
                          >
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
                src={boostrapImg}
                alt="course"
                className="card-img-top rounded"
              />
            </div>
            <div className="px-1 py-1">
              <h4 className="mt-1 mb-1 text-truncate-line-2">
                <a href="../course-single.html" className="text-inherit">
                  How to easily create a website with JavaScript
                </a>
              </h4>
              <ul className="mb-1 list-inline">
                <li className="list-inline-item">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-clock align-baseline"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </span>
                  <span>2h 46m</span>
                </li>
                <li className="list-inline-item">
                  <svg
                    className="me-1 mt-n1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="8"
                      width="2"
                      height="6"
                      rx="1"
                      fill="#754FFE"
                    />
                    <rect
                      x="7"
                      y="5"
                      width="2"
                      height="9"
                      rx="1"
                      fill="#754FFE"
                    />
                    <rect
                      x="11"
                      y="2"
                      width="2"
                      height="12"
                      rx="1"
                      fill="#754FFE"
                    />
                  </svg>
                  Advance
                </li>
              </ul>
              <small>By: Claire Evans</small>
              <div className="lh-1 mt-2 text-warning">4.5 ★ (9,300)</div>
            </div>
            <div className="d-flex mt-2">
              <h5 className="mb-0">$39.00</h5>
              <h6
                className="mb-0 text-muted text-decoration-line-through text-gray-500"
                style={{ marginLeft: "10px" }}
              >
                1.249.000 đ
              </h6>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-primary flex-grow-1"
                onClick={showModal}
              >
                Mua khóa học
              </button>

              <Modal
                open={isModalVisible}
                onCancel={handleCancel}
                width={700}
                footer={null}
              >
                <BuyCourse />{" "}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
