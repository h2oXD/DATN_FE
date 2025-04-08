import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import Footer from "../../../components/Footer";
import { getImageUrl } from "../../../api/common";

export default function PostDetail() {
  const { id } = useParams(); // Lấy ID từ URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState(null); // Lưu thông tin tác giả

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/posts/${id}`);
        setPost(response.data.post);
        
      } catch (err) {
        if (err.response) {
          // Xử lý theo mã lỗi từ API
          switch (err.response.status) {
            case 401:
              setError("Bạn cần đăng nhập để xem bài viết này.");
              break;
            case 403:
              setError("Bạn không có quyền xem bài viết này!");
              break;
            case 404:
              setError("Không tìm thấy bài viết.");
              break;
            default:
              setError("Đã xảy ra lỗi. Vui lòng thử lại.");
          }
        } else {
          setError("Lỗi kết nối. Vui lòng kiểm tra mạng.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!post) return <p>Bài viết không tồn tại.</p>;

  return (
    <>
      <div className="container mt-4">
        <h2 className="fw-bold">{post.title}</h2>
        {/* <img
          src={`http://datn_be.test/${post.thumbnail}`}
          alt={post.title}
          className="img-fluid rounded mb-3"
        /> */}
        
        <div className="d-flex align-items-center">
  <div className="position-relative">
    <img
      src={post && post.thumbnail ? getImageUrl(post.thumbnail) : "/avatarDefault.jpg"}
      alt={post.title}
      className="rounded-circle border border-3 border-warning"
      style={{ width: "50px", height: "50px" }}
    />
    
  </div>
  <div className="ms-2">
    <strong className="me-1">Tác giả: {post.user_id}</strong> 
    <i className="bi bi-patch-check-fill text-primary"></i>
    <p className="text-muted">Đã xem: {post.views} lần</p>
  </div>
</div>

        <div
          className="post-content text-dark fs-6 lh-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer />
    </>
  );
}
