import { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { useParams } from "react-router-dom";
import { Modal, Skeleton } from "antd";
import { getImageUrl } from "../../api/common";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GoCodeSquare } from "react-icons/go";
import { format } from "date-fns";

export default function CourseContent() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preivew, setPreview] = useState(null)

  useEffect(() => {
    if (!course_id) return;
    // console.log("course_id của khóa học:", course_id);
    setLoading(true);
    axiosClient
      .get(`/courses/${course_id}/public`)
      .then((response) => {
        console.log("Dữ liệu API nhận được:", response.data.data);
        const { course, instructor, average_rating, student_count, total_lessons } = response.data.data;
        setCourse({
          ...course,
          lecturer: instructor || {},
          average_rating,
          student_count,
          total_lessons
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
              src={course && course.user && course.user.profile_picture ? getImageUrl(course.user.profile_picture) : '/avatarDefault.jpg'}
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
              <span className="small">{course && course.student_count}</span>
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-play-circle text-secondary me-1"></i>
              <span className="small">Tổng {course && course.total_lessons} bài giảng</span>
            </span>
            {/* <span className="d-flex align-items-center">
              <i className="bi bi-clock me-1"></i>
              <span className="small">Thời lượng 29 giờ </span>
            </span> */}
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
                    {course && course.sections.map((section, index) => (
                      <li key={index} className="list-group-item px-0 pt-0">
                        {/* <!-- Toggle --> */}
                        <a
                          className="h4 mb-0 d-flex align-items-center active"
                          data-bs-toggle="collapse"
                          href="#courseTwo"
                          aria-expanded="true"
                          aria-controls="courseTwo"
                        >
                          <div className="me-auto">{section.title}</div>
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
                            {section && section.lessons.map((lesson, index) => (
                              <a key={index}
                                className="mb-2 d-flex justify-content-between align-items-center text-inherit border p-2"
                              >
                                <div className="text-truncate">
                                  <span className="">
                                    {lesson.type == 'video' && (<><MdOutlineOndemandVideo className="tw-size-5 me-2" /><p className="m-0 me-2 tw-inline tw-font-semibold">Video:</p></>)}
                                    {lesson.type == 'document' && (<><IoDocumentTextOutline className="tw-size-5 me-2" /><p className="m-0 me-2 tw-inline tw-font-semibold">Tài liệu:</p></>)}
                                    {lesson.type == 'quiz' && (<><IoIosHelpCircleOutline className="tw-size-5 me-2" /><p className="m-0 me-2 tw-inline tw-font-semibold">Trắc nghiệm:</p></>)}
                                    {lesson.type == 'coding' && (<><GoCodeSquare className="tw-size-5 me-2" /><p className="m-0 me-2 tw-inline tw-font-semibold">Coding:</p></>)}
                                  </span>
                                  <span>{lesson.title}</span>
                                </div>
                                <div className="text-truncate">
                                  <span>{lesson.is_preview == 1 && (<a onClick={() => { setPreview(lesson.id) }} type="button">Xem trước</a>)}</span>
                                  <Modal
                                    open={preivew == lesson.id}
                                    onCancel={() => { setPreview(false) }}
                                    width={700}
                                    footer={null}
                                  >
                                    <h3>{lesson.title}</h3>
                                    {lesson.is_preview == 1 && lesson.type == 'video' &&
                                      <video
                                        controls
                                        className="w-100 rounded border"
                                        src={getImageUrl(lesson.videos.video_url)}
                                      ></video>
                                    }
                                    {lesson.is_preview == 1 && lesson.type == 'document' &&
                                      <>
                                        <p>{lesson.documents.description}</p>
                                        <a href={getImageUrl(lesson.documents.document_url)} download="document_name.pdf">Tải xuống</a>
                                      </>
                                    }
                                  </Modal>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}

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
                <div className="">
                  <h4>Học viên sẽ học được trong khóa học</h4>
                  {course && JSON.parse(course.learning_outcomes).map((l, index) => (
                    <p key={index}><i className="fe fe-check me-1 text-success"></i>{l}</p>
                  ))}
                  <h4>Khóa học này dành cho đối tượng</h4>
                  {course && JSON.parse(course.target_students).map((t, index) => (
                    <p key={index}><i className="fe fe-check me-1 text-success"></i>{t}</p>
                  ))}
                  <h4>Yêu cầu hoặc điều kiện tiên quyết để tham gia khóa học</h4>
                  {course && JSON.parse(course.prerequisites).map((t, index) => (
                    <p key={index}><i className="fe fe-check me-1 text-success"></i>{t}</p>
                  ))}
                </div>
                <h4 className="mb-2">Nội dung chính: {course && course.primary_content}</h4>
                <h4 className="mb-2">Mô tả</h4>
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
                {course && course.reviews.length == 0 && <>
                  <p className="text-center">
                    Chưa có đánh giá nào cho khóa học này.
                  </p>
                </>}
                {course && course.reviews.length > 0 && course.reviews.map((c, index) => (
                  <div key={index} className="alert alert-light">
                    <div className="d-flex gap-3">
                      <div className="avatar avatar-md">
                        <img
                          alt="avatar"
                          src={c.reviewer && c.reviewer.profile_picture ? getImageUrl(c.reviewer.profile_picture) : '/avatarDefault.jpg'}
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <p className={`m-0 tw-font-semibold`}>{c.reviewer && c.reviewer.name}</p>
                        <div className="d-flex align-items-center gap-2">
                          <p className="m-0 text-warning">{c.rating}★</p>
                          <small className="m-0">{format(new Date(c.created_at), "dd/MM/yyyy HH:mm:ss")}</small>
                        </div>
                      </div>
                    </div>
                    <p className="m-0">{c.review_text}</p>
                  </div>))}
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
      </div >
    </>
  );
}
