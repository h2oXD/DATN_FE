import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notification } from "antd";
import axiosClient from "../../../api/axios";
import VNpay from "../../../assets/images/png/image.png";
import { getImageUrl } from "../../../api/common";

export default function BuyCourse() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [lecturer, setLecturer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("vnpay");
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    axiosClient
      .get(`/courses/${course_id}/public`)
      .then((response) => {
        // setCourse(response.data.data.course);
        // setLecturer(response.data.data.lecturer);
        console.log("Dữ liệu API nhận được:", response.data.data);
        const { course, instructor, average_rating } = response.data.data;
        setCourse({
          ...course,
          lecturer: instructor || {},
          average_rating,
        });
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error))
      .finally(() => setLoading(false));
  }, [course_id]);

  const handlePayment = () => {
    const amount = course.price_sale
      ? parseInt(course.price_sale, 10)
      : parseInt(course.price_regular, 10);

    if (!amount || amount <= 0) {
      notification.error({
        message: "Lỗi thanh toán",
        description: "Giá không hợp lệ!",
        duration: 1,
      });
      return;
    }

    setIsPaying(true);
    axiosClient
      .post(`/user/courses/${course_id}/create-payment`, { amount })
      .then((response) => {
        const paymentUrl = response.data?.payment_url;
        if (!paymentUrl || typeof paymentUrl !== "string") {
          notification.error({
            message: "Lỗi thanh toán",
            description: "Không nhận được đường dẫn thanh toán hợp lệ!",
            duration: 1,
          });
          return;
        }
        window.location.href = paymentUrl;
      })
      .catch((error) => {
        console.error("Lỗi khi thanh toán:", error);
        notification.error({
          message: "Lỗi thanh toán",
          description:
            error.response?.data?.error ||
            "Có lỗi xảy ra khi xử lý thanh toán!",
          duration: 1,
        });
      })
      .finally(() => setIsPaying(false));
  };

  if (loading) {
    return <p>Đang tải...</p>;
  }

  if (!course) {
    return <p>Không tìm thấy khóa học.</p>;
  }

  return (
    <div className="row bg-white p-2 shadow rounded">
      <div className="col-md-7 p-3 border-end">
        <h4 className="mb-3">Thông tin khóa học</h4>
        <div className="d-flex align-items-center">
          <img
            src={
              course.thumbnail
                ? getImageUrl(course.thumbnail)
                : "/default-thumbnail.jpg"
            }
            className="rounded"
            alt="Khóa học"
            style={{ maxWidth: "190px", height: "120px" }}
          />
          <div className="ms-2">
            <h4 className="mb-1">{course.title}</h4>
            <small className="fs-18">
              By: {course.lecturer?.name || "Chưa cập nhật giảng viên"}
            </small>
            <div className="d-flex align-items-center mt-1">
              <span className="text-muted">{lecturer?.name}</span>
            </div>
            <div className="lh-1 mt-2 text-warning">
              {course.average_rating} ★
            </div>
          </div>
        </div>

        <h4 className="mt-4">Chọn phương thức thanh toán</h4>
        <div className="list-group">
          <label className="list-group-item d-flex align-items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="vnpay"
              className="me-2"
              checked={paymentMethod === "vnpay"}
              onChange={() => setPaymentMethod("vnpay")}
            />
            <img
              src={VNpay}
              className="me-2"
              style={{ maxWidth: "50px", height: "30px" }}
            />
            VNPay
          </label>
          <label className="list-group-item d-flex align-items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              className="me-2"
              // disabled
            />
            Ví (Chưa hỗ trợ)
          </label>
        </div>
      </div>

      <div className="col-md-5 p-3">
        <h4 className="mb-3">Chi tiết thanh toán</h4>
        <div className="mb-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập mã giảm giá"
              style={{ flex: "3", height: "40px" }}
            />
            <button className="btn btn-primary ms-1">Áp dụng</button>
          </div>
        </div>
        <p className="d-flex justify-content-between">
          <span>Giá gốc:</span>{" "}
          <span className="fw-bold">
            {parseInt(course.price_regular, 10).toLocaleString("vi-VN")} đ
          </span>
        </p>
        {course.price_sale ? (
          <p className="d-flex justify-content-between">
            <span>Giá sale:</span>{" "}
            <span className="fw-bold">
              {parseInt(course.price_sale, 10).toLocaleString("vi-VN")} đ
            </span>
          </p>
        ) : null}
        <p className="d-flex justify-content-between">
          <span>Tổng thanh toán:</span>
          <span className="fw-bold">
            {(course.price_sale || course.price_regular) &&
              parseInt(
                course.price_sale || course.price_regular,
                10
              ).toLocaleString("vi-VN")}{" "}
            đ
          </span>
        </p>
        <button
          className="btn btn-primary w-100 mb-2"
          onClick={handlePayment}
          disabled={isPaying}
        >
          {isPaying ? "Đang xử lý..." : "Thanh toán"}
        </button>
        <button className="btn btn-outline-warning w-100">Nạp thêm tiền</button>
      </div>
    </div>
  );
}
