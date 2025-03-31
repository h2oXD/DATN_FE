
import { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TopSellingCoursesList from "./TopSellingCourse";
import axiosClient from "../../../api/axios";

export default function StudentRegistrationChart() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const response = await axiosClient.get("/lecturer/statistics");
      const { monthly_students } = response.data;
      
      const formattedData = monthly_students.map(({ month, total_students }) => ({
        month,
        students: total_students,
      }));
      
      setStudentData(formattedData);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu thống kê học viên:", error);
    }
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-8">
          <div
            className="p-3 bg-white shadow-lg rounded-lg"
            style={{ width: "100%", height: "400px" }}
          >
            <h5 className="mb-3">
              Biểu đồ thể hiện số lượng học viên đăng ký khóa học theo tháng
            </h5>
            <ResponsiveContainer>
              <LineChart
                data={studentData}
                margin={{ top: 20, right: 40, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-lg-4 bg-white shadow-lg rounded-lg ">
          <TopSellingCoursesList />
        </div>
      </div>
    </>
  );
}

