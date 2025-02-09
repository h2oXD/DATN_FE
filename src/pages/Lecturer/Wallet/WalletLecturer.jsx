export default function WalletLecturer() {
  return (
    <>
      <div class="container mt-4">
        <div class="row">
          {/* <!-- Thông tin tài khoản --> */}
          <div class="col-md-4">
            <div class="card p-3">
              <h5 class="fw-bold">Giảng Viên: Nguyễn Ngọc Khánh</h5>
              <p>
                Số dư: <strong class="text-primary">10.000.000 VNĐ</strong>
              </p>
              {/* <hr> */}
              <h6>Thống kê doanh thu</h6>
              <ul>
                <li>Khóa học bán được: 20</li>
                <li>Doanh thu tháng: 5.000.000 VNĐ</li>
                <li>Doanh thu tổng: 50.000.000 VNĐ</li>
              </ul>
              <p class="text-danger small">
                Lưu ý: Tiền chỉ có thể rút khi số dư trên 500.000 VNĐ.
              </p>
            </div>
          </div>

          {/* <!-- Form rút tiền --> */}
          <div class="col-md-8">
            <div class="card p-4">
              <h5 class="fw-bold">Rút tiền từ tài khoản</h5>
              <p>Chọn số tiền rút</p>
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-outline-primary">500.000 VNĐ</button>
                <button class="btn btn-outline-primary">1.000.000 VNĐ</button>
                <button class="btn btn-outline-primary">5.000.000 VNĐ</button>
                <button class="btn btn-outline-primary">10.000.000 VNĐ</button>
              </div>
              <input
                type="number"
                class="form-control mt-3"
                placeholder="Nhập số tiền muốn rút"
              />
              <button class="btn btn-primary mt-3">Rút tiền</button>
            </div>
          </div>
        </div>

        {/* <!-- Lịch sử rút tiền --> */}
        <div class="card mt-4 p-3">
          <h5 class="fw-bold">Lịch sử rút tiền</h5>
          <table class="table table-bordered">
            <thead class="table-light">
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
                  <span class="badge bg-success">Thành công</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
