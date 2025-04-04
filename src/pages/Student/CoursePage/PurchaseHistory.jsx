import { Table, Tag, Typography, Select, DatePicker, Space, Input } from "antd"
import dayjs from "dayjs"
import { useState } from "react"

const { Text } = Typography
const { RangePicker } = DatePicker
const { Search } = Input

const data = [
  {
    id: "HD001",
    course: "Lập trình Python cơ bản",
    date: "04/04/2025 - 14:25",
    paymentMethod: "Ví nội bộ",
    amount: "499.000đ",
    status: "success",
    details: "Thanh toán qua ví, số dư trước: 1.000.000đ, số dư sau: 501.000đ",
    dateObj: dayjs("2025-04-04 14:25"),
  },
]

const statusColor = {
  success: "green",
  failed: "red",
  pending: "gray",
}

export default function PurchaseHistory() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateRange, setDateRange] = useState(null)
  const [searchText, setSearchText] = useState("")

  const filteredData = data.filter((item) => {
    const matchStatus = statusFilter === "all" || item.status === statusFilter
    const matchDate =
      !dateRange ||
      (item.dateObj &&
        item.dateObj.isAfter(dateRange[0].startOf("day")) &&
        item.dateObj.isBefore(dateRange[1].endOf("day")))
    const matchSearch =
      !searchText ||
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    return matchStatus && matchDate && matchSearch
  })

  const columns = [
    {
      title: "Mã giao dịch",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Khóa học",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Ngày mua",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Thanh toán",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={statusColor[status]}>
          {status === "success" ? "Thành công" : status === "failed" ? "Thất bại" : "Đang xử lý"}
        </Tag>
      ),
    },
  ]

  return (
    <div>
      {/* Tiêu đề */}
      <div style={{ marginBottom: 8 }}>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Lịch sử mua khóa học
        </Typography.Title>
        <Text type="secondary" className="ms-3">
          Lọc và xem các giao dịch bạn đã thực hiện.
        </Text>
      </div>

      {/* Bộ lọc */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
        <Space size="middle" wrap>
          <Search
            placeholder="Tìm kiếm..."
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 220 }}
          />
          <Select value={statusFilter} onChange={setStatusFilter} style={{ width: 180 }}>
            <Select.Option value="all">Tất cả trạng thái</Select.Option>
            <Select.Option value="success">Thành công</Select.Option>
            <Select.Option value="failed">Thất bại</Select.Option>
            <Select.Option value="pending">Đang xử lý</Select.Option>
          </Select>
          <RangePicker value={dateRange} onChange={setDateRange} />
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
      />
    </div>
  )
}
