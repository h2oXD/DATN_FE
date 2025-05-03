import React, { useState } from "react";
import CourseList from "./CourseList";
import SidebarFilter from "./SideBar";

const CategoryPage = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3 mt-2">
          <SidebarFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="col-md-9">
          {/* Danh sách khóa học */}
          <div className="row">
            <CourseList filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
