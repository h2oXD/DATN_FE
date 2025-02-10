import { BsCurrencyDollar, BsBook, BsPeople } from "react-icons/bs";
export default function DashboardLecturer() {
  return (
    <>
      <div className="row">
        <h2>Tổng quan</h2>
        {/* Thẻ doanh thu */}
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              {/* Icon góc trên bên phải */}
              <BsCurrencyDollar
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />

              <span className="fs-6 text-uppercase fw-semibold">Doanh thu</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                $467.34
              </h2>
            </div>
          </div>
        </div>

        {/* Tổng số khóa học */}
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              {/* Icon góc trên bên phải */}
              <BsBook
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />

              <span className="fs-6 text-uppercase fw-semibold">
                Tổng số khóa học
              </span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                12,000
              </h2>
            </div>
          </div>
        </div>
        {/* Tổng số học viên */}
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              {/* Icon góc trên bên phải */}
              <BsPeople
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />

              <span className="fs-6 text-uppercase fw-semibold">
                Tổng số học viên
              </span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                4.80
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
