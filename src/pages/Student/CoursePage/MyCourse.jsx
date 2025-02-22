import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MyCourse() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      title: "Frontend Master",
      instructor: "Thầy Tống Văn Đức",
      progress: 0,
      image: "../../assets/images/course/course-vue.jpg",
      rating: 0,
      duration: "34 Phút",
      viewers: 20,
      totalVideos: 1,
      level: "Sơ cấp",
    },
    {
      title: "Lập trình C++ cơ bản, nâng cao",
      instructor: "Thầy Tống Văn Đức",
      progress: 100,
      image: "../../assets/images/course/course-sass.jpg",
      rating: 4,
      duration: "29 Phút",
      viewers: 13,
      totalVideos: 2,
      level: "Sơ cấp",
    },
    {
      title: "React từ cơ bản đến nâng cao",
      instructor: "Thầy Tống Văn Đức",
      progress: 75,
      image: "../../assets/images/course/course-react.jpg",
      rating: 5,
      duration: "40 Phút",
      viewers: 50,
      totalVideos: 5,
      level: "Trung cấp",
    },
    {
      title: "Thiết kế UI/UX chuyên sâu",
      instructor: "Thầy Tống Văn Đức",
      progress: 60,
      image: "../../assets/images/course/course-react.jpg",
      rating: 3,
      duration: "45 Phút",
      viewers: 30,
      totalVideos: 3,
      level: "Nâng cao",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
        {filteredCourses.map((course, index) => (
          <div className="col" key={index}>
            <div className="card card-hover h-100">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
              />
              <div className="card-body">
                <span className="badge bg-info-soft">{course.level}</span>
                <h5 className="mt-2 text-truncate">{course.title}</h5>
                <p className="text-muted small mb-1">{course.instructor}</p>
                <div className="progress mb-2" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="small text-muted">
                  {course.progress}% hoàn thành
                </p>
                <div>
                  {[...Array(5)].map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={`bi bi-star-fill ${
                        starIndex < course.rating
                          ? "text-warning"
                          : "text-secondary"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between small">
                <div>
                  <i className="bi bi-people me-1"></i> {course.viewers}
                  <i className="bi bi-play-circle ms-3 me-1"></i>{" "}
                  {course.totalVideos} Video
                  <i className="bi bi-clock ms-3 me-1"></i> {course.duration}
                </div>
                <Link to={"/student/course"} className="text-inherit">
                  <i className="fe fe-arrow-right text-primary align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
