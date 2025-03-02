import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";
import Skeleton from "react-loading-skeleton";
import { isEmptyArray } from "formik";

export default function MyCourse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/user/courses")
      .then((response) => {
        if (response.data.status === "success") {
          setCourses(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((item) =>
    item.course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
        <h4 className="p-5">Không có dữ liệu khoá học của tôi</h4>
      </>
    );
  }

  return (
    <div className="card">
      <div className="mt-1 p-3">
        <div className="row mb-3 align-items-center">
          <div className="col-md-6">
            <h2 className="mb-3">Khoá học của tôi</h2>
          </div>
          <div className="col-md-6 text-end">
            <input
              type="text"
              className="form-control w-50 d-inline"
              placeholder="Tìm kiếm khóa học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          {filteredCourses.map((item, index) => (
            <div className="col" key={index}>
              <div className="card card-hover h-100">
                <img
                  src={getImageUrl(item.course.thumbnail)}
                  alt={item.course.title}
                  className="card-img-top"
                />
                <div className="card-body p-3">
                  <h5 className="mt-2 text-truncate">{item.course.title}</h5>
                  <p className="text-muted small mb-1">
                    Khoá học đang hoạt động
                  </p>
                  <div className="progress mb-2" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${item.progress.progress_percentage}%` }}
                    ></div>
                  </div>
                  <p className="small text-muted">
                    {item.progress.progress_percentage}% hoàn thành
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between small">
                  <div>
                    <i className="bi bi-play-circle me-1"></i>{" "}
                    {item.progress.completed_lessons}/
                    {item.progress.total_lessons} Bài học
                  </div>
                  <Link
                    to={`/student/course/${item.course.id}`}
                    className="text-inherit"
                  >
                    <i className="fe fe-arrow-right text-primary align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
