import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../api/axios";
import { isEmptyArray } from "formik";
import { Skeleton } from "antd";
import { getImageUrl } from "../../../api/common";
import { Link } from "react-router-dom";

export default function MentorList() {
  // const listRef = useRef(null);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/guest/lecturer")
      .then((response) => {
        console.log(response);
        setMentors(response.data || []);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu giảng viên:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // const scrollLeft = () => {
  //   if (listRef.current) {
  //     listRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (listRef.current) {
  //     listRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  if (loading) {
    return (
      <>
        <div className="p-5">
          <Skeleton />
        </div>
      </>
    );
  }

  if (isEmptyArray(mentors)) {
    return (
      <>
        <h4 className="p-5">Không có dữ liệu giảng viên</h4>
      </>
    );
  }

  return (
    <>
      <div className="mt-3">
        <h3 className="my-1 text-center fw-bold">ĐỘI NGŨ GIẢNG VIÊN</h3>
      <div className="mx-auto bg-warning mt-2 mb-3" style={{ width: "80px", height: "2px" }}></div>
        <div className="position-relative d-flex overflow-x-hidden pb-lg-4">
          <div className="animate-marquee d-flex gap-3">
            {mentors && mentors.map((mentor, index) => (
              <Link
                key={index}
                className="bg-white text-center shadow-sm text-wrap rounded-4 border card-lift border tw-min-w-[200px]"
              >
                {/*img*/}
                <div className="p-3">
                  <img
                    src={mentor.profile_picture ? getImageUrl(mentor.profile_picture) : '/avatarDefault.jpg'}
                    alt="mentor 1"
                    className="avatar avatar-xl rounded-circle"
                  />
                  {/*content*/}
                  <div className="mt-3 d-flex flex-column">
                    <h3 className="mb-0 h4">{mentor && mentor.name}</h3>
                    <span className="text-gray-800"><i className="bi bi-book me-1"></i>{mentor.courses_count} Khoá học</span>
                    <span className="text-warning">{mentor.reviews_avg_rating ? mentor.reviews_avg_rating : 0} ★ ({mentor.reviews_count} đánh giá)</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
