import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";

export default function HistoryStudent() {
  const [loading, setLoading] = useState(true);
  const [histories, setHistories] = useState([]);

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
      <div className="p-3 mt-3">
        <h3 className="fw-bold">Lịch sử giao dịch</h3>
        <table className="table table-hover mt-3">
          <thead className="table-light">
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Loại giao dịch</th>
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
                  {history.type === "deposit"
                    ? "Nạp tiền"
                    : history.type === "withdraw"
                    ? "Rút tiền"
                    : history.type === "payment"
                    ? "Thanh toán" 
                    : "Chưa xác định"}
                </td>
                <td className="text-center">
                  {parseFloat(history.amount).toLocaleString("vi-VN")} VNĐ
                </td>
                <td className="text-center">
                  {new Date(history.transaction_date).toLocaleString("vi-VN")}
                </td>
                <td className="text-center">
                  <span
                    className={`badge ${
                      history.status === "success" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {history.status === "success" ? "Thành công" : "Thất bại"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
