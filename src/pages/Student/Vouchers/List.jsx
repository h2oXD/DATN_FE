import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  PiTicketBold,
  PiClipboardBold,
  PiCheckCircleBold,
  PiXCircleBold,
  PiConfettiBold,
  PiClockCounterClockwiseBold,
} from "react-icons/pi";
import axiosClient from "../../../api/axios";

const VoucherPage = () => {
  const navigate = useNavigate();
  const [vouchers, setVouchers] = useState([]);
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    axiosClient
      .get("/user/vouchers")
      .then((response) => {
        setVouchers(response.data.vouchers);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách voucher:", error);
      });
  }, []);

  const handleCheckVoucher = () => {
    const foundVoucher = vouchers.find(
      (voucher) => voucher.code.toUpperCase() === inputCode.toUpperCase()
    );
    if (foundVoucher) {
      setMessage(
        <span className="text-success">
          <PiCheckCircleBold className="me-2" />
          Mã hợp lệ: {foundVoucher.description} (HSD:{" "}
          {new Date(foundVoucher.end_time).toLocaleDateString("vi-VN")})
        </span>
      );
    } else {
      setMessage(
        <span className="text-danger">
          <PiXCircleBold className="me-2" />
          Mã không hợp lệ hoặc đã hết hạn.
        </span>
      );
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopySuccess(`Đã sao chép mã: ${code}`);
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch((err) => {
        console.error("Lỗi sao chép mã:", err);
      });
  };

  return (
    <div className="container mt-4 bg-light p-4 rounded shadow">
      <div className="text-center mb-4">
        <div className="d-flex justify-content-start">
          <button
            className="btn btn-outline-primary d-flex align-items-center"
            onClick={() => navigate("/student/course/voucher/history")}
          >
            <PiClockCounterClockwiseBold className="me-2" /> Xem lịch sử sử dụng
          </button>
        </div>
        <h2
          className="fw-bold d-inline-block px-4 py-3 rounded-3 mt-3"
          style={{
            background: "linear-gradient(135deg, #5ec4ff, #90e0ef)",
            color: "#05445E",
          }}
        >
          <PiConfettiBold className="me-2" /> Ưu Đãi Đặc Biệt Của Bạn{" "}
          <PiConfettiBold className="ms-2" />
        </h2>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-md-6">
          <div className="input-group mb-3 shadow-sm">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Nhập mã voucher"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              style={{ borderRadius: "8px 0 0 8px" }}
            />
            <button
              className="btn text-black"
              type="button"
              onClick={handleCheckVoucher}
              style={{
                background: "linear-gradient(135deg, #5ec4ff, #90e0ef)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              Kiểm tra
            </button>
          </div>
          {message && <p className="text-center fw-bold mt-2">{message}</p>}
          {copySuccess && (
            <p className="text-center text-success fw-bold mt-2">
              {copySuccess}
            </p>
          )}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {vouchers.map((voucher) => (
          <div className="col" key={voucher.id}>
            <div
              className="card shadow-sm border-0 rounded-3 overflow-hidden text-center"
              style={{ transition: "transform 0.2s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div
                className="py-3 text-black"
                onClick={() =>
                  navigate(`/student/course/voucher/detail/${voucher.id}`)
                }
                style={{
                  background: "linear-gradient(135deg, #5ec4ff, #90e0ef)",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <PiTicketBold className="me-2" /> {voucher.code}
              </div>

              <div className="card-body">
                <h5 className="card-title text-dark fw-bold">
                  {voucher.description}
                </h5>
                <p className="text-muted">
                  <small>
                    Hạn sử dụng:{" "}
                    {new Date(voucher.end_time).toLocaleDateString("vi-VN")}
                  </small>
                </p>
                <button
                  className="btn w-100 mt-2 d-flex align-items-center justify-content-center"
                  style={{
                    background: "linear-gradient(135deg, #5ec4ff, #90e0ef)",
                    color: "#05445E",
                    border: "none",
                    transition: "0.3s",
                  }}
                  onClick={() => handleCopyCode(voucher.code)}
                >
                  <PiClipboardBold className="me-2 fs-5" /> Sao chép mã
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherPage;
