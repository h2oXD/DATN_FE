export default function InforStudent() {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="col-lg-12 col-md-8 col-12">
          {/* <!-- Card --> */}
          <div className="card mb-4">
            {/* <!-- Card body --> */}
            <div className="p-4 d-flex justify-content-between align-items-center">
              <div>
                <h3 className="mb-0">Học viên của tôi</h3>
                <span>Học viên tham gia khóa học </span>
              </div>
            </div>
          </div>
          {/* <!-- Tab content --> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active pb-4"
              id="tabPaneGrid"
              role="tabpanel"
              aria-labelledby="tabPaneGrid"
            >
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 mb-2">
                  {/* <!-- Content --> */}
                  <div className="row">
                    <div className="col pe-0">
                      <form>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Tìm kiếm theo tên"
                        />
                      </form>
                    </div>

                    <div className="col-auto">
                      <form>
                        <select className="form-select">
                          <option value="">Nhập môn lập trình</option>
                          <option value="">
                            Lập trình cơ sở với JavaScript
                          </option>
                          <option value="">
                            Lập trình JavaScript nâng cao
                          </option>
                          <option value="">Thiết kế UI/UX</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            src="../assets/images/avatar/avatar-3.jpg"
                            className="rounded-circle avatar-xl mb-3"
                            alt="avatar"
                          />
                          <h4 className="mb-1">Học viên A</h4>
                          <p className="mb-0">
                            <i className="fe fe-map-pin me-1"></i>
                            Hà Nội
                          </p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                          <span>Thời gian đăng ký</span>
                          <span className="text-dark">3/12/2020</span>
                        </div>
                        <div className="d-flex justify-content-between pt-2 fs-6">
                          <span>Tiến độ</span>
                          <span className="text-success">0%</span>
                        </div>

                        <div className="d-flex justify-content-center mt-2">
                          <a
                            href="#"
                            className="btn btn-sm btn-outline-secondary m-1"
                          >
                            Xem thông tin
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-outline-secondary m-1"
                          >
                            Nhắn tin
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
