import { useRef, useState, useEffect } from "react";
import axiosClient from "../../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../../api/common";
import { isEmptyArray } from "formik";
import Skeleton from "react-loading-skeleton";

export default function CourseFree() {
  const listRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registeredCourses, setRegisteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get("/student/home");
        console.log(response.data);
        setCourses(response.data.courseFree || []);
      } catch (error) {
        console.error("Lỗi khi tải danh sách khóa học miễn phí:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRegisteredCourses = async () => {
      try {
        const response = await axiosClient.get("/user/courses");
        setRegisteredCourses(response.data.data.map((item) => item.course_id));
      } catch (error) {
        console.error("Lỗi khi tải danh sách khóa học đã đăng ký:", error);
      }
    };

    fetchCourses();
    fetchRegisteredCourses();
  }, []);

  const handleCourseClick = (id) => {
    if (registeredCourses.includes(id)) {
      nav(`/student/course/${id}`); // Điều hướng vào học nếu đã đăng ký
    } else {
      nav(`/student/home/${id}/coursedetail`); // Điều hướng vào chi tiết nếu chưa đăng ký
    }
  };

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  if (loading) {
    return (
      <>
        <div className="p-5">
          <Skeleton />
        </div>
      </>
    );
  }

  if (isEmptyArray(courses)) {
    return (
      <>
        <h4 className="p-5">Không có dữ liệu khoá học miễn phí</h4>
      </>
    );
  }

  return (
    <div className="mt-1 p-3 position-relative">
      <h2 className="mb-2">Khoá học miễn phí</h2>

      {/* Nút điều hướng */}
      <div className="position-absolute top-0 end-0 d-flex mt-2 p-3">
        <a className="text-dark me-2" onClick={scrollLeft}>
          <i className="bi bi-chevron-left"></i>
        </a>
        <a className="text-dark" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>

      <div
        className="row g-3 overflow-auto"
        ref={listRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          scrollBehavior: "smooth",
        }}
      >
        {courses.map((course) => (
          <div className="col-md-3" key={course.id}>
            <div className="card p-2 rounded">
                <div
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                >
                  <img
                    onClick={() => handleCourseClick(course.id)}
                    src={
                      (course.thumbnail && getImageUrl(course.thumbnail)) ||
                      "/default-thumbnail.jpg"
                    }
                    alt="course"
                    className="rounded img-4by3-lg w-100"
                  />
                  {course.level && (
                    <span
                      className="badge bg-dark-soft"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        padding: "5px 10px",
                        backgroundColor: "white",
                      }}
                    >
                      <div className="d-flex align-items-center gap-1">
                        {course.level}
                        {course.level == "Sơ cấp" && (
                          <svg
                            className=""
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
                              fill="#19cb98"
                            />
                            <rect
                              x="7"
                              y="5"
                              width="2"
                              height="9"
                              rx="1"
                              fill="#D3D3D3"
                            />
                            <rect
                              x="11"
                              y="2"
                              width="2"
                              height="12"
                              rx="1"
                              fill="#D3D3D3"
                            />
                          </svg>
                        )}
                        {course.level == "Trung cấp" && (
                          <svg
                            className=""
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
                              fill="#ffaa46"
                            />
                            <rect
                              x="7"
                              y="5"
                              width="2"
                              height="9"
                              rx="1"
                              fill="#ffaa46"
                            />
                            <rect
                              x="11"
                              y="2"
                              width="2"
                              height="12"
                              rx="1"
                              fill="#D3D3D3"
                            />
                          </svg>
                        )}
                        {course.level == "Chuyên gia" && (
                          <svg
                            className=""
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
                              fill="#e53f3c"
                            />
                            <rect
                              x="7"
                              y="5"
                              width="2"
                              height="9"
                              rx="1"
                              fill="#e53f3c"
                            />
                            <rect
                              x="11"
                              y="2"
                              width="2"
                              height="12"
                              rx="1"
                              fill="#e53f3c"
                            />
                          </svg>
                        )}
                      </div>
                    </span>
                  )}
                </div>              
              <div className="px-1 py-1">
                <h4 className="mt-1 mb-1 text-truncate-line-2">
                  <span
                    className="text-inherit cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                    style={{
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    {course.title}
                  </span>
                </h4>

                <div className="d-flex align-items-center mt-2">
                  <img
                    src={
                      course.user.profile_picture
                        ? getImageUrl(course.user.profile_picture)
                        : "/avatarDefault.jpg"
                    }
                    alt="Avatar"
                    className="rounded-circle me-2"
                    style={{ width: "30px" }}
                  />
                  <span className="mb-0 ">
                    {course.user.name || "Chưa cập nhật giảng viên"}
                  </span>
                </div>
                {/* <small>By: {course.user?.name}</small> */}
                <div className="lh-1 mt-2 text-warning">
                  {course.reviews.length > 0
                    ? `${(
                        course.reviews.reduce(
                          (sum, review) => sum + review.rating,
                          0
                        ) / course.reviews.length
                      ).toFixed(1)} ★ (${course.reviews.length})`
                    : "Chưa có đánh giá"}
                </div>
              </div>
              <div className="d-flex mt-2">
                <h5 className="mb-0">Miễn phí</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .row.g-3.overflow-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
