export default function Chat() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar Contacts */}
      <div className="w-25 bg-light border-end p-3">
        <h3 className="fw-bold">Danh bạ</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm giảng viên..."
          />
        </div>
        <ul className="list-unstyled">
          <li className="py-2 d-flex align-items-center">
            <img
              src="../assets/images/avatar/avatar-1.jpg"
              alt="avatar"
              className="rounded-circle avatar-xl border-white border border-4 me-3"
            />
            <div>
              <h5 className="mb-0">Olivia</h5>
              <p className="text-muted mb-0">Giảng viên Toán học</p>
            </div>
          </li>
          <li className="py-2 d-flex align-items-center">
            <img
              src="../assets/images/avatar/avatar-2.jpg"
              alt="avatar"
              className="rounded-circle avatar-xl border-white border border-4 me-3"
            />
            <div>
              <h5 className="mb-0">John</h5>
              <p className="text-muted mb-0">Học viên Lập trình</p>
            </div>
          </li>
          <li className="py-2 d-flex align-items-center">
            <img
              src="../assets/images/avatar/avatar-3.jpg"
              alt="avatar"
              className="rounded-circle avatar-xl border-white border border-4 me-3"
            />
            <div>
              <h5 className="mb-0">Emma</h5>
              <p className="text-muted mb-0">Học viên Khoa học</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Chat Area */}
      <div className="d-flex flex-column w-75 bg-light">
        {/* Header Chat */}
        <div className="bg-primary text-white py-3 px-4 d-flex align-items-center">
          <img
            src="../assets/images/avatar/avatar-1.jpg"
            alt="avatar"
            className="rounded-circle avatar-md me-3"
          />
          <div>
            <h5 className="mb-0">Giảng viên Olivia</h5>
            <p className="mb-0 text-white-50">Trạng thái: Online</p>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-grow-1 p-4 overflow-auto d-flex flex-column chat-box-container">
          <div className="p-3 rounded bg-secondary text-white align-self-start mb-2 shadow-sm chat-box">
            Chào thầy, em có một câu hỏi về bài học hôm nay.
          </div>
          <div className="p-3 rounded bg-primary text-white align-self-end mb-2 shadow-sm chat-box">
            Chào em, em cứ hỏi nhé!
          </div>
          <div className="p-3 rounded bg-secondary text-white align-self-start mb-2 shadow-sm chat-box">
            Thầy có thể giải thích lại phần thuật toán sắp xếp không ạ?
          </div>
          <div className="p-3 rounded bg-primary text-white align-self-end mb-2 shadow-sm chat-box">
            Được chứ! Thuật toán sắp xếp hoạt động như sau...
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-top p-3 d-flex align-items-center bg-white">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Nhập tin nhắn..."
          />
          <button className="btn btn-light me-2">
            <i className="bi bi-emoji-smile fs-5"></i>
          </button>

          {/* Emoji Picker (Tạm tắt để không có logic tương tác) */}
          {/* <div className="position-absolute bottom-100 start-0">
            <Picker />
          </div> */}

          <button className="btn btn-light me-2">
            <i className="bi bi-paperclip fs-5"></i>
          </button>

          {/* File Attachment (Tạm tắt) */}
          {/* <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          /> */}

          <button className="btn btn-primary">
            <i className="bi bi-send fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
