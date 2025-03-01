import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    author: "Admin",
    title: "Cảm Nhận Về Hành Trình Học Lập Trình",
    url: "https://fullstack.edu.vn/blog/hoang-bao-trung-hoc-vien-tieu-bieu-cua-f8-toa-sang-voi-du-an-ai-powered-learn-1",
    date: "2 ngày trước",
    readTime: "2 phút đọc",
    category: "Chuyên Ngành FE",
    description:
      "Trong suốt quá trình học lập trình, có lẽ F8 là nơi mang đến cho tôi nhiều cảm xúc nhất.",
  },
  {
    id: 2,
    author: "Giảng viên 4",
    title: "Bài viết số 1",
    url: "https://example.com/bai-viet-2",
    date: "1 ngày trước",
    readTime: "1 phút đọc",
    category: "Chuyên Ngành FE",
    description: "Mô tả cho bài viết số 1, nội dung hữu ích về lập trình.",
  },
];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4 p-0">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Danh sách bài viết</h2>

        <div>
          <Link to="/student/myBlog" className="btn btn-success shadow-sm me-2">
            Bài viết của tôi
          </Link>
          <Link to="/student/writeBlog" className="btn btn-primary shadow-sm">
            Thêm bài viết
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control w-50 shadow-sm"
          placeholder="Tìm kiếm bài viết"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row my-5">
        <div className="col-md-8">
          {filteredPosts.map((post) => (
            <div className="card mb-3 shadow-sm border blog-card" key={post.id}>
              <div className="row g-0">
                <div className="col-md-9 d-flex flex-column p-3">
                  <div className="d-flex align-items-center mb-2">
                    <FaUserCircle size={40} className="me-2 text-primary" />
                    <div>
                      <h6 className="mb-0 fw-bold">{post.author}</h6>
                      <p className="text-muted small mb-0">
                        {post.date} • {post.readTime}
                      </p>
                    </div>
                  </div>
                  <h5 className="card-title mb-1">
                    <a
                      href={post.url}
                      className="text-decoration-none text-dark fw-bold post-link"
                    >
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text small text-muted mb-2">
                    {post.description}
                  </p>
                  <span className="badge bg-secondary w-20">
                    {post.category}
                  </span>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
                  <img
                    src={post.image || "/default-thumbnail.jpg"}
                    className="img-fluid rounded"
                    alt="Bài viết"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h5 className="mb-2 ">XEM CÁC BÀI VIẾT THEO CHỦ ĐỀ</h5>
          <button className="btn btn-primary btn-sm me-2">Tất cả</button>
          <button className="btn btn-outline-primary btn-sm me-2 category-btn">
            Chuyên Ngành BE
          </button>
          <button className="btn btn-outline-primary btn-sm category-btn">
            Chuyên Ngành FE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
