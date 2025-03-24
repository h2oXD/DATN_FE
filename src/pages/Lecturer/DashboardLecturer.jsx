import { useEffect, useState } from "react";
import { BsCurrencyDollar, BsBook, BsPeople } from "react-icons/bs";
import axiosClient from "../../api/axios";

export default function DashboardLecturer() {
  const [stats, setStats] = useState({
    total_courses: 0,
    total_revenue: 0,
    total_students: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axiosClient.get("/lecturer/statistics");
        const data = response.data;
        console.log(response);
        
        // Tính tổng số học viên từ danh sách khóa học
        const totalStudents = data.courses.reduce(
          (sum, course) => sum + course.enrollments_count,
          0
        );

        setStats({
          total_courses: data.total_courses,
          total_revenue: data.total_revenue,
          total_students: totalStudents,
        });
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu thống kê:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <>
      <div className="row">
        <h2>Tổng quan</h2>
        {/* Thẻ doanh thu */}
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              <BsCurrencyDollar
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />
              <span className="fs-6 text-uppercase fw-semibold">Doanh thu</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                {parseInt(stats.total_revenue).toLocaleString("vi-VN")} VND
              </h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              <BsCurrencyDollar
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />
              <span className="fs-6 text-uppercase fw-semibold">Lợi nhuận</span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                {parseInt(stats.total_revenue*0.7).toLocaleString("vi-VN")} VND
              </h2>
            </div>
          </div>
        </div>

        {/* Tổng số khóa học */}
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              <BsBook
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />
              <span className="fs-6 text-uppercase fw-semibold">
                Tổng số khóa học
              </span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                {stats.total_courses}
              </h2>
            </div>
          </div>
        </div>

        {/* Tổng số học viên */}
        <div className="col-lg-3 col-md-12 col-12">
          <div className="card mb-4 position-relative">
            <div className="p-4">
              <BsPeople
                className="position-absolute top-0 end-0 m-3 text-muted"
                size={24}
              />
              <span className="fs-6 text-uppercase fw-semibold">
                Tổng số học viên
              </span>
              <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                {stats.total_students}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
