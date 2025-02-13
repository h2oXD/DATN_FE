import { FaUserCircle } from "react-icons/fa";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function InstructorReviews() {
  const [liked, setLiked] = useState({});
  const toggleLike = (index) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container py-5">
      {/* Tiêu đề đẹp hơn */}
      <h2
        className="p-3 mb-4 text-center text-white rounded shadow"
        style={{
          background: "linear-gradient(to right, #007bff, #6610f2)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        Đánh giá Giảng viên
      </h2>

      {/* Chọn giảng viên */}
      <div className="mb-4">
        <select className="form-select w-auto">
          <option>Chọn giảng viên</option>
          <option>Thầy Nguyễn Văn A</option>
          <option>Thầy Trần Thị B</option>
          <option>Thầy Lê Văn C</option>
        </select>
      </div>

      {/* Thông tin giảng viên */}
      <div className="card shadow-sm p-4">
        <div className="d-flex align-items-center mb-3">
          <FaUserCircle className="text-primary fs-1 me-3" />
          <div className="d-flex flex-column">
            <h4 className="fw-semibold m-0">Nguyễn Văn A</h4>
            <p className="text-muted m-0">Giảng viên Khoa CNTT</p>
            <div className="text-warning fs-5">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Danh sách đánh giá */}
        <div className="border-top pt-3">
          {[
            {
              name: "Lê Thị Thùy Linh",
              date: "01/12/2024",
              rating: 5,
              review: "Giảng viên giảng rất dễ hiểu, truyền đạt tốt!",
            },
            {
              name: "Trần Văn Bảo",
              date: "10/11/2024",
              rating: 4,
              review: "Thầy dạy khá tốt nhưng hơi nhanh.",
            },
          ].map((review, index) => (
            <div key={index} className="border rounded p-3 bg-light mb-3">
              <div className="d-flex align-items-center mb-2">
                <FaUserCircle className="text-secondary fs-4 me-2" />
                <h5 className="fw-semibold m-0">{review.name}</h5>
              </div>
              <p className="text-muted small">{review.date}</p>
              <div className="text-warning fs-5">
                {[...Array(review.rating)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p className="mt-2">{review.review}</p>
              <div className="d-flex align-items-center gap-3 mt-3">
                <button className="btn btn-primary btn-sm">Phản hồi</button>
                <button
                  className="border-0 bg-transparent fs-4"
                  onClick={() => toggleLike(index)}
                >
                  {liked[index] ? (
                    <AiFillHeart className="text-danger" />
                  ) : (
                    <AiOutlineHeart className="text-danger" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
