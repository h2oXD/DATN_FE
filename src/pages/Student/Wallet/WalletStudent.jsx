import { Modal, Skeleton } from "antd";
import { useContext, useEffect, useState } from "react";
import {
  FaBolt,
  FaClock,
  FaCoins,
  FaInfoCircle,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUserCircle,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../../api/axios";
import { StoreContext } from "../../../contexts/StoreProvider";

export default function WalletStudent() {
  const [wallet, setWallet] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useContext(StoreContext);

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    performDeposit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeposit = () => {
    if (selectedAmount < 50000) {
      setError("Số tiền nạp tối thiểu là 50.000 VND");
      return;
    }
    showModal();
  };

  const performDeposit = () => {
    axiosClient
      .post("/user/wallets/deposit", { amount: selectedAmount })
      .then((response) => {
        window.location.href = response.data.payment_url;
      })
      .catch((error) => {
        setError("Lỗi khi nạp tiền: " + error.response.data.message);
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") {
      toast.success("Nạp tiền thành công!", { position: "top-right" });
      params.delete("status");
      const newUrl =
        params.toString() === ""
          ? window.location.pathname
          : `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  if (!wallet) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="row p-2">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm text-center border-0 bg-light">
            <div className="d-flex flex-column align-items-center text-center mb-4">
              <div className="bg-info text-white p-4 rounded shadow-sm text-center w-100">
                <div className="d-flex align-items-center mb-2">
                  <FaUserCircle className="text-black me-2" size={50} />
                  <div className="text-start">
                    <h4 className="fw-bold mb-0 text-black">{user.name}</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-white text-dark p-2 rounded shadow-sm">
                  <h6 className="mb-0">Số dư khả dụng</h6>
                  <h4 className="text-success fw-bold mb-0">
                    {wallet.balance.toLocaleString("vi-VN")} đ
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-start">
              <p>
                <FaInfoCircle className="text-warning me-2" />
                <strong>Số tiền tối thiểu mỗi lần nạp:</strong> 50.000 VND
              </p>
              <p>
                <FaClock className="text-primary me-2" />
                <strong>Thời gian xử lý nhanh:</strong> Chỉ từ 1 - 5 phút
              </p>
              <p>
                <FaMoneyBillWave className="text-success me-2" />
                <strong>Miễn phí giao dịch:</strong> Không mất phí khi nạp tiền
              </p>
              <p>
                <FaShieldAlt className="text-danger me-2" />
                <strong>Bảo mật cao:</strong> Mọi giao dịch đều được mã hóa an
                toàn
              </p>
              <p>
                <FaBolt className="text-warning me-2" />
                <strong>Giao dịch nhanh chóng:</strong> Tiền sẽ được nạp ngay
                sau khi xử lý
              </p>
            </div>
            <div className="alert alert-warning mt-1">
              <span className="me-2">⚠️</span>
              <span className="text-dark">
                <strong>Lưu ý:</strong> Chúng tôi không hoàn tiền đối với khoản
                tiền đã nạp. Bạn là người quyết định các hóa đơn sẽ thanh toán
                sử dụng số dư đã nạp.
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Chọn mệnh giá --> */}
        <div className="col-md-8">
          <div className="card p-4">
            <p>
              Tại đây bạn có thể nạp tiền vào tài khoản cá nhân để sử dụng thanh
              toán cho các lần chi trả mua khóa học.
            </p>
            <h4>Chọn mệnh giá</h4>
            <div className="row g-3">
              <div className="col-md-4">
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => handleAmountClick(50000)}
                >
                  <FaCoins className="me-2 text-warning" />
                  50.000 VND
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-primary fw-bold w-100"
                  onClick={() => handleAmountClick(100000)}
                >
                  <FaCoins className="me-2 text-warning" />
                  100.000 VND
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-primary fw-bold w-100"
                  onClick={() => handleAmountClick(200000)}
                >
                  <FaCoins className="me-2 text-warning" />
                  200.000 VND
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-primary fw-bold w-100"
                  onClick={() => handleAmountClick(300000)}
                >
                  <FaCoins className="me-2 text-warning" />
                  300.000 VND
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-primary fw-bold w-100"
                  onClick={() => handleAmountClick(500000)}
                >
                  <FaCoins className="me-2 text-warning" />
                  500.000 VND
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-outline-primary fw-bold w-100"
                  onClick={() => handleAmountClick(1000000)}
                >
                  <FaCoins className="me-2 text-warning" />
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
      </div>

      <Modal
        title="Xác nhận nạp tiền"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Bạn có chắc chắn muốn nạp {selectedAmount.toLocaleString("vi-VN")} VND
          không?
        </p>
      </Modal>
      <ToastContainer />
    </>
  );
}
