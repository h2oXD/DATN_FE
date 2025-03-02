import { notification } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";
import VNpay from "../../../assets/images/png/image.png";

export default function BuyCourse() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("vnpay");
  const [isPaying, setIsPaying] = useState(false);
  const nav = useNavigate();
  const [voucher_id, setVoucherId] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

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
  const applyVoucher = () => {
    if (!voucher_id) {
      notification.error({
        message: "Lỗi áp dụng voucher",
        description: "Vui lòng nhập mã voucher!",
        duration: 1,
      });
      return;
    }

    // Kiểm tra voucher có hợp lệ hay không
    axiosClient
      .get(`/user/voucher/${voucher_id}`)
      .then((response) => {
        const voucher = response.data.voucher;
        if (!voucher || !voucher.is_active) {
          throw new Error("Voucher không khả dụng hoặc đã hết hạn.");
        }

        // Nếu hợp lệ, tiếp tục gửi request để sử dụng voucher
        return axiosClient.post(
          `/user/course/${course_id}/voucher/${voucher_id}/uses`
        );
      })
      .then((response) => {
        notification.success({
          message: "Áp dụng voucher thành công",
          description: response.data.message,
          duration: 1.5,
        });

        // Cập nhật giảm giá dựa trên loại voucher
        axiosClient.get(`/user/voucher/${voucher_id}`).then((res) => {
          const voucherDetail = res.data.voucher;
          let discountValue = 0;

          if (voucherDetail.type === "percent") {
            discountValue =
              (course?.price_sale || course?.price_regular) *
              (voucherDetail.discount_price / 100);
          } else {
            discountValue = voucherDetail.discount_price;
          }

          setDiscount(discountValue);
          console.log(discountValue);
          setVoucherApplied(true);
        });
      })
      .catch((error) => {
        notification.error({
          message: "Lỗi áp dụng voucher",
          description:
            error.response?.data?.message ||
            error.message ||
            "Có lỗi xảy ra khi áp dụng voucher!",
          duration: 1,
        });
      });
  };

  const getTotalPrice = () => {
    const basePrice = course?.price_sale || course?.price_regular || 0;
    return Math.max(0, basePrice - discount);
  };

  const handlePayment = () => {
    const amount = getTotalPrice();
    if (!amount || amount <= 0) {
      notification.error({
        message: "Lỗi thanh toán",
        description: "Giá không hợp lệ!",
        duration: 1,
      });
      return;
    }

    if (paymentMethod === "wallet" && walletBalance < amount) {
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
      .post(paymentEndpoint, { amount })
      .then((response) => {
        if (paymentMethod === "wallet") {
          notification.success({
            message: "Thanh toán thành công",
            description: response.data.message,
            duration: 1.5,
          });
          setWalletBalance(walletBalance - amount);
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
        <div className="mb-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập mã giảm giá"
              value={voucher_id}
              onChange={(e) => setVoucherId(e.target.value)}
              style={{ flex: "3", height: "40px" }}
            />
            <button className="btn btn-primary ms-1" onClick={applyVoucher}>
              Áp dụng
            </button>
          </div>
        </div>
        {paymentMethod === "wallet" && (
          <p className="d-flex justify-content-between">
            <span>Số dư hiện tại:</span>{" "}
            <span className="fw-bold">
              {walletBalance?.toLocaleString("vi-VN") || "-"} đ
            </span>
          </p>
        )}
        <p className="d-flex justify-content-between">
          <span>Giá gốc:</span>{" "}
          <span className="fw-bold">
            {parseInt(course.price_regular, 10).toLocaleString("vi-VN")} đ
          </span>
        </p>
        {course.price_sale && (
          <p className="d-flex justify-content-between">
            <span>Giá sale:</span>{" "}
            <span className="fw-bold">
              {parseInt(course.price_sale, 10).toLocaleString("vi-VN")} đ
            </span>
          </p>
        )}
        <p className="d-flex justify-content-between">
          <span>Tổng thanh toán:</span>
          <span className="fw-bold">
            {getTotalPrice().toLocaleString("vi-VN")}đ
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
