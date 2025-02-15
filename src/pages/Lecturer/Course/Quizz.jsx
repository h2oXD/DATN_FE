export default function Quizz() {
  return (
    <>
      <div
        className="modal fade"
        id="quizzModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tạo Câu Hỏi Trắc Nghiệm</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control mb-3 text-center"
                placeholder="Nhập câu hỏi vào đây"
                rows="3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></textarea>

              <div className="row g-3">
                <div className="col-md-3 position-relative">
                  <button
                    className="btn btn-sm position-absolute p-1 rounded bg-danger text-white shadow-sm border-0"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      top: "0px",
                      left: "6px",
                      zIndex: 10,
                    }}
                  >
                    🗑
                  </button>
                  <textarea
                    className="form-control text-center"
                    placeholder="Nhập tùy chọn trả lời"
                    rows="5"
                    style={{
                      paddingTop: "2rem",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      resize: "none",
                      lineHeight: "1.5",
                    }}
                  ></textarea>

                  <button
                    className="btn btn-sm position-absolute p-1 rounded border-primary text-primary shadow-sm bg-transparent"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      border: "1px solid",
                      opacity: "0.8",
                      top: "0px",
                      right: "7px",
                      zIndex: 10,
                    }}
                  >
                    ✔
                  </button>
                </div>
                <div className="col-md-3 position-relative">
                  <button
                    className="btn btn-sm position-absolute p-1 rounded bg-danger text-white shadow-sm border-0"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      top: "0px",
                      left: "6px",
                      zIndex: 10,
                    }}
                  >
                    🗑
                  </button>
                  <textarea
                    className="form-control text-center"
                    placeholder="Nhập tùy chọn trả lời"
                    rows="5"
                    style={{
                      paddingTop: "2rem",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      resize: "none",
                      lineHeight: "1.5",
                    }}
                  ></textarea>

                  <button
                    className="btn btn-sm position-absolute p-1 rounded border-primary text-primary shadow-sm bg-transparent"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      border: "1px solid",
                      opacity: "0.8",
                      top: "0px",
                      right: "7px",
                      zIndex: 10,
                    }}
                  >
                    ✔
                  </button>
                </div>
                <div className="col-md-3 position-relative">
                  <button
                    className="btn btn-sm position-absolute p-1 rounded bg-danger text-white shadow-sm border-0"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      top: "0px",
                      left: "6px",
                      zIndex: 10,
                    }}
                  >
                    🗑
                  </button>
                  <textarea
                    className="form-control text-center"
                    placeholder="Nhập tùy chọn trả lời"
                    rows="5"
                    style={{
                      paddingTop: "2rem",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      resize: "none",
                      lineHeight: "1.5",
                    }}
                  ></textarea>

                  <button
                    className="btn btn-sm position-absolute p-1 rounded border-primary text-primary shadow-sm bg-transparent"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      border: "1px solid",
                      opacity: "0.8",
                      top: "0px",
                      right: "7px",
                      zIndex: 10,
                    }}
                  >
                    ✔
                  </button>
                </div>
                <div className="col-md-3 position-relative">
                  <button
                    className="btn btn-sm position-absolute p-1 rounded bg-danger text-white shadow-sm border-0"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      top: "0px",
                      left: "6px",
                      zIndex: 10,
                    }}
                  >
                    🗑
                  </button>
                  <textarea
                    className="form-control text-center"
                    placeholder="Nhập tùy chọn trả lời"
                    rows="5"
                    style={{
                      paddingTop: "2rem",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      resize: "none",
                      lineHeight: "1.5",
                    }}
                  ></textarea>

                  <button
                    className="btn btn-sm position-absolute p-1 rounded border-primary text-primary shadow-sm bg-transparent"
                    style={{
                      fontSize: "0.75rem",
                      width: "24px",
                      height: "24px",
                      border: "1px solid",
                      opacity: "0.8",
                      top: "0px",
                      right: "7px",
                      zIndex: 10,
                    }}
                  >
                    ✔
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-start mt-4">
                <button className="btn btn-outline-dark me-2">
                  Câu trả lời đúng duy nhất
                </button>
                <button className="btn btn-outline-secondary">
                  Nhiều câu trả lời đúng
                </button>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button className="btn btn-primary">Lưu câu hỏi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
