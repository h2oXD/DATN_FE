export default function InforLecturer() {
  return (
    <>
      <div class="col-lg-12 col-md-12 col-12">
        {/* <!-- Page Header --> */}
        <div class="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column gap-1">
            <h1 class="mb-0 h2 fw-bold">
              Giảng viên
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
                  Giảng viên
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="card">
        {/* <!-- card header --> */}
        <div class="card-header">
          <input
            type="search"
            class="form-control"
            placeholder="Tìm kiếm giảng viên"
          />
        </div>
        {/* <!-- table --> */}
        <div class="table-responsive">
          <table class="table mb-0 text-nowrap table-hover table-centered">
            <thead class="table-light">
              <tr>
                <th>Họ và tên</th>
                <th>Đề tài</th>
                <th>Các khóa học</th>
                <th>Đã tham gia</th>
                <th>Học sinh</th>
                <th>Xếp hạng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center flex-row gap-2">
                    <img
                      src="../../assets/images/avatar/avatar-12.jpg"
                      alt=""
                      class="rounded-circle avatar-md"
                    />
                    <h5 class="mb-0">Giảng Viên A</h5>
                  </div>
                </td>
                <td>Frontend Master</td>
                <td>6 khóa học</td>
                <td>7 February, 2025</td>
                <td>60,100</td>
                <td>
                  4.5
                  <span class="fs-6 align-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      fill="currentColor"
                      class="bi bi-star-fill text-secondary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </span>
                </td>

                <td>
                  <span class="dropdown dropstart">
                    <a
                      class="btn-icon btn btn-ghost btn-sm rounded-circle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-offset="-20,20"
                      aria-expanded="false"
                    >
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <span class="dropdown-menu">
                      <span class="dropdown-header">Settings</span>
                      <a class="dropdown-item" href="#">
                        <i class="fe fe-edit dropdown-item-icon"></i>
                        Edit
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fe fe-trash dropdown-item-icon"></i>
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
