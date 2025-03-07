import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";

const VoucherHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosClient
      .get("/user/vouchers/history")
      .then((response) => {
        setHistory(response.data.history);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setHistory([]); // Không có lịch sử voucher
        } else {
          setError("Không thể tải lịch sử voucher.");
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Đang tải...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-light text-dark text-center py-3 rounded-top-4">
          <h4 className="fw-bold">Lịch Sử Sử Dụng Voucher</h4>
        </div>
        <div className="card-body">
          {error ? (
            <div className="alert alert-danger text-center">{error}</div>
          ) : history.length === 0 ? (
            <div className="text-center text-muted fs-5 py-4 tw-font-bold">
              Bạn chưa sử dụng voucher nào.
            </div>
          ) : (
            <table className="table table-bordered text-center align-middle table-hover">
              <thead className="bg-primary text-white">
                <tr>
                  <th>#</th>
                  <th>Mã Voucher</th>
                  <th>Khóa Học</th>
                  <th>Giảm Giá</th>
                  <th>Ngày Sử Dụng</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={item.voucher_use_id} className="table-hover">
                    <td>{index + 1}</td>
                    <td>
                      <span className="badge bg-success">
                        {item.voucher.code}
                      </span>
                    </td>
                    <td>{item.course.name}</td>
                    <td className="text-danger fw-bold">
                      {item.voucher.discount_price.toLocaleString()} VND
                    </td>
                    <td>
                      {new Date(item.time_used).toLocaleDateString("vi-VN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="text-center">
            <Link
              to="/student/course/voucher"
              className="btn btn-primary px-4 py-2 rounded-3 text-white"
            >
              Quay lại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherHistory;
