
import { useState, useEffect } from "react";
import { Table, Avatar } from "antd";
import axiosClient from "../../../api/axios";


const columns = [
  {
    title: "Khóa học",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar src={record.image || "https://via.placeholder.com/50"} shape="square" size={50} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "Số lượng bán",
    dataIndex: "enrollments_count",
    key: "enrollments_count",
  },
];

const TopSellingCoursesList = () => {
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    fetchTopCourses();
  }, []);

  const fetchTopCourses = async () => {
    try {
      const response = await axiosClient.get("/lecturer/statistics");
      setTopCourses(response.data.top_selling_courses);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu top khóa học bán chạy:", error);
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <h3>Top khóa học bán chạy</h3>
      <Table dataSource={topCourses} columns={columns} pagination={false} rowKey="id" />
    </div>
  );
};

export default TopSellingCoursesList;

