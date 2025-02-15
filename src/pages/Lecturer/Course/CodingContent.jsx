import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CodingContent() {
  const [content, setContent] = useState("");

  return (
    <>
      <div className="mb-2">
        <label className="form-label fw-bold">Đề bài</label>
        <CKEditor
          editor={ClassicEditor}
          data="Viết nội dung của bạn ở đây..."
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          config={{
            toolbar: [
              "bold",
              "italic",
              "underline",
              "strike",
              "|",
              "numberedList",
              "bulletedList",
              "|",
              "link",
              "imageUpload",
              "blockQuote",
              "|",
              "undo",
              "redo",
            ],
          }}
        />
      </div>

      <div className="row mt-2">
        <div className="col-md-6">
          <label className="form-label fw-bold">Mã nguồn học viên</label>
          <div
            className="bg-dark text-white p-3 rounded"
            style={{ minHeight: "150px" }}
          >
            <pre>// Code bên học viên</pre>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-bold">Mã nguồn giải pháp</label>
          <div
            className="bg-dark text-white p-3 rounded"
            style={{ minHeight: "150px" }}
          >
            <pre>// Code giải pháp</pre>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <label className="form-label fw-bold">Gợi ý</label>
        <p className="text-muted">
          Các gợi ý sẽ được mở khóa sau lần thực hiện thất bại thứ hai để học
          viên có thể nhận được nhiều hỗ trợ hơn ngoài các bài giảng và bài kiểm
          tra liên quan. Gợi ý là một cách để thúc đẩy học viên hướng tới giải
          pháp mà không nói cho họ biết cách giải quyết vấn đề.
        </p>
        <textarea
          className="form-control"
          rows="2"
          defaultValue="Viết gợi ý tại đây..."
        ></textarea>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-secondary me-2">Hủy</button>
        <button className="btn btn-primary me-2">Kiểm tra code</button>
        <button className="btn btn-success">Lưu bài tập</button>
      </div>
    </>
  );
}
