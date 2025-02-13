import React, { useState } from "react";

export default function DocumentUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [document, setDocument] = useState(null);
  const [documentName, setDocumentName] = useState("");

  const handleDocumentChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocument(file);
      setDocumentName(file.name);
    }
  };

  const handleUpload = () => {
    if (!title || !document) {
      alert("Vui lòng nhập tiêu đề và chọn tài liệu!");
      return;
    }
    alert("Tài liệu đã được tải lên thành công!");
  };

  return (
    <>
      <div
        className="modal fade"
        id="documentModal"
        tabIndex="-1"
        aria-labelledby="documentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="documentModalLabel">
                Đăng tải tài liệu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Tiêu đề tài liệu</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tiêu đề..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea
                  className="form-control"
                  placeholder="Nhập mô tả..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Tải lên tài liệu</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                  onChange={handleDocumentChange}
                />
              </div>
              {documentName && (
                <div className="mb-3">
                  <p>
                    <strong>File đã chọn:</strong> {documentName}
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button className="btn btn-primary" onClick={handleUpload}>
                Đăng tải
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
