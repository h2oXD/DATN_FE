import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import {
  FaChartLine,
  FaCode,
  FaLanguage,
  FaPaintBrush,
  FaUserGraduate,
} from "react-icons/fa";
import axiosClient from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function LearningCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosClient.get("/categories");
        const data = response.data.data;
        const parentCategories = data.filter(
          (category) => category.parent_id === null
        );
        const mappedCategories = parentCategories.map((category) => ({
          ...category,
        }));
        setCategories(mappedCategories);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="container py-3 px-5">
      <Skeleton />
    </div>;
  }

  return (
    <div className="container py-3 text-center">
      <h3 className="text-dark fw-bold">HÔM NAY BẠN MUỐN HỌC GÌ ?</h3>
      <div
        className="mx-auto bg-warning mt-2 mb-3"
        style={{ width: "80px", height: "2px" }}
      ></div>
      <div className="row g-3 justify-content-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-2"
            onClick={() => navigate(`/category?category_id=${category.id}`)} // Điều hướng đến trang danh mục
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-sm p-3 text-center h-100 d-flex flex-column align-items-center justify-content-center">
              {category.name === "Công nghệ thông tin" && (
                <FaCode className="text-secondary" size={30} />
              )}
              {category.name === "Thiết kế đồ hoạ" && (
                <FaPaintBrush className="text-secondary" size={25} />
              )}
              {category.name === "Kinh doanh & Marketing" && (
                <FaChartLine className="text-secondary" size={30} />
              )}
              {category.name === "Phát triển cá nhân" && (
                <FaUserGraduate className="text-secondary" size={27} />
              )}
              {category.name === "Ngôn ngữ & Dịch thuật" && (
                <FaLanguage className="text-secondary" size={35} />
              )}
              <p
                className="text-dark fw-medium mt-1"
                style={{ fontSize: "14px" }}
              >
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
