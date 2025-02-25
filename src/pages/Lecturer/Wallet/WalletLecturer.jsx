import {
  FaUserCircle,
  FaCoins,
  FaBook,
  FaTrophy,
  FaMoneyBillWave,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function WalletLecturer() {
  return (
    <div className="container mt-4">
      {/* Tiêu đề chính */}
      <h3 className="fw-bold text-primary mb-3">Rút Tiền</h3>
      <div className="row">
        {/* Thông tin tài khoản */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm border-0">
            <div className="d-flex align-items-center">
              <FaUserCircle size={40} className="text-primary me-2" />
              <h5 className="fw-bold mb-0">Giảng Viên: Nguyễn Ngọc Khánh</h5>
            </div>
            <p className="mt-0 mx-6 fw-bold text-primary">
              <FaCoins className="text-warning me-1" /> 10.000.000 VNĐ
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
              rút khi số dư trên 500.000 VNĐ.
            </p>
          </div>
        </div>

        {/* Form rút tiền */}
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0">
            <h5 className="fw-bold text-center">Rút tiền từ tài khoản</h5>
            <p className="text-center text-muted">Chọn số tiền rút</p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {[500000, 1000000, 5000000, 10000000].map((amount) => (
                <button
                  key={amount}
                  className="btn btn-outline-primary rounded-pill px-3 fw-bold"
                >
                  {amount.toLocaleString()} VNĐ
                </button>
              ))}
            </div>
            <input
              type="number"
              className="form-control mt-3 rounded"
              placeholder="Nhập số tiền muốn rút"
            />
            <button className="btn btn-primary w-100 mt-3 rounded-pill fw-bold shadow-sm">
              Rút tiền
            </button>
          </div>
        </div>
      </div>

      {/* Lịch sử rút tiền */}
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
            <tr>
              <td>1</td>
              <td>5.000.000 VNĐ</td>
              <td>14:30:00 01/12/2024</td>
              <td>
                <span className="badge bg-success">Thành công</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
