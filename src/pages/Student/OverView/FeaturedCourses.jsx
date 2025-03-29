import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";

export default function FeaturedCourses() {
  const listRef = useRef(null);
  const { course_id } = useParams();
  const [courses, setCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchRelatedCourses = async () => {
      try {
        const response = await axiosClient.get(`/courses/${course_id}/related`);
        setCourses(response.data.related_courses);
        console.log(response.data.related_courses);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách khoá học liên quan:", error);
      }
    };

    const fetchRegisteredCourses = async () => {
      try {
        const response = await axiosClient.get(`/user/courses`);
        setRegisteredCourses(response.data.data.map((item) => item.course_id));
      } catch (error) {
        console.error("Lỗi khi lấy danh sách khoá học đã đăng ký:", error);
      }
    };

    if (course_id) {
      fetchRelatedCourses();
    }
    fetchRegisteredCourses();
  }, [course_id]);

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

  return (
    <div className="mt-1 p-3 position-relative">
      <h2 className="mb-2">Khoá học liên quan</h2>

      {/* Nút điều hướng */}
      <div className="position-absolute top-0 end-0 d-flex mt-2 p-3">
        <a className="text-dark me-2" onClick={scrollLeft}>
          <i className="bi bi-chevron-left"></i>
        </a>
        <a className="text-dark" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>

      {/* Danh sách khoá học */}
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
            <div className="card p-2 rounded-3">
              <div
                onClick={() => handleCourseClick(course.id)}
                style={{
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }}
              >
                <img
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
                <img
                  src={
                    course.user.profile_picture && course.user.profile_picture
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
                <div className="lh-1 mt-2 text-warning">
                  {course.reviews_avg_rating
                    ? parseFloat(course.reviews_avg_rating).toFixed(1)
                    : 0}{" "}
                  ★ ({course.reviews_count} đánh giá)
                </div>
              </div>

              <div className="d-flex mt-2">
                {course.price_sale || course.price_regular ? (
                  <>
                    <h5 className="mb-0 fw-bold">
                      {parseInt(
                        course.price_sale || course.price_regular,
                        10
                      ).toLocaleString("vi-VN")}{" "}
                      đ
                    </h5>
                    {course.price_sale && course.price_regular && (
                      <h6
                        className="mb-0 text-decoration-line-through text-gray-500"
                        style={{ marginLeft: "10px" }}
                      >
                        {parseInt(course.price_regular, 10).toLocaleString(
                          "vi-VN"
                        )}{" "}
                        đ
                      </h6>
                    )}
                  </>
                ) : (
                  <h5 className="mb-0">Miễn phí</h5>
                )}
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
