export default function CourseReviews() {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2>Tên Khóa Học: Lập Trình Web Căn Bản</h2>
          <h4>Giảng viên: Nguyễn Văn A</h4>
          {/* <img
            src="course-image.jpg"
            alt="Khóa học"
            className="img-fluid rounded"
            style={{ maxWidth: "300px" }}
          /> */}
        </div>

        <div className="mb-4">
          <h3>
            Đánh giá: <span className="text-warning">4.5/5</span>
          </h3>
          <div>
            {Array(5)
              .fill()
              .map((_, index) => (
                <span key={index} className="text-warning">
                  ⭐
                </span>
              ))}
          </div>
        </div>

        <div
          className="review-card border rounded p-3 mb-3 shadow-sm bg-light transition-transform transform hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: "#f9f9f9",
          }}
        >
          <h4>Nguyễn Văn B</h4>
          <div className="text-muted">Ngày đánh giá: 10/02/2025</div>
          <p>Nội dung: Khóa học rất hữu ích, phương pháp giảng dạy rõ ràng.</p>
          <span className="text-primary" style={{ cursor: "pointer" }}>
            Thích
          </span>{" "}
          <span className="text-muted">(0 bình luận)</span>
        </div>

        <div
          className="review-card border rounded p-3 mb-3 shadow-sm bg-light transition-transform transform hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: "#f9f9f9",
          }}
        >
          <h4>Trần Thị C</h4>
          <div className="text-muted">Ngày đánh giá: 09/02/2025</div>
          <p>Nội dung: Tôi không thể hiểu bài giảng về JavaScript.</p>
          <span className="text-primary" style={{ cursor: "pointer" }}>
            Thích
          </span>{" "}
          <span className="text-muted">(1 bình luận)</span>
        </div>

        {/* Thêm nhiều đánh giá ở đây */}
      </div>
    </>
  );
}
