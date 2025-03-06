import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

export default function Voucher() {
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await axiosClient.get("/user/vouchers");
        setVouchers(response.data.vouchers);
      } catch (err) {
        setError("Không thể tải danh sách voucher.");
      } finally {
        setLoading(false);
      }
    };
    fetchVouchers();
  }, []);

  const handleUseVoucher = (voucher) => {
    notification.success({
      message: "Áp dụng voucher thành công",
      description: `Mã giảm giá "${voucher.code}" đã được chọn.`,
      duration: 1.5,
    });

    // Chuyển hướng và truyền dữ liệu voucher qua state của router
    navigate(`/buycourse/${voucher.course_id}`, { state: { voucher } });
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 bg-light p-4">
      <h2 className="fw-bold mb-4">Mã giảm giá HOT nhất</h2>
      {loading && <p>Đang tải...</p>}
      {error && <p className="text-danger">{error}</p>}
      {vouchers.map((voucher) => (
        <div
          key={voucher.id}
          className="voucher-card bg-white shadow-lg border d-flex p-3 position-relative w-100 m-2"
          style={{ maxWidth: "650px" }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center me-3 border-end pe-3 w-20">
            <p className="fw-bold fs-3 mt-2 text-center">{voucher.code}</p>
          </div>
          <div className="flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <p className="text-secondary fw-bold mb-1">
                Giảm{" "}
                <span className="text-primary fs-3">
                  {voucher.type === "percent"
                    ? `${voucher.discount_price}%`
                    : voucher.discount_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                </span>{" "}
                /khóa
              </p>

              <p className="text-muted mb-1">{voucher.description}</p>
              <p className="text-muted fst-italic mb-1">
                Còn <span className="fw-semibold">{voucher.count}</span> lượt sử
                dụng. Hết hạn:{" "}
                {new Date(voucher.end_time).toLocaleDateString("vi-VN")}.
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <button
                className="btn btn-light text-muted border px-3 py-1"
                style={{
                  fontSize: "0.875rem",
                  width: "auto",
                  minWidth: "120px",
                }}
                disabled
              >
                <span className="fst-italic">Dành cho mọi người</span>
              </button>
              <div className="ms-3">
                <button
                  className="btn btn-primary px-4 py-2"
                  onClick={() => handleUseVoucher(voucher)}
                >
                  Sử dụng ngay
                </button>
              </div>
            </div>
          </div>

          <div className="voucher-cut left"></div>
          <div className="voucher-cut right"></div>
        </div>
      ))}

      <style>
        {`
          .voucher-card {
            border-radius: 16px;
            position: relative;
            overflow: visible;
            background-color: white;
            z-index: 1;
          }
          .voucher-cut {
            z-index: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 45px;
            background-color: #F1F5F9;
            border-radius: 50%;
          }
          .voucher-cut.left {
            left: -15px;
          }
          .voucher-cut.right {
            right: -15px;
          }
        `}
      </style>
    </div>
  );
}
