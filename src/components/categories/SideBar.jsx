import { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { Skeleton } from "antd";
import { getImageUrl } from "../../api/common";
import { useNavigate } from "react-router-dom";

export default function SideBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    price: [],
    languages: [],
    levels: [],
  });
  const [loading, setLoading] = useState(true);
  const [topCourses, setTopCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const response = await axiosClient.get("/student/home");
        if (response.data && response.data.topCourses) {
          setTopCourses(response.data.topCourses.slice(0, 3)); // Get top 3 courses
        }
      } catch (error) {
        console.error("Lỗi khi lấy khóa học nổi bật:", error);
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

    fetchTopCourses();
    fetchRegisteredCourses();
  }, []);

  const handleCourseClick = (id) => {
    if (registeredCourses.includes(id)) {
      nav(`/student/course/${id}`); // Điều hướng vào học nếu đã đăng ký
    } else {
      nav(`/course/${id}/coursedetail`); // Điều hướng vào chi tiết nếu chưa đăng ký
    }
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      const newFilters = { ...prevFilters, [filterType]: updatedFilter };
      console.log("Updated filters:", newFilters); // Debug filters
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  //   if (loading) {
  //     return (
  //       <div>
  //         <Skeleton />
  //         <Skeleton />
  //         <Skeleton />
  //       </div>
  //     );
  //   }

  return (
    <>
      <div className="mt-4">
        <h4>Giá</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="free"
            onChange={() => handleCheckboxChange("price", "free")}
          />
          <label className="form-check-label" htmlFor="free">
            Miễn phí
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="paid"
            onChange={() => handleCheckboxChange("price", "paid")}
          />
          <label className="form-check-label" htmlFor="paid">
            Có phí
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h4>Ngôn ngữ</h4>
        {["Tiếng Việt", "Tiếng Anh", "Tiếng Trung"].map((language) => (
          <div className="form-check" key={language}>
            <input
              className="form-check-input"
              type="checkbox"
              id={language}
              onChange={() => handleCheckboxChange("languages", language)}
            />
            <label className="form-check-label" htmlFor={language}>
              {language}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h4>Trình độ</h4>
        {["Sơ cấp", "Trung cấp", "Chuyên gia"].map((level) => (
          <div className="form-check" key={level}>
            <input
              className="form-check-input"
              type="checkbox"
              id={level}
              onChange={() => handleCheckboxChange("levels", level)}
            />
            <label className="form-check-label" htmlFor={level}>
              {level}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h4>Khóa học nổi bật</h4>
        <div>
          {topCourses.map((course) => (
            <div
              className="d-flex align-items-center mb-3"
              key={course.course.id}
            >
              <img
                onClick={() => handleCourseClick(course.course.id)}
                alt={course.course.title}
                className="w-40 h-25 object-cover mr-3 rounded-3"
                src={
                  (course.course.thumbnail &&
                    getImageUrl(course.course.thumbnail)) ||
                  "/default-thumbnail.jpg"
                }
                style={{ cursor: "pointer" }}
              />
              <div className="ms-2">
                <h5
                  className="text-dark"
                  onClick={() => handleCourseClick(course.course.id)}
                  style={{ cursor: "pointer" }}
                >
                  {course.course.title}
                </h5>
                <div className="text-success" style={{ fontSize: "13px" }}>
                  {course.course.is_free ? (
                    "Miễn phí"
                  ) : (
                    <>
                      <span className="text-danger fw-bold">
                        {course.course.price_sale.toLocaleString("vi-VN")} đ
                      </span>
                      {course.course.price_regular && (
                        <span className="text-muted ms-2 text-decoration-line-through">
                          {course.course.price_regular.toLocaleString("vi-VN")}{" "}
                          đ
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
