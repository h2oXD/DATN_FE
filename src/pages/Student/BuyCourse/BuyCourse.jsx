import { notification } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";
import VNpay from "../../../assets/images/png/image.png";
import { useVoucher } from "../../../contexts/VoucherContext";

export default function BuyCourse() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("vnpay");
  const [isPaying, setIsPaying] = useState(false);
  const nav = useNavigate();
  const { selectedVoucher } = useVoucher(); // Lấy voucher từ Context

  useEffect(() => {
    axiosClient
      .get(`/courses/${course_id}/public`)
      .then((response) => {
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

  useEffect(() => {
    if (paymentMethod === "wallet") {
      axiosClient
        .get("/user/wallets")
        .then((response) => {
          setWalletBalance(response.data.wallet.balance);
        })
        .catch((error) => console.error("Lỗi khi lấy số dư ví:", error));
    }
  }, [paymentMethod]);

  // Tính toán giá sau khi áp dụng voucher
  const originalPrice = course?.price_sale
    ? parseInt(course.price_sale, 10)
    : parseInt(course?.price_regular, 10);

  let finalPrice = originalPrice;
  if (selectedVoucher) {
    if (selectedVoucher.type === "percent") {
      finalPrice = originalPrice * (1 - selectedVoucher.discount_price / 100);
    } else {
      finalPrice = Math.max(0, originalPrice - selectedVoucher.discount_price);
    }
  }

  const handlePayment = () => {
    if (!finalPrice || finalPrice <= 0) {
      notification.error({
        message: "Lỗi thanh toán",
        description: "Giá không hợp lệ!",
        duration: 1,
      });
      return;
    }

    if (paymentMethod === "wallet" && walletBalance < finalPrice) {
      notification.error({
        message: "Lỗi thanh toán",
        description: "Số dư ví không đủ. Vui lòng nạp thêm tiền!",
        duration: 1,
      });
      return;
    }

    setIsPaying(true);
    const paymentEndpoint =
      paymentMethod === "wallet"
        ? `/user/courses/${course_id}/wallet-payment`
        : `/user/courses/${course_id}/create-payment`;

    axiosClient
      .post(paymentEndpoint, {
        amount: finalPrice,
        voucher_id: selectedVoucher?.id,
      })
      .then((response) => {
        if (paymentMethod === "wallet") {
          notification.success({
            message: "Thanh toán thành công",
            description: response.data.message,
            duration: 1.5,
          });
          setWalletBalance(walletBalance - finalPrice);
          nav("/student/MyCourse");
        } else {
          const paymentUrl = response.data?.payment_url;
          if (paymentUrl) {
            window.location.href = paymentUrl;
          }
        }
      })
      .catch((error) => {
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

  if (loading) return <p>Đang tải...</p>;
  if (!course) return <p>Không tìm thấy khóa học.</p>;

  const handleAddFunds = () => {
    nav("/student/walletStudent");
  };

  return (
    <div className="row bg-white p-2 shadow rounded">
      <div className="col-md-7 p-3 border-end">
        <h4 className="mb-3">Thông tin khóa học</h4>
        <div className="d-flex align-items-center">
          <img
            src={getImageUrl(course.thumbnail) ?? "/default-thumbnail.jpg"}
            alt={course.title}
            className="rounded"
            style={{ maxWidth: "190px", height: "120px" }}
          />
          <div className="px-1 py-1">
            <h4 className="mt-1 mb-1 text-truncate-line-2">{course.title}</h4>
            <small>
              By: {course.lecturer?.name || "Chưa cập nhật giảng viên"}
            </small>
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
            />{" "}
            VNPay
          </label>
          <label className="list-group-item d-flex align-items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="wallet"
              className="me-2"
              checked={paymentMethod === "wallet"}
              onChange={() => setPaymentMethod("wallet")}
            />
            Ví
          </label>
        </div>
      </div>

      <div className="col-md-5 p-3">
        <h4 className="mb-3">Chi tiết thanh toán</h4>

        {selectedVoucher && (
          <p className="alert alert-success">
            Đã áp dụng mã giảm giá: <strong>{selectedVoucher.code}</strong> -{" "}
            {selectedVoucher.type === "percent"
              ? `${selectedVoucher.discount_price}%`
              : `${selectedVoucher.discount_price.toLocaleString("vi-VN")} đ`}
          </p>
        )}
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
        <div className="mt-3">
          <span role="img" aria-label="pointer">
            👉
          </span>{" "}
          <Link to="/voucher" className="text-primary text-decoration-none">
            Xem danh sách mã giảm giá
          </Link>
        </div>

        {paymentMethod === "wallet" && (
          <p className="d-flex justify-content-between mt-3">
            <span>Số dư hiện tại:</span>{" "}
            <span className="fw-bold">
              {walletBalance?.toLocaleString("vi-VN") || "-"} đ
            </span>
          </p>
        )}

        <p className="d-flex justify-content-between mt-3">
          <span>Giá gốc:</span>
          <span className="fw-bold">
            {originalPrice.toLocaleString("vi-VN")} đ
          </span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Tổng thanh toán:</span>
          <span className="fw-bold">
            {finalPrice.toLocaleString("vi-VN")} đ
          </span>
        </p>

        <button
          className="btn btn-primary w-100 mb-2"
          onClick={handlePayment}
          disabled={isPaying}
        >
          {isPaying ? "Đang xử lý..." : "Thanh toán"}
        </button>

        {paymentMethod === "wallet" && (
          <button
            className="btn btn-outline-warning w-100"
            onClick={handleAddFunds}
          >
            Nạp thêm tiền
          </button>
        )}
      </div>
    </div>
  );
}
