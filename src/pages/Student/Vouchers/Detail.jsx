import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiTicketBold, PiClipboardBold, PiInfoBold } from "react-icons/pi";
import axiosClient from "../../../api/axios";

const VoucherDetail = () => {
  const { voucher_id } = useParams();
  const [voucher, setVoucher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copyStatus, setCopyStatus] = useState(""); // Trạng thái thông báo sao chép

  useEffect(() => {
    axiosClient
      .get(`/user/voucher/${voucher_id}`)
      .then((response) => {
        setVoucher(response.data.voucher);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("Không tìm thấy voucher.");
        } else {
          setError("Không thể tải dữ liệu voucher.");
        }
        setLoading(false);
      });
  }, [voucher_id]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(voucher.code);
      setCopyStatus("Sao chép thành công!");
    } catch (error) {
      console.error("Lỗi sao chép mã:", error);
    }

    // Ẩn thông báo sau 3 giây
    setTimeout(() => setCopyStatus(""), 3000);
  };

  if (loading) {
    return <div className="text-center mt-5">Đang tải...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center mt-5">{error}</div>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg border-0 rounded-4 overflow-hidden"
        style={{ maxWidth: "500px" }}
      >
        <div
          className="card-header text-white text-center py-4"
          style={{
            background: "linear-gradient(135deg, #5ec4ff, #90e0ef)",
            color: "#05445E",
          }}
        >
          <h2 className="fw-bold d-flex align-items-center justify-content-center">
            <PiTicketBold className="me-2" /> Chi Tiết Voucher{" "}
            <PiTicketBold className="ms-2" />
          </h2>
        </div>

        <div className="card-body text-center p-4">
          <h4 className="text-primary fw-bold mb-3">
            Mã:{" "}
            <span className="badge bg-warning text-dark fs-5">
              {voucher.code}
            </span>
          </h4>
          <p className="fs-5 fw-semibold text-dark">{voucher.description}</p>
          <p className="text-muted fw-medium">
            Hạn sử dụng:{" "}
            <strong className="text-dark">
              {new Date(voucher.end_time).toLocaleDateString()}
            </strong>
          </p>

          <div
            className="alert alert-info d-flex align-items-center rounded-3"
            role="alert"
          >
            <PiInfoBold className="me-2 text-info fs-4" />
            <span>
              Voucher này có thể áp dụng cho tất cả các khóa học trên hệ thống.
            </span>
          </div>

          {/* Nút sao chép */}
          <button
            className="btn btn-lg w-100 mt-3 d-flex align-items-center justify-content-center shadow-sm"
            style={{
              background: "linear-gradient(135deg, #5ec4ff, #90e0ef)",
              color: "#05445E",
              border: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.opacity = 0.9)}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
            onClick={handleCopy}
          >
            <PiClipboardBold className="me-2 fs-5" /> Sao chép mã
          </button>

          {/* Thông báo sao chép */}
          {copyStatus && (
            <div className="mt-3 alert alert-success p-2">{copyStatus}</div>
          )}
        </div>

        <div className="card-footer text-center text-muted py-3 bg-light">
          <small className="fw-light">
            Điều kiện áp dụng có thể thay đổi. Vui lòng kiểm tra trước khi sử
            dụng.
          </small>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetail;
