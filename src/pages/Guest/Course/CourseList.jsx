import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { Skeleton, Pagination } from "antd";
import { isEmptyArray } from "formik";
import { getImageUrl } from "../../../api/common";

export default function CourseList({ filters }) {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(9);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get("/student/home");
        if (response.data && response.data.topCourses) {
          setCourses(response.data.topCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
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
    const fetchCategories = async () => {
      try {
        const response = await axiosClient.get("/categories");
        if (response.data && response.data.data) {
          setCategories(response.data.data); // Lưu danh sách danh mục
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };

    fetchCourses();
    fetchRegisteredCourses();
    fetchCategories(); 
  }, []);

  useEffect(() => {
    // Hàm lấy tất cả danh mục con của một danh mục
    const getAllChildCategories = (parentId) => {
      const childCategories = categories.filter(
        (category) => category.parent_id === parentId
      );
      return childCategories.reduce(
        (acc, child) => [...acc, child.id, ...getAllChildCategories(child.id)],
        []
      );
    };

    // Áp dụng bộ lọc
    const applyFilters = () => {
      let filtered = courses;

      if (filters.categories && filters.categories.length > 0) {
        const allSelectedCategories = filters.categories.flatMap((categoryId) => [
          categoryId,
          ...getAllChildCategories(categoryId),
        ]);

        filtered = filtered.filter((course) =>
          allSelectedCategories.includes(course.course.category_id)
        );
      }

      if (filters.languages && filters.languages.length > 0) {
        filtered = filtered.filter((course) =>
          filters.languages.includes(course.course.language)
        );
      }

      if (filters.levels && filters.levels.length > 0) {
        filtered = filtered.filter((course) =>
          filters.levels.includes(course.course.level)
        );
      }

      setFilteredCourses(filtered);
    };

    applyFilters();
  }, [filters, courses, categories]);

  useEffect(() => {
    setCurrentPage(1); // Đặt lại trang hiện tại về 1 khi bộ lọc thay đổi
  }, [filters]);

  const handleCourseClick = (id) => {
    if (registeredCourses.includes(id)) {
      nav(`/student/course/${id}`); // Điều hướng vào học nếu đã đăng ký
    } else {
      nav(`/course/${id}/coursedetail`); // Điều hướng vào chi tiết nếu chưa đăng ký
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setCoursesPerPage(pageSize);
  };

  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  if (loading) {
    return (
      <div className="p-5">
        <Skeleton />
      </div>
    );
  }

  if (isEmptyArray(filteredCourses)) {
    return <h3 className="p-7">😢📚 "Rất tiếc! Không có khóa học nào khớp với bộ lọc của bạn.<br /> Hãy thử thay đổi bộ lọc hoặc khám phá các danh mục khác!" 🔍🎓</h3>
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="row">
          {currentCourses.map((item) => {
            const course = item.course;
            return (
              <div className="col-md-4 mt-3" key={course.id}>
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
                    <div className="lh-1 mt-2 text-warning">
                      {item.highest_rating} ★ ({course.reviews.length} đánh giá)
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Phân trang */}
      <div className="d-flex justify-content-center mt-4 mb-4">
        <Pagination
          current={currentPage}
          pageSize={coursesPerPage}
          total={filteredCourses.length}
          onChange={handlePageChange}
          showSizeChanger
        />
      </div>
    </div>
  );
}