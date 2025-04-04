
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axiosClient from "../../../api/axios";

const RevenueChart = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    fetchRevenueData();
  }, []);

  const fetchRevenueData = async () => {
    try {
      const response = await axiosClient.get("/lecturer/statistics");
      const { monthly_revenue } = response.data;
      
      // Chuyển đổi dữ liệu thành định dạng phù hợp với biểu đồ
      const formattedData = monthly_revenue.map(({ month, total }) => ({
        month,
        revenue: total,
      }));
      
      setFilteredData(formattedData);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu thống kê:", error);
    }
  };

  const handleFilter = () => {
    fetchRevenueData(); // Gọi lại API khi lọc để đảm bảo dữ liệu luôn mới nhất
    if (selectedMonth) {
      setFilteredData((prevData) =>
        prevData.filter((item) => item.month === selectedMonth)
      );
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="text-xl font-semibold">Biểu đồ doanh thu theo tháng</h3>
        <div className="d-flex align-items-center gap-2">
          <input
            type="month"
            className="border p-2 rounded-lg"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
          <button
            className="btn btn-primary text-white px-4 py-2 rounded-lg"
            onClick={handleFilter}
          >
            Tìm kiếm
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: "Tháng", position: "insideBottom", offset: -18 }}
          />
          <YAxis
            label={{ value: "Doanh thu", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(value) => [<strong>{value}</strong>, "Tổng doanh thu"]}
          />
          <Legend formatter={() => ""} />
          <Bar
            dataKey="revenue"
            fill="#76a9fa"
            barSize={40}
            name="Tổng doanh thu"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;

