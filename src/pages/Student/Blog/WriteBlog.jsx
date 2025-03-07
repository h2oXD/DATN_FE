import { useRef } from "react";

import {
  BiBold,
  BiItalic,
  BiUnderline,
  BiListUl,
  BiListOl,
  BiLink,
} from "react-icons/bi";
import { FaBullhorn } from "react-icons/fa";

export default function WriteBlog() {
  const editorRef = useRef(null);

  const formatText = (command) => {
    if (command === "createLink") {
      let url = prompt("Nhập URL:");
      if (url) document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary">
          <h5 className="mb-0 text-white">Trình Soạn Thảo Văn Bản</h5>
        </div>
        <div className="card-body">
          {/* Ô nhập tiêu đề */}
          <input
            type="text"
            className="form-control mb-3 fw-bold"
            placeholder="Nhập tiêu đề bài viết..."
          />

          {/* Thanh công cụ soạn thảo */}
          <div className="d-flex gap-2 mb-2">
            <button
              className="border-0 bg-transparent cursor-pointer fs-5 p-1"
              onClick={() => formatText("bold")}
            >
              <BiBold className="editor-icon fs-3" />
            </button>
            <button
              className="border-0 bg-transparent cursor-pointer fs-5 p-1"
              onClick={() => formatText("italic")}
            >
              <BiItalic className="editor-icon fs-3" />
            </button>
            <button
              className="border-0 bg-transparent cursor-pointer fs-5 p-1"
              onClick={() => formatText("underline")}
            >
              <BiUnderline className="editor-icon fs-3" />
            </button>
            <button
              className="border-0 bg-transparent cursor-pointer fs-5 p-1"
              onClick={() => formatText("insertOrderedList")}
            >
              <BiListOl className="editor-icon fs-3" />
            </button>
            <button
              className="border-0 bg-transparent cursor-pointer fs-5 p-1"
              onClick={() => formatText("insertUnorderedList")}
            >
              <BiListUl className="editor-icon fs-3" />
            </button>
            <button
              className="border-0 bg-transparent cursor-pointer fs-5 p-1"
              onClick={() => formatText("createLink")}
            >
              <BiLink className="editor-icon fs-3" />
            </button>
          </div>

          {/* Khu vực nhập nội dung */}
          <div
            ref={editorRef}
            className="border rounded p-3 bg-white"
            contentEditable="true"
            style={{ minHeight: "250px", outline: "none" }}
          ></div>

          {/* Nút Xuất bản */}
          <div className="mt-3 text-end">
            <button
              className="btn btn-success px-4 d-flex align-items-center gap-2"
              style={{ transition: "0.3s ease-in-out" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <FaBullhorn /> Xuất bản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
