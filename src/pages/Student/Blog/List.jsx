import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosClient.get("/posts");
        setPosts(
          Array.isArray(response.data.data.data) ? response.data.data.data : []
        );
      } catch (err) {
        console.error("Lỗi khi lấy bài viết:", err);
        setError("Không tìm thấy bài viết!");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Danh sách bài viết</h2>
        <div>
          <Link to="/student/myBlog" className="btn btn-outline-success me-2">
            Bài viết của tôi
          </Link>
          <Link to="/student/writeBlog" className="btn btn-primary">
            + Thêm bài viết
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control w-50 mx-auto shadow-sm border-1"
          placeholder="🔍 Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center">Đang tải bài viết...</p>
      ) : error ? (
        <p className="text-danger text-center">{error}</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {filteredPosts.map((post) => (
            <div className="col" key={post.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={getImageUrl(post.thumbnail)}
                      alt="Bài viết"
                      className="card-img-top"
                    />
                    {/* <img
                      src={
                        post.thumbnail
                          ? `https://your-backend-url.com/${post.thumbnail}`
                          : "/default-thumbnail.jpg"
                      }
                      className="img-fluid rounded-start h-100 object-fit-cover"
                      alt="Bài viết"
                    /> */}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <FaUserCircle size={30} className="me-2 text-primary" />
                        <div>
                          <h6 className="mb-0 fw-semibold">
                            Tác giả {post.user_id}
                          </h6>
                          <small className="text-muted">
                            {new Date(post.created_at).toLocaleDateString()}
                          </small>
                        </div>
                      </div>
                      <h5
                        className="card-title fw-bold text-primary cursor-pointer"
                        onClick={() =>
                          navigate(`/student/post/detail/${post.id}`)
                        }
                      >
                        {post.title}
                      </h5>
                      <p className="card-text text-muted">
                        {post.content.replace(/<[^>]*>/g, "").substring(0, 100)}
                        ...
                      </p>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() =>
                          navigate(`/student/post/detail/${post.id}`)
                        }
                      >
                        Đọc tiếp →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
