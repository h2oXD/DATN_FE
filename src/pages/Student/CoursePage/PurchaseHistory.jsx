import { DatePicker, Input, Select, Space, Table, Tag, Typography } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";

const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Search } = Input;

const statusColor = {
  success: "green",
  failed: "red",
  pending: "gray",
};

export default function PurchaseHistory() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchPurchaseHistory = async (current = 1, pageSize = 10) => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/student/course-list", {
        params: {
          page: current,
          limit: pageSize,
        },
      });

      const raw = res.data["Danh sách khóa học đã mua"] || [];
      const total = res.data.total || raw.length;

      raw.sort(
        (a, b) => new Date(b.transaction_date) - new Date(a.transaction_date)
      );

      const mapped = raw.map((item) => ({
        id: item.id,
        course: item.course?.title || "Không có tên",
        date: dayjs(item.transaction_date).format("DD/MM/YYYY - HH:mm"),
        paymentMethod:
          item.amount === "0.00"
            ? "Miễn phí"
            : item.payment_method === "bank_transfer"
            ? "VNPay"
            : "Ví",
        amount:
          item.amount === "0.00"
            ? "Miễn phí"
            : Number(item.amount).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              }),
        status: item.status,
        dateObj: dayjs(item.transaction_date),
      }));

      setData(mapped);
      setPagination((prev) => ({
        ...prev,
        total,
        current,
      }));
    } catch (err) {
      console.error("Lỗi khi tải dữ liệu lịch sử mua:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseHistory(pagination.current, pagination.pageSize);
  }, [pagination.current]);

  const filteredData = data.filter((item) => {
    const matchStatus = statusFilter === "all" || item.status === statusFilter;
    const matchDate =
      !dateRange ||
      (item.dateObj &&
        item.dateObj.isAfter(dateRange[0].startOf("day")) &&
        item.dateObj.isBefore(dateRange[1].endOf("day")));
    const matchSearch =
      !searchText ||
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase());
    return matchStatus && matchDate && matchSearch;
  });

  const columns = [
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
      render: (method) =>
        method === "Miễn phí" ? <Tag color="blue">{method}</Tag> : method,
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
          {status === "success"
            ? "Thành công"
            : status === "failed"
            ? "Thất bại"
            : "Đang xử lý"}
        </Tag>
      ),
    },
  ];

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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <Space size="middle" wrap>
          <Search
            placeholder="Tìm kiếm..."
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 220 }}
          />
          <Select
            value={statusFilter}
            onChange={setStatusFilter}
            style={{ width: 180 }}
          >
            <Select.Option value="all">Tất cả trạng thái</Select.Option>
            <Select.Option value="success">Thành công</Select.Option>
            <Select.Option value="failed">Thất bại</Select.Option>
            <Select.Option value="pending">Đang xử lý</Select.Option>
          </Select>
          <RangePicker value={dateRange} onChange={setDateRange} />
        </Space>
      </div>

      {/* Bảng hiển thị */}
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        loading={loading}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          showSizeChanger: false,
        }}
        onChange={(newPagination) =>
          setPagination((prev) => ({
            ...prev,
            current: newPagination.current,
          }))
        }
      />
    </div>
  );
}
