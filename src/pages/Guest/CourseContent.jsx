import { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import { getImageUrl } from "../../api/common";

export default function CourseContent() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!course_id) return;
    // console.log("course_id của khóa học:", course_id);
    setLoading(true);
    axiosClient
      .get(`/courses/${course_id}/public`)
      .then((response) => {
        console.log("Dữ liệu API nhận được:", response.data.data);
        const { course, instructor, average_rating } = response.data.data;
        setCourse({
          ...course,
          lecturer: instructor || {},
          average_rating,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy chi tiết khoá học:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [course_id]);

  if (loading) {
    return (
      <>
        <div className="card p-5">
          <Skeleton />
        </div>
      </>
    );
  }
  if (!course) {
    return <p>Khoá học không tồn tại hoặc đã bị xoá.</p>;
  }
  return (
    <>
      <div className="card rounded-3">
        <div className="card-header border-bottom-0 p-0">
          <div className="p-2">
            <video
              className="w-100 rounded-2"
              controls
              src={getImageUrl(course.video_preview)}
            ></video>
          </div>
          <div className="px-3">
            <h2>{course.title}</h2>
          </div>
          <div className="d-flex align-items-center px-3 mt-3">
            <img
              src="../../../assets/images/avatar/avatar-2.jpg"
              alt="Avatar"
              className="rounded-circle me-2"
              style={{ width: "30px" }}
            />
            <span className="mb-0 ">
              {course.lecturer?.name || "Chưa cập nhật giảng viên"}
            </span>
          </div>
          <div className="d-flex align-items-center gap-6 px-4 mt-3">
            <span className="d-flex align-items-center">
              <i className="bi bi-people text-secondary me-1"></i>
              <span className="small">2 học viên</span>
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-play-circle text-secondary me-1"></i>
              <span className="small">Tổng 10 bài giảng</span>
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-clock me-1"></i>
              <span className="small">Thời lượng 29 giờ </span>
            </span>
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
            {/* Nội dung */}
            <div
              className="tab-pane fade show active"
              id="table"
              role="tabpanel"
              aria-labelledby="table-tab"
            >
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
                        <div className="me-auto">Introduction</div>
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
                              <span>Adding JavaScript Code to a Web Page</span>
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
            {/* Thông tin */}
            <div
              className="tab-pane fade"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <div className="mb-4">
                <h3 className="mb-2">{course.description}</h3>
                <p>{course.description}</p>
              </div>
            </div>
            {/* Đánh giá  */}
            <div
              className="tab-pane fade"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <div className="mb-3">
                <div className="d-lg-flex align-items-center justify-content-between mb-5">
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

                {/* {loading ? (
                    <p>Đang tải đánh giá...</p>
                  ) : reviews.length === 0 ? (
                    <p>
                      Chưa có đánh giá nào cho khóa học này. Hãy là người đầu
                      tiên đánh giá!
                    </p>
                  ) : (
                    reviews.map((review) => (
                      <div
                        key={review.id}
                        className="d-flex align-items-start border-bottom pb-4 mb-4"
                      >
                        <img
                          src="../assets/images/avatar/avatar-1.jpg"
                          alt=""
                          className="rounded-circle avatar-lg"
                        />
                        <div className="ms-3">
                          <h4 className="mb-1">
                            {review.user?.name || "Người dùng ẩn danh"}
                            
                          </h4>
                          <div className="mb-2">
                            <span className="fs-6">
                              {[...Array(review.rating)].map((_, index) => (
                                <svg
                                  key={index}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  className="bi bi-star-fill text-warning"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                </svg>
                              ))}
                            </span>
                          </div>
                          <p>{review.review_text}</p>
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
                    ))
                  )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
