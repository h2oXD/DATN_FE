import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function VideoUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [videoURL, setVideoURL] = useState("");

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideo(file);
      setVideoURL(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!title || !video) {
      alert("Vui lòng nhập tiêu đề và chọn video!");
      return;
    }
    alert("Video đã được tải lên thành công!");
  };

  return (
    <>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                Đăng tải video
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
                <label className="form-label">Tiêu đề video</label>
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
                <ReactQuill value={description} onChange={setDescription} />
              </div>
              <div className="mb-3">
                <label className="form-label">Tải lên video</label>
                <input
                  type="file"
                  className="form-control"
                  accept="video/*"
                  onChange={handleVideoChange}
                />
              </div>
              {videoURL && (
                <div className="mb-3">
                  <video src={videoURL} controls className="w-100"></video>
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
