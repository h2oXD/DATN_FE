import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../api/axios";

export default function MentorList() {
  const listRef = useRef(null);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/student/home")
      .then((response) => {
        console.log(response.data);
        setMentors(response.data.topLectures || []);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu giảng viên:", error);
      })
      .finally(() => {
        setLoading(false);
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

  if (loading) {
    return (
      <>
        <div className="p-5">
          <Skeleton />
        </div>
      </>
    );
  }

  if (isEmptyArray(mentors)) {
    return (
      <>
        <h4 className="p-5">Không có dữ liệu giảng viên</h4>
      </>
    );
  }

  return (
    <>
      <div className="mt-2 p-3 position-relative">
        <h3 className="mb-3">Người hướng dẫn nổi bật</h3>

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
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {mentors.map((mentor) => (
            <div className="col-md-2" key={mentor.lecturer.id}>
              <div className="d-flex m-0">
                <div className="d-flex gap-3">
                  <a
                    href="mentor-single.html"
                    className="bg-white text-center shadow-sm text-wrap rounded-4 w-100 border card-lift border"
                    style={{ width: "200px", important: true }}
                  >
                    <div className="p-3">
                      <img
                        src={mentor.lecturer.profile_picture}
                        alt={mentor.lecturer.name}
                        className="avatar avatar-xl rounded-circle"
                      />
                      <div className="mt-3">
                        <h3 className="mb-0 h4">{mentor.lecturer.name}</h3>
                        <div className="mt-0 text-dark">
                          <i className="bi bi-book me-1"></i>
                          {mentor.lecturer.courses.length} Khóa học
                        </div>
                        <span className="text-warning">
                          {mentor.average_rating} ★ (
                          {mentor.lecturer.courses.reduce(
                            (total, course) =>
                              total +
                              (course.reviews ? course.reviews.length : 0),
                            0
                          )}
                          )
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.row.g-3.overflow-auto::-webkit-scrollbar {
          display: none;
        }`}</style>
    </>
  );
}
