import { useState } from "react";
// import DocumentUpload from "./DocumentUpload";
import Quizz from "./Quizz";
// import VideoUpload from "./VideoUpload";
import { Modal } from "antd";
// import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function Curriculum() {
  // const [showContentOptions, setShowContentOptions] = useState(false);
  const [showFrameworkItems, setShowFrameworkItems] = useState(false);
  const [chapterTitle, setChapterTitle] = useState("");
  const [learningObjectives, setLearningObjectives] = useState("");
  const [lectureTitle, setLectureTitle] = useState("");
  const [showLectureForm, setShowLectureForm] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  const [showFormQuiz, setShowFormQuiz] = useState(false);
  const [isModalSectionOpen, setIsModalSectionOpen] = useState(false);
  const [isModalCodingOpen, setIsModalCodingOpen] = useState(false);
  const [showButtonLesson, setShowButtonLesson] = useState(true);
  const [showFormDocument, setShowFormDocument] = useState(false);
  return (
    <>
      <div className="card p-3">
        <div className="card-header ps-0 py-2">
          <h3 className="m-0 mb-2">Chương trình giảng dạy</h3>
        </div>
        {/* Chương */}
        <div className="card tw-bg-slate-100 mt-4">
          <div className="d-flex justify-content-between align-items-center p-3">
            <p className="tw-text-base tw-font-bold m-0">
              Chương 1: Giới thiệu
            </p>
            <div>
              <i className="fe fe-edit ms-2"> </i>
              <i className="fe fe-trash-2 ms-2"> </i>
            </div>
          </div>

          <div className="card-body p-2">
            {/* Bài giảng trong chương */}
            {/* <div className="border rounded px-3 d-flex justify-content-between align-items-center bg-white">
              <div className="d-flex">
                <p className="m-0 me-1 tw-font-semibold">Bài giảng 1:</p>
                <p className="m-0">Hướng dẫn cài đặt môi trường</p>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-sm border border-secondary bg-white text-dark"
                  onClick={() => setShowContentOptions(!showContentOptions)}
                >
                  <i
                    className={`bi ${showContentOptions ? "bi-chevron-up" : "bi-chevron-down"
                      }`}
                  ></i>
                </button>
                <button className="btn btn-sm btn-sm border border-secondary bg-white text-dark m-2">
                  <i className="bi bi-list"></i>
                </button>
              </div>
            </div>
            {showContentOptions && (
              <div className="border p-3 mt-2 bg-white rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0 tw-font-semibold">Chọn loại nội dung</p>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-primary mx-1 border"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                    >
                      <i className="bi bi-play-circle"></i> Video
                    </button>
                    <VideoUpload />

                    <button className="btn btn-sm btn-outline-primary mx-1 border"

                    >
                      <i className="bi bi-easel"></i> Bài tập coding
                    </button>

                    <button
                      className="btn btn-sm btn-outline-primary mx-1 border"
                      onClick={() => setShowForm(true)}
                    >
                      <i className="bi bi-easel"></i> Bài tập trắc nghiệm
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary mx-1 border"
                      data-bs-toggle="modal"
                      data-bs-target="#documentModal"
                    >
                      <i className="bi bi-file-earmark-text"></i> Tài liệu
                    </button>
                    <DocumentUpload />
                    <button
                      className="btn btn-sm btn-sm btn-outline-light text-dark border"
                      onClick={() => {
                        setShowContentOptions(false);
                      }}
                    >
                      ✖
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                </div>
                {showForm && (
                  <div className="border p-4 mt-3 rounded">
                    <h5>Tạo bài tập trắc nghiệm:</h5>
                    <input
                      type="text"
                      className="form-control my-2"
                      placeholder="Nhập tiêu đề"
                    />
                    <label>Mô tả</label>
                    <textarea
                      className="form-control my-2"
                      placeholder="Mô tả"
                    ></textarea>
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => setShowForm(false)}
                      >
                        Hủy
                      </button>
                      <button
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#quizzModal"
                      >
                        Thêm bài tập
                      </button>
                      <Quizz />
                    </div>
                  </div>
                )}
              </div>
            )} */}
            {showButtonLesson && <button
              className="p-2 tw-bg-white tw-hover:bg-black border rounded mt-2 tw-text-[#754ffe] tw-font-semibold"
              onClick={() => { setShowFrameworkItems(!showFrameworkItems); setShowButtonLesson(false) }}
            >
              + Mục trong khung chương trình
            </button>}
            {showFrameworkItems && (
              <div className="border rounded p-3 mt-2 bg-white d-flex gap-3 flex-wrap justify-content-between">
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary mx-1 border"
                    onClick={() => { setShowLectureForm(!showLectureForm); setShowFormQuiz(false); setShowFormDocument(false) }}
                  >
                    + Video bài giảng
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary mx-1 border"
                    onClick={() => { setShowFormQuiz(!showFormQuiz); setShowLectureForm(false); setShowFormDocument(false) }}
                  >
                    + Bài tập trắc nghiệm
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary mx-1 border"
                    onClick={() => { setShowFormDocument(!showFormDocument); setShowLectureForm(false); setShowFormQuiz(false) }}
                  >
                    + Tài liệu
                  </button>
                  <button className="btn btn-sm btn-outline-primary mx-1 border"
                    onClick={() => { setIsModalCodingOpen(true) }}
                  >
                    + Bài tập coding
                  </button>
                  <Modal
                    open={isModalCodingOpen}
                    onCancel={() => {
                      setIsModalCodingOpen(false); // Đóng modal
                      // formik.resetForm(); // Xoá message validate khi đóng modal
                    }}
                    footer={null} // Ẩn nút OK & Cancel mặc định
                  >
                    <h3 className="mb-3">Thêm bài tập coding</h3>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="tenBaiTap" className="form-label">
                          Tên bài tập
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tenBaiTap"
                          placeholder="Nhập tên bài tập"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loaiNgonNgu" className="form-label">
                          Chọn ngôn ngữ lập trình
                        </label>
                        <select className="form-select" id="loaiNgonNgu">
                          <option>Python</option>
                          <option>JavaScript</option>
                          <option>C++</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="mucTieu" className="form-label">
                          Mục tiêu bài tập
                        </label>
                        <textarea
                          className="form-control"
                          id="mucTieu"
                          rows="3"
                          placeholder="Cung cấp một mục tiêu học tập cho bài tập coding này."
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-danger me-2">
                          Hủy
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Tiếp theo
                        </button>
                      </div>
                    </form>
                  </Modal>
                </div>
                <button
                  className="btn btn-sm btn-sm btn-outline-light text-dark border"
                  onClick={() => { setShowFrameworkItems(!showFrameworkItems); setShowButtonLesson(true); setShowLectureForm(false); setShowFormQuiz(false); setShowFormDocument(false) }}
                >
                  ✖
                </button>
              </div>
            )}
            {showLectureForm && (
              <div className="border p-3 mt-2 bg-white rounded w-100">
                <h5>Tiêu đề của video bài giảng</h5>
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
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => setShowLectureForm(false)}
                  >
                    Hủy
                  </button>
                  <button className="btn btn-sm btn-primary">
                    Thêm bài giảng
                  </button>
                </div>
              </div>
            )}
            {showFormQuiz && (
              <div className="border p-3 mt-2 bg-white rounded w-100">
                <h5>Tạo bài tập trắc nghiệm:</h5>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Nhập tiêu đề"
                />
                <label>Mô tả</label>
                <textarea
                  className="form-control my-2"
                  placeholder="Mô tả"
                ></textarea>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => setShowFormQuiz(false)}
                  >
                    Hủy
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#quizzModal"
                  >
                    Thêm bài tập
                  </button>
                  <Quizz />
                </div>
              </div>
            )}
            {showFormDocument && (
              <div className="border p-3 mt-2 bg-white rounded w-100">
                <div className="mb-3">
                  <label className="form-label">Tiêu đề tài liệu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tiêu đề..."
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mô tả</label>
                  <textarea
                    className="form-control"
                    placeholder="Nhập mô tả..."
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Tải lên tài liệu</label>
                  <input
                    type="file"
                    className="form-control"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                  />
                </div>
              </div>)}
          </div>
        </div>

        {/* Nút thêm mới chương */}
        <button
          className="btn btn-outline-primary mt-3 w-10"
          onClick={() => setIsModalSectionOpen(true)}
        >
          + Chương
        </button>
        <Modal
          open={isModalSectionOpen}
          onCancel={() => {
            setIsModalSectionOpen(false); // Đóng modal
            // formik.resetForm(); // Xoá message validate khi đóng modal
          }}
          footer={null} // Ẩn nút OK & Cancel mặc định
        >
          <h3 className="text-center">Tạo mới chương</h3>
          <h5>Tiêu đề chương mới</h5>
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
            placeholder="Nhập mô tả"
            value={learningObjectives}
            onChange={(e) => setLearningObjectives(e.target.value)}
            maxLength={200}
          />
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-primary">Thêm mới</button>
          </div>
        </Modal>
      </div>
    </>
  );
}
