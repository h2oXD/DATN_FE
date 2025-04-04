import { Collapse, DatePicker, Input, Select, Space, Table, Typography } from "antd"
import dayjs from "dayjs"
import { useState } from "react"

const { Text } = Typography
const { RangePicker } = DatePicker
const { Search } = Input
const { Panel } = Collapse

const instructorSalesData = [
  {
    id: "GV001",
    course: "Lập trình Python cơ bản",
    saleDate: "04/04/2025 - 14:25",
    studentsEnrolled: 30,
    income: "14.970.000đ",
    pricePerStudent: "499.000đ",
    paymentMethod: "Ví nội bộ",
    status: "success",
    students: [
      { name: "Nguyễn Văn A", email: "a@example.com", amount: "499.000đ", purchaseDate: "04/04/2025", paymentMethod: "Ví nội bộ" }
    ], 
    saleDateObj: dayjs("2025-04-04 14:25"),
  },

]

export default function SalesHistory() {
  const [courseFilter, setCourseFilter] = useState("all") // Filter by course name
  const [dateRange, setDateRange] = useState(null)
  const [searchText, setSearchText] = useState("")

  // Lọc dữ liệu theo bộ lọc và tìm kiếm
  const filteredData = instructorSalesData.filter((item) => {
    const matchCourse = courseFilter === "all" || item.course.toLowerCase().includes(courseFilter.toLowerCase())
    const matchDate =
      !dateRange ||
      (item.saleDateObj &&
        item.saleDateObj.isAfter(dateRange[0].startOf("day")) &&
        item.saleDateObj.isBefore(dateRange[1].endOf("day")))

    const matchSearch =
      !searchText ||
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    return matchCourse && matchDate && matchSearch
  })

  const columns = [
    {
      title: "Khóa học",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Ngày bắt đầu bán",
      dataIndex: "saleDate",
      key: "saleDate",
      render: (text) => dayjs(text, "DD/MM/YYYY - HH:mm").format("DD/MM/YYYY - HH:mm"),
    },
    {
      title: "Giá bán",
      dataIndex: "pricePerStudent",
      key: "pricePerStudent",
    },
    {
      title: "Tổng học viên",
      dataIndex: "studentsEnrolled",
      key: "studentsEnrolled",
    },
    {
      title: "Doanh thu",
      dataIndex: "income",
      key: "income",
    },
  ]

  return (
    <div>
      {/* Tiêu đề */}
      <div style={{ marginBottom: 12 }}>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Lịch sử bán khóa học của giảng viên
        </Typography.Title>
        <Text type="secondary" className="ms-3">
          Lọc và xem các giao dịch bán khóa học của giảng viên.
        </Text>
      </div>

      {/* Bộ lọc */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Space size="middle" wrap>
          <Search
            placeholder="Tìm kiếm..."
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 220 }}
          />
          <Select value={courseFilter} onChange={setCourseFilter} style={{ width: 180 }}>
            <Select.Option value="all">Tất cả khóa học</Select.Option>
            <Select.Option value="Lập trình Python cơ bản">Lập trình Python cơ bản</Select.Option>
            <Select.Option value="Thiết kế Web với HTML/CSS">Thiết kế Web với HTML/CSS</Select.Option>
            <Select.Option value="ReactJS từ A-Z">ReactJS từ A-Z</Select.Option>
          </Select>
          <RangePicker value={dateRange} onChange={setDateRange} />
        </Space>
      </div>

      {/* Bảng hiển thị lịch sử bán khóa học */}
      <Table
        columns={columns}
        dataSource={filteredData}
        expandable={{
          expandedRowRender: (record) => (
            <Collapse defaultActiveKey={[]} ghost>
              <Panel header="Chi tiết học viên" key="1">
                <ul>
                  {record.students.map((student, index) => (
                    <li key={index}>
                      <strong>{student.name}</strong> - {student.email}<br />
                      <span>Số tiền: {student.amount}</span><br />
                      <span>Ngày mua: {student.purchaseDate}</span><br />
                      <span>Phương thức thanh toán: {student.paymentMethod}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Collapse>
          ),
        }}
        rowKey="id"
      />
    </div>
  )
}
