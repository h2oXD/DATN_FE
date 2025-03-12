import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import axiosClient from "./../../../api/axios";

export default function HistoryWallet() {
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return (
      <>
        <div className="p-5">
          <Skeleton />
        </div>
      </>
    );
  }

  return (
    <>
      {/* <!-- Lịch sử nạp tiền --> */}
      <div className="card">
        <div className="p-3 mt-3">
          <h3>💰 Lịch sử nạp tiền</h3>
          <table className="table table-hover mt-3">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th className="text-center">Số tiền nạp</th>
                <th className="text-center">Ngày nạp</th>
                <th className="text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((history, index) => (
                <tr key={history.id}>
                  <td>{index + 1}</td>
                  <td className="text-center">
                    {parseFloat(history.amount).toLocaleString("vi-VN")} VNĐ
                  </td>
                  <td className="text-center">
                    {new Date(history.transaction_date).toLocaleString("vi-VN")}
                  </td>
                  <td className="text-center">
                    <span
                      className={`badge ${
                        history.status === "success"
                          ? "bg-success"
                          : "bg-danger"
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
      </div>
    </>
  );
}
