import {
  Collapse,
  DatePicker,
  Input,
  Select,
  Space,
  Table,
  Typography,
  Spin,
  Pagination,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";

const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Search } = Input;
const { Panel } = Collapse;

export default function SalesHistory() {
  const [courses, setCourses] = useState([]);
  const [studentDetails, setStudentDetails] = useState({});
  const [loadingStudents, setLoadingStudents] = useState({});
  const [studentPagination, setStudentPagination] = useState({});
  const [courseFilter, setCourseFilter] = useState("all");
  const [dateRange, setDateRange] = useState(null);
  const [searchText, setSearchText] = useState("");

  const PAGE_SIZE = 3;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axiosClient.get("/lecturer/sell-course-list");
        const {
          ["Danh sách khóa học đã bán"]: list,
          ["Tổng doanh thu"]: stats,
        } = res.data;

        const mapped = list.map((course) => {
          const stat = stats.find((s) => s.ID === course.id);
          return {
            id: course.id,
            course: course.title,
            saleDate: dayjs(course.created_at).format("DD/MM/YYYY - HH:mm"),
            saleDateObj: dayjs(course.created_at),
            pricePerStudent: course.is_free
              ? "Miễn phí"
              : Number(
                  course.price_sale || course.price_regular
                ).toLocaleString("vi-VN") + "đ",
            studentsEnrolled: stat?.["Số lượt mua"] || 0,
            income: course.is_free
              ? "0đ"
              : Number(stat?.["Doanh thu"] || 0).toLocaleString("vi-VN") + "đ",
            profit: course.is_free
              ? "0đ"
              : Number(stat?.["Lợi nhuận"] || 0).toLocaleString("vi-VN") + "đ",
            isFree: course.is_free === 1,
          };
        });

        setCourses(mapped);
      } catch (err) {
        console.error("Lỗi khi fetch danh sách khóa học:", err);
      }
    };

    fetchCourses();
  }, []);

  const fetchStudents = async (courseId) => {
    try {
      setLoadingStudents((prev) => ({ ...prev, [courseId]: true }));
      const res = await axiosClient.get(
        `/lecturer/sell-course/${courseId}/studentList`
      );
      const list = res.data.students.map((s) => ({
        name: s["Tên"],
        email: s["Email"],
        amount: Number(s["Số tiền thanh toán"]).toLocaleString("vi-VN") + "đ",
        purchaseDate: dayjs(s["Ngày thanh toán"]).format("DD/MM/YYYY - HH:mm"),
        paymentMethod:
          s["Phương thức thanh toán"] === "bank_transfer"
            ? "VNPay"
            : s["Phương thức thanh toán"] === "wallet"
            ? "Ví"
            : s["Phương thức thanh toán"],
      }));

      setStudentDetails((prev) => ({
        ...prev,
        [courseId]: list,
      }));

      setStudentPagination((prev) => ({
        ...prev,
        [courseId]: {
          current: 1,
          pageSize: PAGE_SIZE,
        },
      }));
    } catch (err) {
      console.error("Lỗi khi fetch chi tiết học viên:", err);
    } finally {
      setLoadingStudents((prev) => ({ ...prev, [courseId]: false }));
    }
  };

  const filteredData = courses.filter((item) => {
    const matchCourse =
      courseFilter === "all" ||
      item.course.toLowerCase().includes(courseFilter.toLowerCase());
    const matchDate =
      !dateRange ||
      (item.saleDateObj &&
        item.saleDateObj.isAfter(dateRange[0].startOf("day")) &&
        item.saleDateObj.isBefore(dateRange[1].endOf("day")));
    const matchSearch =
      !searchText ||
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase());

    return matchCourse && matchDate && matchSearch;
  });

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
    {
      title: "Lợi nhuận",
      dataIndex: "profit",
      key: "profit",
    },
  ];

  return (
    <div>
      <Typography.Title level={2}>Lịch sử bán khóa học</Typography.Title>
      <Text type="secondary">
        Lọc và xem các giao dịch bán khóa học của giảng viên.
      </Text>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "16px 0",
        }}
      >
        <Space>
          <Search
            placeholder="Tìm kiếm..."
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 220 }}
          />
          <Select
            value={courseFilter}
            onChange={setCourseFilter}
            style={{ width: 180 }}
          >
            <Select.Option value="all">Tất cả khóa học</Select.Option>
            {courses.map((c) => (
              <Select.Option key={c.id} value={c.course}>
                {c.course}
              </Select.Option>
            ))}
          </Select>
          <RangePicker value={dateRange} onChange={setDateRange} />
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        expandable={{
          expandedRowRender: (record) => {
            const students = studentDetails[record.id];
            const loading = loadingStudents[record.id];
            const pagination = studentPagination[record.id] || {
              current: 1,
              pageSize: PAGE_SIZE,
            };

            const startIdx = (pagination.current - 1) * pagination.pageSize;
            const endIdx = startIdx + pagination.pageSize;
            const paginatedStudents = students?.slice(startIdx, endIdx);

            return (
              <Collapse ghost defaultActiveKey={[]}>
                <Panel header="Chi tiết học viên" key="1">
                  {loading ? (
                    <Spin />
                  ) : students && students.length > 0 ? (
                    <>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(360px, 1fr))",
                          gap: 16,
                          marginBottom: 16,
                        }}
                      >
                        {paginatedStudents.map((s, idx) => (
                          <div
                            key={idx}
                            style={{
                              border: "1px solid #d9d9d9",
                              borderRadius: 8,
                              padding: 16,
                              background: "#fafafa",
                            }}
                          >
                            <Space direction="vertical" size={4}>
                              <Text strong>
                                {s.name} -{" "}
                                <Text type="secondary">{s.email}</Text>
                              </Text>
                              {!record.isFree && (
                                <>
                                  <Text>
                                    💰 <strong>Số tiền:</strong> {s.amount}
                                  </Text>
                                  <Text>
                                    🧾 <strong>Phương thức thanh toán:</strong>{" "}
                                    {s.paymentMethod}
                                  </Text>
                                </>
                              )}
                              <Text>
                                📅 <strong>Ngày mua:</strong> {s.purchaseDate}
                              </Text>
                            </Space>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: 8,
                        }}
                      >
                        <Pagination
                          current={pagination.current}
                          pageSize={pagination.pageSize}
                          total={students.length}
                          onChange={(page) =>
                            setStudentPagination((prev) => ({
                              ...prev,
                              [record.id]: { ...pagination, current: page },
                            }))
                          }
                          size="small"
                        />
                      </div>
                    </>
                  ) : (
                    <Text type="secondary">Không có học viên.</Text>
                  )}
                </Panel>
              </Collapse>
            );
          },

          onExpand: (expanded, record) => {
            if (expanded && !studentDetails[record.id]) {
              fetchStudents(record.id);
            }
          },
        }}
      />
    </div>
  );
}
