import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { getImageUrl } from "../../../api/common";
import { toast } from "react-toastify";

export default function MyBlog() {
  const [activeTab, setActiveTab] = useState("published");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosClient.get("/user");
        setUserId(response.data.id);
      } catch (err) {
        console.error("Lỗi khi lấy user:", err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        setError(null);
        const response = await axiosClient.get("/posts");

        if (
          response?.data?.data?.data &&
          Array.isArray(response.data.data.data)
        ) {
          const filteredArticles = response.data.data.data.filter(
            (article) => article.user_id === userId
          );
          setArticles(filteredArticles);
        } else {
          throw new Error("Dữ liệu không hợp lệ.");
        }
      } catch (err) {
        err("Đã có lỗi xảy ra, vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [userId]);

  const handleDelete = async (postId) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?"))
      return;

    try {
      await axiosClient.delete(`/posts/${postId}`);
      setArticles(articles.filter((article) => article.id !== postId));
      toast.success("Bài viết đã được xóa thành công.");
    } catch (err) {
      err("Lỗi khi xóa bài viết. Vui lòng thử lại.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-primary">Bài viết của tôi</h2>
        <button
          className="btn btn-success d-flex align-items-center"
          onClick={() => navigate("/student/writeBlog")}
        >
          <FaPlus className="me-2" /> Thêm bài viết
        </button>
      </div>
      <div className="card shadow-lg rounded-4 border-0">
        <div className="card-header bg-light border-bottom-0">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link border-0 ${
                  activeTab === "published"
                    ? "active fw-bold text-primary"
                    : "text-secondary"
                }`}
                onClick={() => setActiveTab("published")}
              >
                Đã xuất bản
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link border-0 ${
                  activeTab === "drafts"
                    ? "active fw-bold text-primary"
                    : "text-secondary"
                }`}
                onClick={() => setActiveTab("drafts")}
              >
                Bản nháp
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {loading && <p className="text-center text-muted">Đang tải...</p>}
          {error && <p className="text-center text-danger">{error}</p>}

          {!loading &&
            !error &&
            activeTab === "published" &&
            (articles.length > 0 ? (
              articles.map((article) => (
                <div
                  key={article.id}
                  className="d-flex mb-4 p-3 border rounded-4 align-items-center shadow-sm bg-white"
                >
                  <img
                    src={getImageUrl(article.thumbnail)}
                    className="me-3 rounded-3"
                    width="100"
                    height="100"
                    alt="Thumbnail"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="flex-grow-1">
                    <h4
                      className="card-title text-decoration-none text-dark fw-bold"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/student/post/detail/${article.id}`)
                      }
                    >
                      {article.title}
                    </h4>
                    <div className="text-muted">
                      {article.content
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 150)}
                      ...
                    </div>
                    <small className="text-muted">
                      Đã xuất bản -{" "}
                      {new Date(article.created_at).toLocaleDateString("vi-VN")}
                    </small>
                  </div>
                  <button
                    className="btn btn-warning ms-3 d-flex align-items-center"
                    onClick={() => navigate(`/student/editBlog/${article.id}`)}
                  >
                    <FaEdit className="me-2" /> Edit{" "}
                  </button>
                  <button
                    className="btn btn-danger ms-3 d-flex align-items-center"
                    onClick={() => handleDelete(article.id)}
                  >
                    <FaTrash className="me-2" /> Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">
                Bạn chưa có bài viết nào.
              </p>
            ))}

          {!loading && !error && activeTab === "drafts" && (
            <p className="text-muted text-center">
              Chưa có bài viết nào trong bản nháp.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
