import { useState } from "react";

const articles = [
  {
    id: 1,
    title:
      "Tôi đã viết Chrome extension đầu tiên của mình bằng Github Copilot như thế nào?",
    description:
      "Câu chuyện của tôi là Tôi đang học tiếng Nhật trên một trang web...",
    date: "28 ngày trước",
    // image: "https://via.placeholder.com/150",
    link: "/post1",
  },
  {
    id: 2,
    title: "LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG 'F8' HIỆU QUẢ CHƯA?",
    description:
      "Tiếp nối Chuỗi Extensions hữu ích, hôm nay mình tiếp tục giới thiệu...",
    date: "16 ngày trước",
    // image: "https://via.placeholder.com/150",
    link: "/post2",
  },
];

export default function MyBlog() {
  const [activeTab, setActiveTab] = useState("published");

  return (
    <div className="container mt-4">
      <h2 className="mb-3 fw-bold text-primary">Bài viết của tôi</h2>
      <div className="card shadow-sm rounded-3 border-0">
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
          {activeTab === "published" &&
            articles.map((article) => (
              <div
                key={article.id}
                className="d-flex mb-4 p-3 border rounded-3 align-items-center article-card transition-transform shadow-hover"
              >
                <img
                  src={article.image || "/default-thumbnail.jpg"}
                  className="me-3 rounded-3"
                  width="100"
                />
                <div>
                  <h4 className="card-title">
                    <a
                      href={article.link}
                      className="text-decoration-none text-dark fw-bold article-link transition-color"
                    >
                      {article.title}
                    </a>
                  </h4>
                  <p className="card-text text-muted small">
                    {article.description}
                  </p>
                  <small className="text-muted">
                    Đã xuất bản - {article.date}
                  </small>
                </div>
              </div>
            ))}
          {activeTab === "drafts" && (
            <p className="text-muted text-center">
              Chưa có bài viết nào trong bản nháp.
            </p>
          )}
        </div>
      </div>

      <style>
        {`
          .article-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .article-card:hover {
            transform: translateY(-3px);
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          }
          .article-link {
            transition: color 0.3s ease;
          }
          .article-link:hover {
            color: #007bff;
          }
        `}
      </style>
    </div>
  );
}
