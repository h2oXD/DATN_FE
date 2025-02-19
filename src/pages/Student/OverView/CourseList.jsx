import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../api/axios";

export default function CourseList() {
  const listRef = useRef(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/student/home")
      .then((response) => {
        if (response.data && response.data.topCourses) {
          setCourses(response.data.topCourses);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách khoá học:", error);
      });
  }, []);

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
      <h2 className="mb-2">Khoá học nổi bật</h2>

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
        {courses.length > 0 ? (
          courses.map((item) => (
            <div className="col-md-3" key={item.course.id}>
              <div className="card p-2">
                <a href={`../course/${item.course.id}`}>
                  <img
                    src={item.course.thumbnail || "/default-thumbnail.jpg"}
                    alt={item.course.title}
                    className="card-img-top rounded"
                  />
                </a>
                <div className="px-1 py-1">
                  <h4 className="mt-1 mb-1 text-truncate-line-2">
                    <a
                      href={`../course/${item.course.id}`}
                      className="text-inherit"
                    >
                      {item.course.title}
                    </a>
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
                      <span>Level: {item.course.level || "N/A"}</span>
                    </li>
                  </ul>
                  <small>By: {item.user.name}</small>
                  <div className="lh-1 mt-2 text-warning">
                    {item.highest_rating} ★ ({item.course.reviews.length}{" "}
                    reviews)
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <h5 className="mb-0">
                    {item.course.is_free ? "Free" : "$39.00"}
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Đang tải dữ liệu...</p>
        )}
      </div>

      <style>{`
        .row.g-3.overflow-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
