import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import { format } from "date-fns";


export default function Histories() {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const response = await axiosClient.get("/user/wallet/histories");
        setHistories(response.data.histories);
        console.log(response);

      } catch (err) {
        toast.error("Lỗi khi lấy lịch sử giao dịch");
      }
    };
    fetchHistories();
  }, []);
  return (
    <>
      <div className="p-3">
        <h3 className="fw-bold">Biến động số dư</h3>
        {histories && histories.length <= 0 && <h4 className="text-center mt-5">Chưa có giao dịch nào!</h4>}
        {histories && histories.length > 0 &&
          <table className="table table-bordered table-responsive table-hover mt-3">
            <thead className="table-light">
              <tr>
                <th className="text-center">Loại giao dịch</th>
                <th className="text-center">Số tiền</th>
                <th className="text-center">Thời gian</th>
                <th className="text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {histories && histories.map((history, index) => (
                <tr
                  key={history.id}
                >
                  {history.type === "deposit" && <td className="text-center">Nạp tiền</td>}
                  {history.type === "withdraw" && <td className="text-center">Rút tiền</td>}
                  {history.type === "profit" && <td className="text-center">Lợi nhuận từ khoá học</td>}
                  {history.type === "payment" && <td className="text-center">Chi trả</td>}
                  {history.type === "refund" && <td className="text-center">Hoàn trả</td>}

                  <td className="text-center">
                    {history.type === "deposit" && "+ "}
                    {history.type === "withdraw" && "- "}
                    {history.type === "profit" && "+ "}
                    {history.type === "payment" && "- "}
                    {history.type === "refund" && "+ "}
                    {parseFloat(history.amount).toLocaleString()} VND
                  </td>
                  <td className="text-center">
                    {format(new Date(history.transaction_date), "dd/MM/yyyy HH:mm:ss")}
                  </td>
                  <td className="text-center">
                    {history.status === "success" ? <span className="badge bg-success-soft">Thành công</span> : <span className="badge bg-warning">Đang xử lý</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
}
