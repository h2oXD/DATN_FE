import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import axiosClient from "../../api/axios";
import { getImageUrl } from "../../api/common";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CourseList({ filters }) {
  const [allCourses, setAllCourses] = useState([]); // Toàn bộ danh sách khóa học
  const [filteredCourses, setFilteredCourses] = useState([]); // Danh sách khóa học sau khi lọc
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6); // Số lượng khóa học trên mỗi trang
  const query = useQuery();
  const categoryId = query.get("category_id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get("/course-category", {
          params: { category_id: categoryId },
        });
        console.log("API response:", response.data.data); // Debug API response
        setAllCourses(response.data.data);
        setFilteredCourses(response.data.data);
      } catch (error) {
        console.error("Lỗi khi lấy khóa học:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [categoryId]);

  useEffect(() => {
    // Lọc dữ liệu dựa trên filters
    const applyFilters = () => {
      let filtered = [...allCourses];

      // Lọc theo giá
      if (filters.price?.length) {
        filtered = filtered.filter((course) => {
          if (
            filters.price.includes("free") &&
            (!course.price_sale || course.price_sale === 0)
          ) {
            return true;
          }
          if (filters.price.includes("paid") && course.price_sale > 0) {
            return true;
          }
          return false;
        });
      }

      // Lọc theo ngôn ngữ
      if (filters.languages?.length) {
        filtered = filtered.filter((course) =>
          filters.languages.includes(course.language)
        );
      }

      // Lọc theo trình độ
      if (filters.levels?.length) {
        filtered = filtered.filter((course) =>
          filters.levels.includes(course.level)
        );
      }

      setFilteredCourses(filtered);
    };

    applyFilters();
  }, [filters, allCourses]); // Gọi lại khi filters hoặc danh sách khóa học thay đổi

  const handleCourseClick = (course) => {
    if (course.is_enrolled) {
      navigate(`/student/course/${course.id}`);
    } else {
      navigate(`/course/${course.id}/coursedetail`);
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (loading) return <p>Đang tải khóa học...</p>;

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="row">
          {paginatedCourses.map((course) => (
            <div
              key={course.id}
              className="col-md-4 mt-3"
              onClick={() => handleCourseClick(course)}
            >
              <div className="card p-2 rounded-3">
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
                    src={
                      getImageUrl(course.thumbnail) || "/default-thumbnail.jpg"
                    }
                    alt="course"
                    className="rounded img-4by3-lg w-100"
                    onClick={() => handleCourseClick(course)}
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
                      className="text-inherit"
                      style={{ cursor: "pointer", color: "black" }}
                      onClick={() => handleCourseClick(course)}
                    >
                      {course.title}
                    </span>
                  </h4>
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src="/avatarDefault.jpg"
                      alt="Avatar"
                      className="rounded-circle me-2"
                      style={{ width: "30px" }}
                    />
                    <span className="mb-0 ">
                      {course.user.name || "Chưa cập nhật giảng viên"}
                    </span>
                  </div>
                  <div className="lh-1 mt-2 text-warning">
                    {course.reviews_avg_rating} ★ ({course.reviews_count} đánh
                    giá)
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
          ))}
          {filteredCourses.length === 0 && (
            <p>Không có khóa học nào trong danh mục này.</p>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredCourses.length}
          onChange={handlePageChange}
          showSizeChanger
        />
      </div>
    </div>
  );
}
