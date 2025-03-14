import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../contexts/StoreProvider";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";

export default function WalletHome() {
  const { user } = useContext(StoreContext);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axiosClient.get("/user/wallets");
        setWallet(response.data.wallet);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Lỗi khi lấy dữ liệu ví";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchHistories = async () => {
      try {
        const response = await axiosClient.get(
          "/user/wallet/deposit-histories"
        );
        setHistories(response.data.histories);
      } catch (error) {
        console.error("Đã xảy ra lỗi khi lấy lịch sử gửi tiền!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistories();
  }, []);

  return (
    <>
      <div className="row p-2">
        <div className="col-md-3">
          <div className="card p-3 bg-info-subtle rounded-5 shadow-lg">
            <div className="d-flex align-items-center mb-2 ">
              <img
                src="../../../assets/images/avatar/avatar-1.jpg"
                alt="Avatar"
                className="rounded-circle me-3"
                style={{ width: "50px" }}
              />
              <h4 className="mb-0">
                {user.name}
                <i className="bi bi-patch-check-fill text-success ms-2"></i>
              </h4>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-white text-dark p-2 rounded shadow-sm">
              <h5 className="mb-0">Số dư</h5>
              <h4 className="fw-bold mb-0">
                {wallet?.balance.toLocaleString()} VNĐ
              </h4>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Link
                className="btn btn-success w-auto px-3"
                to={"/student/walletStudent"}
              >
                <i className="bi bi-wallet2 me-1"></i> Nạp tiền
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="card shadow-lg">
            <div className="p-3 mt-3">
              <h3 className="fw-bold">Lịch sử giao dịch</h3>
              <table className="table table-hover mt-3">
                <thead className="table-light">
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Số tiền</th>
                    <th className="text-center">Thời gian</th>
                    <th className="text-center">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {histories.map((history, index) => (
                    <tr key={history.id}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">
                        {parseFloat(history.amount).toLocaleString("vi-VN")} VNĐ
                      </td>
                      <td className="text-center">
                        {new Date(history.transaction_date).toLocaleString(
                          "vi-VN"
                        )}
                      </td>
                      <td className="text-center">
                        <span
                          className={`badge ${
                            history.status === "success"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {history.status === "success"
                            ? "Thành công"
                            : "Thất bại"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
