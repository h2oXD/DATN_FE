import { FaLock, FaLockOpen } from "react-icons/fa";

export default function Course() {
  const courseContent = [
    {
      title: "1. Giới thiệu",
      progress: 50,
      videos: [
        {
          title: "1.1. Giới thiệu khóa học",
          time: "1:03",
          status: "completed",
        },
        { title: "1.2. Tài liệu học tập", time: "2:00", status: "completed" },
        {
          title: "1.3. Biến và nhập xuất dữ liệu",
          time: "7:34",
          status: "locked",
        },
        {
          title: "1.4. Bài tập về biến và nhập xuất dữ liệu",
          time: "2:00",
          status: "locked",
        },
      ],
    },
    {
      title: "2. Cấu trúc điều kiện vòng lặp",
      progress: 30,
      videos: [
        { title: "2.1. Cấu trúc điều kiện", time: "5:30", status: "completed" },
        { title: "2.2. Vòng lặp for", time: "4:15", status: "locked" },
        { title: "2.3. Vòng lặp while", time: "3:50", status: "locked" },
      ],
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand ms-3" href="#">
            Lập trình C++ cơ bản, nâng cao
          </a>
        </nav>
      </div>
      <div className="row">
        {/* Phần Video */}
        <div className="col-md-9 p-4">
          <div
            className="ratio ratio-16x9"
            style={{ height: "500px", width: "1000px" }}
          >
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h3 className="mb-0">Giới thiệu khóa học</h3>
            <button className="btn btn-primary">+ Thêm ghi chú tại 0:00</button>
          </div>
          <p>Cập nhật tháng 11/30/2024</p>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary">Bài Trước</button>
            <button className="btn btn-primary">Bài Tiếp Theo</button>
          </div>
        </div>

        {/* Phần Sidebar có thanh cuộn */}
        <div
          className="col-md-3 bg-primary-subtle p-3 border rounded"
          style={{
            maxHeight: "80vh",
            overflowY: "scroll",
          }}
        >
          <h3 className="text-dark fw-bold">Nội dung khóa học</h3>
          <ul className="list-group">
            {courseContent.map((section, sectionIndex) => (
              <li
                className="list-group-item bg-transparent border-0"
                key={sectionIndex}
              >
                <strong className="text-dark">{section.title}</strong>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${section.progress}%` }}
                    aria-valuenow={section.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {section.progress}%
                  </div>
                </div>
                <ul className="list-unstyled ps-3 mt-2">
                  {section.videos.map((video, videoIndex) => (
                    <li
                      key={videoIndex}
                      className="video-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"
                      style={{
                        cursor: "pointer",
                        padding: "8px",
                        borderRadius: "5px",
                      }}
                    >
                      <span>
                        {video.title} ({video.time})
                      </span>
                      {video.status === "completed" ? (
                        <FaLockOpen className="text-secondary ms-2" />
                      ) : (
                        <FaLock className="text-secondary ms-2" />
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
