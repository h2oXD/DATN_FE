import { useEffect } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { message, Spin } from "antd";
import axiosClient from "../../../api/axios";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const { course_id } = useParams(); // Lấy course_id từ URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const params = Object.fromEntries(searchParams.entries()); // Lấy tất cả query params
        const response = await axiosClient.get(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/user/courses/${course_id}/payment-callback`,
          { params } // Gửi query params lên API
        );

        if (response.status === 200) {
          message.success("Thanh toán thành công! Đang chuyển hướng...");
          setTimeout(() => navigate("/student/home"), 2000);
        } else {
          message.error("Thanh toán thất bại. Vui lòng thử lại!");
          setTimeout(() => navigate("/checkout"), 2000);
        }
      } catch (error) {
        message.error("Có lỗi xảy ra! Vui lòng thử lại.");
        setTimeout(() => navigate("/checkout"), 2000);
      }
    };

    fetchPaymentStatus();
  }, [searchParams, navigate, course_id]);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <Spin size="large" />
      <p>Đang xử lý thanh toán...</p>
    </div>
  );
};

export default PaymentCallback;
