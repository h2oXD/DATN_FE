import { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaCoins,
  FaBook,
  FaTrophy,
  FaMoneyBillWave,
  FaExclamationTriangle,
} from "react-icons/fa";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";

export default function WalletLecturer() {
  const [amount, setAmount] = useState(500000);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axiosClient.get("/user/wallets");
        console.log("API Response:", response.data);

        if (response.data.status === "success") {
          setBalance(response.data.wallet.balance);
          const transactions = response.data.wallet.transaction_history;
          setHistory(Array.isArray(transactions) ? transactions : []);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Không tìm thấy ví của người dùng này.");
        } else {
          console.error("Lỗi khi lấy dữ liệu ví:", error);
        }
      }
    };

    fetchWallet();
  }, []);

  const handleWithdraw = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axiosClient.post("/user/wallets/withdraw", {
        amount,
        bank_code: "VCB",
        bank_nameUser: "Nguyen Van A",
        bank_number: 123456789,
      });
      toast("Chúc mừng bạn đã rút tiền thành công!");
      setBalance(balance - amount);
      setHistory([
        ...history,
        { id: history.length + 1, amount, date: "Vừa xong", status: "success" },
      ]);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError(error.response.data.message);
        } else if (error.response.status === 403) {
          setError("Chỉ tài khoản giảng viên mới có thể rút tiền.");
        } else {
          console.error(error.response?.data || error.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="fw-bold text-primary mb-3">Rút Tiền</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm border-0">
            <div className="d-flex align-items-center">
              <FaUserCircle size={40} className="text-primary me-2" />
              <h5 className="fw-bold mb-0">Giảng Viên: Nguyễn Ngọc Khánh</h5>
            </div>
            <p className="mt-0 mx-6 fw-bold text-primary">
              <FaCoins className="text-warning me-1" />{" "}
              {balance.toLocaleString()} VNĐ
            </p>
            <hr />
            <h6 className="fw-bold">Thống kê doanh thu</h6>
            <ul className="list-unstyled">
              <li>
                <FaBook className="text-secondary me-2" />
                Khóa học bán được: <strong>20</strong>
              </li>
              <li>
                <FaMoneyBillWave className="text-secondary me-2" />
                Doanh thu tháng: <strong>5.000.000 VNĐ</strong>
              </li>
              <li>
                <FaTrophy className="text-secondary me-2" />
                Doanh thu tổng: <strong>50.000.000 VNĐ</strong>
              </li>
            </ul>
            <p className="text-danger small text-center d-flex align-items-center justify-content-center">
              <FaExclamationTriangle className="me-1" /> Lưu ý: Tiền chỉ có thể
              rút khi số dư trên 50.000 VNĐ.
            </p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0">
            <h5 className="fw-bold text-center">Rút tiền từ tài khoản</h5>
            <p className="text-center text-muted">Chọn số tiền rút</p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {[50000, 100000, 500000, 1000000].map((amt) => (
                <button
                  key={amt}
                  className={`btn btn-outline-primary rounded-pill px-3 fw-bold ${
                    amount === amt ? "active" : ""
                  }`}
                  onClick={() => setAmount(amt)}
                >
                  {amt.toLocaleString()} VNĐ
                </button>
              ))}
            </div>
            <input
              type="number"
              className="form-control mt-3 rounded"
              placeholder="Nhập số tiền muốn rút"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            {error && <p className="text-danger text-center mt-2">{error}</p>}
            <button
              className="btn btn-primary w-100 mt-3 rounded-pill fw-bold shadow-sm"
              onClick={handleWithdraw}
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Rút tiền"}
            </button>
          </div>
        </div>
      </div>

      <div className="card mt-4 p-3 shadow-sm border-0">
        <h5 className="fw-bold text-center">Lịch sử rút tiền</h5>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Số tiền rút</th>
              <th>Ngày rút</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.amount.toLocaleString()} VNĐ</td>
                <td>{item.date}</td>
                <td>
                  <span
                    className={`badge ${
                      item.status === "success" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {item.status === "success" ? "Thành công" : "Thất bại"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
