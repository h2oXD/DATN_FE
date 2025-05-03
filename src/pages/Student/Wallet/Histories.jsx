import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { Pagination } from "antd"; // Import Pagination từ antd

export default function Histories() {
  const [histories, setHistories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize, setPageSize] = useState(5); // Số lượng mục trên mỗi trang

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

  // Tính toán dữ liệu hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * pageSize;
  const currentHistories = histories.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className="p-3">
        <h3 className="fw-bold">Biến động số dư</h3>
        {histories && histories.length <= 0 && (
          <h4 className="text-center mt-5">Chưa có giao dịch nào!</h4>
        )}
        {histories && histories.length > 0 && (
          <>
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
                {currentHistories.map((history, index) => (
                  <tr key={history.id}>
                    {history.type === "deposit" && (
                      <td className="text-center">Nạp tiền</td>
                    )}
                    {history.type === "withdraw" && (
                      <td className="text-center">Rút tiền</td>
                    )}
                    {history.type === "profit" && (
                      <td className="text-center">Lợi nhuận từ khoá học</td>
                    )}
                    {history.type === "payment" && (
                      <td className="text-center">Chi trả</td>
                    )}
                    {history.type === "refund" && (
                      <td className="text-center">Hoàn trả</td>
                    )}

                    <td className="text-center">
                      {history.type === "deposit" && "+ "}
                      {history.type === "withdraw" && "- "}
                      {history.type === "profit" && "+ "}
                      {history.type === "payment" && "- "}
                      {history.type === "refund" && "+ "}
                      {parseFloat(history.amount).toLocaleString()} VND
                    </td>
                    <td className="text-center">
                      {format(
                        new Date(history.transaction_date),
                        "dd/MM/yyyy HH:mm:ss"
                      )}
                    </td>
                    <td className="text-center">
                      {history.status === "success" ? (
                        <span className="badge bg-success-soft">
                          Thành công
                        </span>
                      ) : (
                        <span className="badge bg-warning">Đang xử lý</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Phân trang */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 8,
              }}
            >
              <Pagination
                className="mt-3"
                current={currentPage}
                pageSize={pageSize}
                total={histories.length}
                onChange={(page, size) => {
                  setCurrentPage(page);
                  setPageSize(size);
                }}
                showSizeChanger
                pageSizeOptions={[5, 10, 20, 50]}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
