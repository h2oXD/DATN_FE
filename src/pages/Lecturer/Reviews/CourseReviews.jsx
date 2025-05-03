import React, { useEffect, useState } from "react";
import { Card, Row, Col, Rate, Avatar, Spin, Alert, Select } from "antd";
import axiosClient from "../../../api/axios";

const { Option } = Select;

const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const CourseReview = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosClient.get(`/lecturer/courses`);
        setCourses(response.data.courses.data || []); 
        console.log(response.data.courses.data);
        if (response.data.courses.data.length > 0) {
          setSelectedCourse(response.data.courses.data[0].id); 
        }
      } catch (err) {
        setError("Không thể tải danh sách khóa học. Vui lòng thử lại sau.");
        console.log(err)
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (!selectedCourse) return;

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get(`/courses/${selectedCourse}/reviews`);
        setReviews(response.data.reviews || []); // Ensure reviews is always an array
      } catch (err) {
        setError("Không thể tải đánh giá. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [selectedCourse]);

  const handleCourseChange = (value) => {
    setSelectedCourse(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true;
    return review.rating === parseInt(filter, 10);
  });

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Spin tip="Đang tải dữ liệu..." />
      </div>
    );
  }

  if (error) {
    return <Alert message="Lỗi" description={error} type="error" showIcon />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Select
        value={selectedCourse}
        style={{ marginBottom: 20, width: 300 }}
        onChange={handleCourseChange}
      >
        {courses.map((course) => (
          <Option key={course.id} value={course.id}>
            {course.title}
          </Option>
        ))}
      </Select>

      <Select
        defaultValue="all"
        style={{ marginBottom: 20, width: 200, marginLeft: 20 }}
        onChange={handleFilterChange}
      >
        <Option value="all">Tất cả</Option>
        <Option value="5">5 sao</Option>
        <Option value="4">4 sao</Option>
        <Option value="3">3 sao</Option>
        <Option value="2">2 sao</Option>
        <Option value="1">1 sao</Option>
      </Select>

      <Row gutter={[16, 16]}>
        {filteredReviews.map((review, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <Card>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                <Avatar
                  size="large"
                  style={{ backgroundColor: "#ccc", marginRight: 12 }}
                >
                  {getInitials(review.reviewer.name)}
                </Avatar>
                <div>
                  <div style={{ fontWeight: "bold" }}>{review.reviewer.name}</div>
                  <div style={{ fontSize: "12px", color: "#888" }}>
                    {new Date(review.created_at).toLocaleDateString("vi-VN")}
                  </div>
                </div>
              </div>
              <Rate disabled defaultValue={review.rating} style={{ color: "#fadb14" }} />
              <div style={{ marginTop: 8 }}>{review.review_text}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CourseReview;



