import {
  BiUserCircle,
  BiSmile,
  BiPaperclip,
  BiSend,
  BiSearch,
  // BiCircleFill,
} from "react-icons/bi";

export default function Chat() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar Contacts */}
      <div className="w-25 bg-white border-end p-3 shadow-sm">
        <h3 className="fw-bold mb-3">Danh bạ</h3>
        <div className="mb-3 position-relative">
          <input
            type="text"
            className="form-control rounded-pill px-3"
            placeholder="Tìm kiếm giảng viên..."
          />
          <BiSearch
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
            size={20}
          />
        </div>
        <ul className="list-unstyled">
          {[
            { name: "Olivia", role: "Giảng viên Toán học" },
            { name: "John", role: "Học viên Lập trình" },
            { name: "Emma", role: "Học viên Khoa học" },
          ].map((contact, index) => (
            <li
              key={index}
              className="py-2 d-flex align-items-center px-2 rounded hover-bg"
            >
              <BiUserCircle className="text-primary me-3" size={50} />
              <div>
                <h6 className="mb-0 fw-bold">{contact.name}</h6>
                <p className="text-muted mb-0 small">{contact.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="d-flex flex-column w-75 bg-light">
        {/* Header Chat */}
        <div className="bg-primary text-white py-3 px-4 d-flex align-items-center shadow-sm">
          <BiUserCircle className="text-white me-3" size={45} />
          <div>
            <h6 className="mb-0 fw-bold">Giảng viên Olivia</h6>
            <p className="mb-0 text-white-50 small d-flex align-items-center">
              {/* <BiCircleFill className="text-success me-1" size={10} /> Online */}
            </p>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-grow-1 p-4 overflow-auto d-flex flex-column chat-box-container">
          <div className="p-3 rounded bg-secondary text-white align-self-start mb-2 shadow-sm">
            Chào thầy, em có một câu hỏi về bài học hôm nay.
          </div>
          <div className="p-3 rounded bg-primary text-white align-self-end mb-2 shadow-sm">
            Chào em, em cứ hỏi nhé!
          </div>
          <div className="p-3 rounded bg-secondary text-white align-self-start mb-2 shadow-sm">
            Thầy có thể giải thích lại phần thuật toán sắp xếp không ạ?
          </div>
          <div className="p-3 rounded bg-primary text-white align-self-end mb-2 shadow-sm">
            Được chứ! Thuật toán sắp xếp hoạt động như sau...
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-top p-3 d-flex align-items-center bg-white shadow-sm">
          <input
            type="text"
            className="form-control rounded-pill me-2 px-3"
            placeholder="Nhập tin nhắn..."
          />
          <button className="btn btn-light me-2 rounded-circle">
            <BiSmile className="fs-5" />
          </button>
          <button className="btn btn-light me-2 rounded-circle">
            <BiPaperclip className="fs-5" />
          </button>
          <button className="btn btn-primary rounded-circle">
            <BiSend className="fs-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
