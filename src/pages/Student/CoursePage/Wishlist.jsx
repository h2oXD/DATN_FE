import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import { getImageUrl } from "../../../api/common";

const Wishlist = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axiosClient.get("/user/wishlist")
      .then((response) => {
        if (response.data?.data) {
          const fetchedCourses = response.data.data.map((item) => ({
            id: item.course.id,
            title: item.course.title,
            instructor: item.course.user.name,
            rating: item.course.rating,
            image: item.course.thumbnail,
            level: item.course.level,
            price_regular: item.course.price_regular,
            price_sale: item.course.price_sale,
          }));
          console.log(response.data.data);
          setCourses(fetchedCourses);
          setFavorites(Object.fromEntries(fetchedCourses.map((c) => [c.id, true])));
        }
      })
      .catch((error) => {
        setError(error.response?.status === 404 ? "Không tìm thấy khóa học trong wish-list" : "Lỗi khi lấy danh sách yêu thích");
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleFavorite = (id) => {
    if (!favorites[id]) return;
    axiosClient.delete(`/user/wishlist/${id}`)
      .then(() => {
        toast("Khóa học đã được xóa khỏi danh sách yêu thích!");
        setFavorites((prev) => {
          const updated = { ...prev };
          delete updated[id];
          return updated;
        });
        setCourses((prev) => prev.filter((course) => course.id !== id));
      })
      .catch((error) => console.error("Lỗi khi xóa khóa học:", error));
  };

  const filteredCourses = courses.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mt-2">
      <h2 className="text-center mb-4 fw-bold text-primary">Khóa học yêu thích</h2>
      <div className="d-flex justify-content-center mb-4">
        <div className="input-group w-50">
          <input type="text" className="form-control border-primary" placeholder="Tìm kiếm khóa học..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-primary"><FaSearch /></button>
        </div>
      </div>
      {error ? (
        <p className="text-center text-muted">{error}</p>
      ) : (
        <div className="row">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <Skeleton.Image style={{ width: "100%", height: 180 }} active />
                  <div className="card-body text-center">
                    <Skeleton active paragraph={{ rows: 2 }} />
                  </div>
                </div>
              </div>
            ))
          ) : filteredCourses.length ? (
            filteredCourses.map((course) => (
              <div className="col-lg-3 col-md-6" key={course.id}>
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
                    src={
                      (course.image && getImageUrl(course.image)) ||
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
                <h4 className="mt-1 mb-1 text-truncate-line-2">{course.title}</h4>
                <div className="d-flex mt-2">
                {course.price_sale || course.price_regular ? (
                  <>
                    <h5 className="mb-0 fw-bold text-danger">
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
                  <h5 className="mb-0 text-warning">Miễn phí</h5>
                )}
              </div>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={
                      "/avatarDefault.jpg"
                    }
                    alt="Avatar"
                    className="rounded-circle me-2"
                    style={{ width: "30px" }}
                  />
                  <span className="mb-0 ">
                    {course.instructor || "Chưa cập nhật giảng viên"}
                  </span>
                </div>
                <div className="lh-1 mt-2 text-warning">
                  {course.rating} <i className="fas fa-star text-warning" />
                </div>
                
                <div className="d-flex justify-content-center mb-0">
                       <Link to={`/student/home/${course.id}/coursedetail`} className="btn btn-outline-primary d-flex align-items-center gap-2"><FaEye /></Link>
                       <button className="btn btn-outline-danger d-flex align-items-center gap-2 ms-1" onClick={() => toggleFavorite(course.id)}>
                         {favorites[course.id] ? <FaHeart className="text-danger fs-4" /> : <FaRegHeart className="text-secondary fs-4" />}
                       </button>
                     </div>
              </div>
            </div>
          </div>
            ))
          ) : (
            <p className="text-center text-muted">Không tìm thấy khóa học nào.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
