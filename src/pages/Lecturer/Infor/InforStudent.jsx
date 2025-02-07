export default function InforStudent() {
  return (
    <>
      <div class="col-lg-12 col-md-12 col-12">
        {/* <!-- Page Header --> */}
        <div class="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column gap-1">
            <h1 class="mb-0 h2 fw-bold">
              Học viên
              <span class="fs-5">(1,22,105 )</span>
            </h1>
            {/* <!-- Breadcrumb  --> */}
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="">Thống kê</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="">Thông tin</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Học viên
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="card">
        {/* <!-- Card Header --> */}
        <div className="card-header">
          <input
            type="search"
            className="form-control"
            placeholder="Tìm kiếm học viên"
          />
        </div>
        {/* <!-- Table --> */}
        <div className="table-responsive">
          <table className="table mb-0 text-nowrap table-hover table-centered">
            <thead className="table-light">
              <tr>
                <th>Họ và tên</th>
                <th>Đã đăng ký</th>
                <th>Thời gian tham gia</th>
                <th>Tổng số tiền thanh toán</th>
                <th>Địa điểm</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center flex-row gap-2">
                    <div className="position-relative">
                      <img
                        src="../../assets/images/avatar/avatar-11.jpg"
                        alt=""
                        className="rounded-circle avatar-md"
                      />
                      <a href="#" className="position-absolute mt-5 ms-n4">
                        <span className="status bg-success"></span>
                      </a>
                    </div>
                    <h5 className="mb-0">Nguyễn Văn A</h5>
                  </div>
                </td>
                <td>6 khóa học</td>
                <td>7 February, 2025</td>
                <td>$5,45</td>
                <td>Hà Nội</td>

                <td>
                  <span className="dropdown dropstart">
                    <a
                      className="btn-icon btn btn-ghost btn-sm rounded-circle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-offset="-20,20"
                      aria-expanded="false"
                    >
                      <i className="fe fe-more-vertical"></i>
                    </a>
                    <span className="dropdown-menu">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Remove
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
