import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BiBold,
  BiItalic,
  BiUnderline,
  BiListUl,
  BiListOl,
  BiLink,
} from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../../api/axios";

export default function EditBlog() {
  const { postId } = useParams();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [oldThumbnail, setOldThumbnail] = useState("");
  const [status, setStatus] = useState("published");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosClient.get(`/posts/${postId}`);
        const post = response.data.post;
        setTitle(post.title);
        setStatus(post.status);
        setOldThumbnail(post.thumbnail);
        editorRef.current.innerHTML = post.content;
      } catch (error) {
        if (error.response?.status === 403) {
          toast.error("Bạn không có quyền chỉnh sửa bài viết này!");
          navigate("/student/myBlog");
        } else if (error.response?.status === 404) {
          toast.error("Bài viết không tồn tại!");
          navigate("/student/myBlog");
        } else {
          //toast.error("Không thể tải bài viết!");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, navigate]);

  const formatText = (command) => {
    if (command === "createLink") {
      let url = prompt("Nhập URL:");
      if (url) document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  };

  const handleUpdate = async () => {
    const content = editorRef.current.innerHTML;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("status", status);
    formData.append("_method", "PUT");

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      const response = await axiosClient.post(`/posts/${postId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success("Bài viết đã được cập nhật!");
        navigate("/student/myBlog");
      }
    } catch (error) {
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        if (errors.title) toast.error(`Lỗi tiêu đề: ${errors.title[0]}`);
        if (errors.content) toast.error(`Lỗi nội dung: ${errors.content[0]}`);
        if (errors.thumbnail) toast.error(`Lỗi ảnh: ${errors.thumbnail[0]}`);
      } else {
        toast.error("Lỗi khi cập nhật bài viết!");
      }
    }
  };

  if (loading) return <p className="text-center">Đang tải...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white fw-bold text-center">
          Cập nhật bài viết
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3 fw-bold"
            placeholder="Nhập tiêu đề bài viết..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="d-flex gap-2 mb-2">
            <button
              className="btn btn-light"
              onClick={() => formatText("bold")}
            >
              <BiBold />
            </button>
            <button
              className="btn btn-light"
              onClick={() => formatText("italic")}
            >
              <BiItalic />
            </button>
            <button
              className="btn btn-light"
              onClick={() => formatText("underline")}
            >
              <BiUnderline />
            </button>
            <button
              className="btn btn-light"
              onClick={() => formatText("insertOrderedList")}
            >
              <BiListOl />
            </button>
            <button
              className="btn btn-light"
              onClick={() => formatText("insertUnorderedList")}
            >
              <BiListUl />
            </button>
            <button
              className="btn btn-light"
              onClick={() => formatText("createLink")}
            >
              <BiLink />
            </button>
          </div>

          <div
            ref={editorRef}
            className="border rounded p-3 bg-white"
            contentEditable="true"
            style={{ minHeight: "250px", outline: "none" }}
          ></div>

          <div className="mt-3">
            <label className="form-label">Ảnh</label>
            {oldThumbnail && (
              <div className="mb-2">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${oldThumbnail}`}
                  alt="Thumbnail"
                  className="img-thumbnail"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )}
            <input
              type="file"
              className="form-control"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </div>

          <div className="mt-3">
            <label className="form-label">Trạng thái</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="published">Xuất bản</option>
              <option value="draft">Bản nháp</option>
            </select>
          </div>

          <div className="mt-3 text-end">
            <button
              className="btn btn-success px-4 d-flex align-items-center gap-2"
              onClick={handleUpdate}
            >
              <FaSave /> Lưu bài viết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
