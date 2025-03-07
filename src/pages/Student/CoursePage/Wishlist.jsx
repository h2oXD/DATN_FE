import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axiosClient
      .get("/wishlist")
      .then((response) => {
        if (response.data && response.data.data) {
          const fetchedCourses = response.data.data.map((item) => ({
            id: item.course.id,
            title: item.course.title,
            instructor: item.course.user.name,
            rating: 4.5, // Giả sử API không trả rating
            image: item.course.thumbnail,
          }));

          setCourses(fetchedCourses);
          setFavorites(
            fetchedCourses.reduce(
              (acc, course) => ({ ...acc, [course.id]: true }),
              {}
            )
          );
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError("Không tìm thấy khóa học trong wish-list");
        } else {
          console.error("Lỗi khi lấy danh sách yêu thích:", error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    if (!favorites[id]) return;

    axiosClient
      .delete(`/wishlist/${id}`)
      .then((response) => {
        if (response.status === 200) {
          toast("Khóa học đã được xóa khỏi danh sách yêu thích!");
          setFavorites((prev) => {
            const updatedFavorites = { ...prev };
            delete updatedFavorites[id];
            return updatedFavorites;
          });

          setCourses((prev) => prev.filter((course) => course.id !== id));
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          alert("Khóa học không tồn tại trong danh sách yêu thích");
        } else {
          console.error("Lỗi khi xóa khóa học:", error);
        }
      });
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-2">
      <h2 className="text-center mb-4 fw-bold text-primary">
        Khóa học yêu thích
      </h2>
      <div className="d-flex justify-content-center mb-4">
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control border-primary"
            placeholder="Tìm kiếm khóa học..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary">
            <FaSearch />
          </button>
        </div>
      </div>

      {error ? (
        <p className="text-center text-muted">{error}</p>
      ) : (
        <div className="row">
          {loading ? (
            [...Array(3)].map((_, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <Skeleton.Image
                    style={{ width: "100%", height: 180 }}
                    active
                  />
                  <div className="card-body text-center">
                    <Skeleton active paragraph={{ rows: 2 }} />
                  </div>
                </div>
              </div>
            ))
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
                  <img
                    src={course.image || "/default-thumbnail.jpg"}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title fw-semibold text-dark">
                      {course.title}
                    </h5>
                    <p className="text-muted mb-1">
                      Giảng viên: {course.instructor}
                    </p>
                    <p className="text-warning">
                      {"⭐".repeat(Math.round(course.rating))} ({course.rating}
                      /5)
                    </p>
                    <div className="d-flex justify-content-between w-100 mt-3 px-3">
                      <Link
                        to={`/course/${course.id}`}
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                      >
                        <FaEye /> Xem khóa học
                      </Link>
                      <button
                        className="btn border-0 heart-btn"
                        onClick={() => toggleFavorite(course.id)}
                      >
                        {favorites[course.id] ? (
                          <FaHeart className="text-danger fs-4" />
                        ) : (
                          <FaRegHeart className="text-secondary fs-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">
              Không tìm thấy khóa học nào.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
