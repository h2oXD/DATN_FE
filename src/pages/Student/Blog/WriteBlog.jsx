import { useRef, useState } from "react";
import axiosClient from "../../../api/axios";
import {
  BiBold,
  BiItalic,
  BiUnderline,
  BiListUl,
  BiListOl,
  BiLink,
} from "react-icons/bi";
import { FaBullhorn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WriteBlog() {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [status, setStatus] = useState("published");
  const navigate = useNavigate();

  const formatText = (command) => {
    if (command === "createLink") {
      let url = prompt("Nhập URL:");
      if (url) document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  };

  const handleSubmit = async () => {
    const content = editorRef.current.innerHTML;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    formData.append("status", status);

    try {
      const response = await axiosClient.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 201) {
        toast.success("Bài viết đã được tạo thành công!");
        navigate("/student/myBlog");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((key) => {
          toast.error(errors[key][0]);
        });
      } else {
        toast.error("Lỗi khi xuất bản bài viết!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-header bg-primary text-white fw-bold text-center">
          Thêm bài viết mới
        </div>
        <div className="card-body p-4">
          <input
            type="text"
            className="form-control mb-3 fw-bold border-2"
            placeholder="Nhập tiêu đề bài viết..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="d-flex gap-2 mb-2">
            {[BiBold, BiItalic, BiUnderline, BiListOl, BiListUl, BiLink].map(
              (Icon, index) => (
                <button
                  key={index}
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    formatText(
                      [
                        "bold",
                        "italic",
                        "underline",
                        "insertOrderedList",
                        "insertUnorderedList",
                        "createLink",
                      ][index]
                    )
                  }
                >
                  <Icon />
                </button>
              )
            )}
          </div>

          <div
            ref={editorRef}
            className="border rounded p-3 bg-light"
            contentEditable="true"
            style={{ minHeight: "250px", outline: "none" }}
          ></div>

          <div className="mt-3">
            <label className="form-label fw-bold">Ảnh bìa</label>
            <input
              type="file"
              className="form-control border-2"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </div>

          <div className="mt-3">
            <label className="form-label fw-bold">Trạng thái</label>
            <select
              className="form-select border-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="published">Xuất bản</option>
              <option value="draft">Bản nháp</option>
            </select>
          </div>

          <div className="mt-4 text-end">
            <button
              className="btn btn-success px-4 d-flex align-items-center gap-2"
              onClick={handleSubmit}
            >
              <FaBullhorn /> Xuất bản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
