export default function WalletStudent() {
  return (
    <>
      <div className="card">
        <div className="row p-3">
          <div className="col-md-4">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <div className="avatar">
                  <img
                    src="../../../assets/images/avatar/avatar-1.jpg"
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">Giảng viên A</h5>
                  <p className="mb-0 text-muted">
                    Số dư: <strong>0 VND</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-3 mt-3">
              <h4>Quy tắc nạp tiền</h4>
              <p>
                Số tiền tối thiểu mỗi lần nạp: <strong>50.000 VND</strong>
              </p>
            </div>
            <div
              className="alert alert-warning mt-3 d-flex align-items-center"
              role="alert"
            >
              <span className="me-2">⚠️</span>
              <span className="text-dark">
                <strong>Lưu ý:</strong> Chúng tôi không hoàn tiền đối với khoản
                tiền đã nạp. Bạn là người quyết định các hóa đơn sẽ thanh toán
                sử dụng số dư đã nạp.
              </span>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card p-4">
              <p>
                Tại đây bạn có thể nạp tiền vào tài khoản cá nhân để sử dụng
                thanh toán cho các lần chi trả mua khóa học.
              </p>
              <h4>Chọn mệnh giá</h4>
              <div className="row g-3">
                <div className="col-md-4">
                  <button className="btn btn-outline-primary w-100">
                    50.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-outline-primary w-100">
                    100.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-outline-primary w-100">
                    200.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-outline-primary w-100">
                    300.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-outline-primary w-100">
                    500.000 VND
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-outline-primary w-100">
                    1.000.000 VND
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <label for="customAmount" className="form-label">
                  Bạn cũng có thể nhập số tiền muốn nạp
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    id="customAmount"
                    className="form-control"
                    placeholder="Nhập số tiền mà bạn muốn nạp"
                  />
                  <span className="input-group-text">VND</span>
                </div>
              </div>
              <div className="mt-3">
                <p>
                  <strong>Tổng:</strong> <span id="totalAmount">0</span> VND
                </p>
                <button className="btn btn-primary w-15">Nạp tiền</button>
              </div>
            </div>
          </div>

          <div className="p-3 mt-4">
            <h4>Lịch sử nạp tiền</h4>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th className="text-center">Số tiền nạp</th>

                  <th className="text-center">Ngày nạp</th>
                  <th className="text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-center">5.000.000 VND</td>

                  <td className="text-center">23:08:57 30/11/2024</td>
                  <td className="text-center">
                    <span className="badge bg-success">Thành công</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
