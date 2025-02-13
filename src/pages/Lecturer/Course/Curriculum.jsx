import { useState } from "react";
import VideoUpload from "./VideoUpload";
import DocumentUpload from "./DocumentUpload";

export default function Curriculum() {
  const [showContentOptions, setShowContentOptions] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showFrameworkItems, setShowFrameworkItems] = useState(false);
  const [showChapterForm, setShowChapterForm] = useState(false);
  const [chapterTitle, setChapterTitle] = useState("");
  const [learningObjectives, setLearningObjectives] = useState("");
  const [lectureTitle, setLectureTitle] = useState("");
  const [showLectureForm, setShowLectureForm] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card p-3">
          <div className="card-header">
            <h4 className="m-0">Chương trình giảng dạy</h4>
          </div>
          <p className="pt-3">
            Hãy bắt đầu xây dựng khóa học của bạn bằng cách tạo các phần, bài
            giảng và bài thực hành (
            <a href="#">trắc nghiệm, bài tập coding và bài tập</a>).
          </p>
          <div className="card mt-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">
                  Chương 1: <i className="bi bi-file-earmark-text"></i> Giới
                  thiệu
                  <i className="bi bi-pencil ms-2"> </i>
                  <i className="bi bi-trash ms-2"> </i>
                </h5>
              </div>
              <div className="border p-3 rounded bg-light d-flex justify-content-between align-items-center">
                <div>
                  <strong>Bài giảng 1: </strong>
                  <i className="bi bi-file-earmark-text"> </i> Giới thiệu
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn border border-dark bg-white text-dark"
                    onClick={() => setShowContentOptions(!showContentOptions)}
                  >
                    <i
                      className={`bi ${
                        showContentOptions ? "bi-chevron-up" : "bi-chevron-down"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>
              {showContentOptions && (
                <div className="border p-3 mt-2 bg-white rounded shadow-sm">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>Chọn loại nội dung</strong>
                    <button
                      className="btn btn-light border"
                      onClick={() => setShowContentOptions(false)}
                    >
                      ✖
                    </button>
                  </div>
                  <p>
                    Chọn loại nội dung chính. Có thể thêm file và đường liên kết
                    dưới dạng tài nguyên.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button
                      className="btn btn-light border"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                    >
                      <i className="bi bi-play-circle"></i> Video
                    </button>
                    <VideoUpload />

                    <button className="btn btn-light border">
                      <i className="bi bi-easel"></i> Bài tập coding
                    </button>
                    <button className="btn btn-light border">
                      <i className="bi bi-easel"></i> Bài tập trắc nghiệm
                    </button>

                    <button
                      className="btn btn-light border"
                      data-bs-toggle="modal"
                      data-bs-target="#documentModal"
                    >
                      <i className="bi bi-file-earmark-text"></i> Tài liệu
                    </button>
                    <DocumentUpload />
                  </div>
                </div>
              )}
              {showDetails && (
                <div className="mt-2">
                  <button className="btn btn-outline-primary me-2">
                    + Mô tả
                  </button>
                  <button className="btn btn-outline-primary">
                    + Tài nguyên
                  </button>
                </div>
              )}
              <button
                className="btn btn-outline-secondary mt-2"
                onClick={() => setShowFrameworkItems(!showFrameworkItems)}
              >
                + Mục trong khung chương trình
              </button>

              {showFrameworkItems && (
                <div className="border p-3 mt-2 bg-white rounded shadow-sm d-flex gap-3 flex-wrap ">
                  <button
                    className="btn btn-light border"
                    onClick={() => setShowLectureForm(true)}
                  >
                    + Bài giảng
                  </button>
                  <button className="btn btn-light border">
                    {" "}
                    + Bài tập trắc nghiệm
                  </button>
                  <button className="btn btn-light border">
                    + Bài tập coding
                  </button>
                  <button
                    className="btn btn-light border"
                    data-bs-toggle="modal"
                    data-bs-target="#documentModal"
                  >
                    + Tài liệu
                  </button>
                  <DocumentUpload />

                  {showLectureForm && (
                    <div className="border p-3 mt-3 bg-white rounded shadow-sm w-100">
                      <h5>Bài giảng mới:</h5>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Nhập tiêu đề"
                        value={lectureTitle}
                        onChange={(e) => setLectureTitle(e.target.value)}
                        maxLength={80}
                      />
                      <div className="d-flex justify-content-end mt-3">
                        <button
                          className="btn btn-secondary me-2"
                          onClick={() => setShowLectureForm(false)}
                        >
                          Hủy
                        </button>
                        <button className="btn btn-primary">
                          Thêm bài giảng
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <button
            className="btn btn-outline-secondary mt-3 w-15"
            onClick={() => setShowChapterForm(true)}
          >
            + Chương
          </button>
          {showChapterForm && (
            <div className="border p-3 mt-3 bg-white rounded shadow-sm">
              <h5>Chương mới:</h5>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Nhập tiêu đề"
                value={chapterTitle}
                onChange={(e) => setChapterTitle(e.target.value)}
                maxLength={80}
              />
              <h5 className="mt-3">Mô tả</h5>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Mô tả"
                value={learningObjectives}
                onChange={(e) => setLearningObjectives(e.target.value)}
                maxLength={200}
              />
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setShowChapterForm(false)}
                >
                  Hủy
                </button>
                <button className="btn btn-primary">Thêm chương</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
