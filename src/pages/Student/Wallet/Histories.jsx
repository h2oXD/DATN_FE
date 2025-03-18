import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";

export default function Histories() {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const response = await axiosClient.get("/user/wallet/histories");
        setHistories(response.data.histories);
      } catch (err) {
        toast.error("Lỗi khi lấy lịch sử giao dịch");
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
              <th className="text-center">Loại giao dịch</th>
              <th className="text-center">Số tiền</th>
              <th className="text-center">Thời gian</th>
              <th className="text-center">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {histories.map((history, index) => (
              <tr
                key={history.id}
                className={
                  history.type === "deposit" ? "table-success" : "table-danger"
                }
              >
                <td className="text-center">{history.type}</td>
                <td className="text-center">
                  {history.type === "deposit" ? "+ " : "- "}
                  {parseFloat(history.amount).toLocaleString()} VND
                </td>
                <td className="text-center">
                  {new Date(history.transaction_date).toLocaleString("vi-VN")}
                </td>
                <td className="text-center">
                  {history.status === "success" ? "Thành công" : "Đang xử lý"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
