import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../../api/axios";

export default function WalletStudent() {
  const [wallet, setWallet] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axiosClient
      .get("/user/wallets")
      .then((response) => {
        setWallet(response.data.wallet);
        console.log(response.data.wallet);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin ví:", error);
      });
  }, []);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setError("");
    document.getElementById("customAmount").value = "";
  };

  const handleCustomAmountChange = (event) => {
    const amount = Number(event.target.value);
    if (amount < 50000) {
      setError("Số tiền nạp tối thiểu là 50.000 VND");
    } else {
      setError("");
    }
    setSelectedAmount(amount);
  };

  const handleDeposit = () => {
    if (selectedAmount < 50000) {
      setError("Số tiền nạp tối thiểu là 50.000 VND");
      return;
    }

    axiosClient
      .post("/user/wallets/deposit", { amount: selectedAmount })
      .then((response) => {
        window.location.href = response.data.payment_url;
      })
      .catch((error) => {
        setError("Lỗi khi nạp tiền: " + error.response.data.message);
      });
  };

  if (!wallet) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="card">
        <div className="row p-3">
          <div className="col-md-4">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <div
                  className="avatar bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "50px", height: "50px", fontSize: "20px" }}
                >
                  N
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">{wallet.user_id}</h5>
                  <p className="mb-0 text-muted">
                    Số dư:
                    <strong>
                      {wallet.balance.toLocaleString("vi-VN")} VND
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-3 mt-3">
              <h4>Quy tắc nạp tiền</h4>
              <p>
                Số tiền tối thiểu mỗi lần nạp: <strong>50.000 VND</strong>
              </p>
            </div>
            <div
              className="alert alert-warning mt-3 d-flex align-items-center"
              role="alert"
            >
              <span className="me-2">⚠️</span>
              <span className="text-dark">
                <strong>Lưu ý:</strong> Chúng tôi không hoàn tiền đối với khoản
                tiền đã nạp. Bạn là người quyết định các hóa đơn sẽ thanh toán
                sử dụng số dư đã nạp.
              </span>
            </div>
          </div>
          {/* <!-- Chọn mệnh giá --> */}
          <div className="col-md-8">
            <div className="card p-4">
              <p>
                Tại đây bạn có thể nạp tiền vào tài khoản cá nhân để sử dụng
                thanh toán cho các lần chi trả mua khóa học.
              </p>
              <h4>Chọn mệnh giá</h4>
              <div className="row g-3">
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleAmountClick(50000)}
                  >
                    50.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleAmountClick(100000)}
                  >
                    100.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleAmountClick(200000)}
                  >
                    200.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleAmountClick(300000)}
                  >
                    300.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleAmountClick(500000)}
                  >
                    500.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleAmountClick(1000000)}
                  >
                    1.000.000 VND
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="customAmount" className="form-label">
                  Bạn cũng có thể nhập số tiền muốn nạp
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    id="customAmount"
                    className="form-control"
                    placeholder="Nhập số tiền mà bạn muốn nạp"
                    onChange={handleCustomAmountChange}
                  />
                  <span className="input-group-text">VND</span>
                </div>
                {error && <p className="text-danger mt-1">{error}</p>}
              </div>
              <div className="mt-3">
                <p>
                  <strong>Tổng:</strong>{" "}
                  <span id="totalAmount">
                    {selectedAmount.toLocaleString("vi-VN")}
                  </span>{" "}
                  VND
                </p>
                <button
                  className="btn btn-primary w-15"
                  disabled={selectedAmount < 50000}
                  onClick={handleDeposit}
                >
                  Nạp tiền
                </button>
                {message && <p className="text-success mt-1">{message}</p>}
              </div>
            </div>
          </div>
          {/* <!-- Lịch sử nạp tiền --> */}
          <div className="p-3 mt-4">
            <h4>Lịch sử nạp tiền</h4>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th className="text-center">Số tiền nạp</th>
                  <th className="text-center">Ngày nạp</th>
                  <th className="text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-center">5.000.000 VND</td>
                  <td className="text-center">23:08:57 30/11/2024</td>
                  <td className="text-center">
                    <span className="badge bg-success">Thành công</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
