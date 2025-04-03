import { useState } from "react";
import CourseList from "./CourseList";
import SideBar from "./SideBar";

export default function HomeCourseList() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Cập nhật bộ lọc
  };
  return (
    <div className="container mt-2">
      <div className="row">
        {/* <!-- Sidebar Bộ lọc --> */}
        <div className="col-md-3">
          <SideBar onFilterChange={handleFilterChange}/>
        </div>
        {/* <!-- Danh sách khóa học --> */}
        <div className="col-md-9">
          <div className="row">
            <CourseList filters={filters}/>
          </div>
        </div>
      </div>
    </div>
  );
}
