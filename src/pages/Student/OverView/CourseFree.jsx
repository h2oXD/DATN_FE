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

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/student/home")
      .then((response) => {
        console.log(response.data);
        setCourses(response.data.courseFree || []);
      })
      .catch((error) => {
        console.error("Lỗi khi tải danh sách khóa học miễn phí:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCourseClick = (id) => {
    nav(`/student/home/${id}/coursedetail`);
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
            <div className="card p-2">
              <Link to={`/student/home/${course.id}/coursedetail`}>
                <img
                  src={getImageUrl(course.thumbnail)}
                  className="card-img-top rounded"
                />
              </Link>
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
                <ul className="mb-1 list-inline">
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
                    Level : {course.level || "N/A"}
                  </li>
                </ul>
                <small>By: {course.user?.name}</small>
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
