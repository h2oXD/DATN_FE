import { Modal, Skeleton } from "antd";
import BuyCourse from "../Student/BuyCourse/BuyCourse";
import { getImageUrl } from "../../api/common";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useVoucher } from "../../contexts/VoucherContext";
import { toast } from "react-toastify";
import axiosClient from "../../api/axios";
import { StoreContext } from "../../contexts/StoreProvider";

export default function CourseSummary() {
  const { course_id } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedVoucher } = useVoucher();
  const location = useLocation();
  const { user } = useContext(StoreContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!course_id) return;
    // console.log("course_id của khóa học:", course_id);
    setLoading(true);
    axiosClient
      .get(`/courses/${course_id}/public`)
      .then((response) => {
        console.log("Dữ liệu API nhận được:", response.data.data);
        const {
          course,
          instructor,
          average_rating,
          student_count,
          total_lessons,
          isEnrollment,
        } = response.data.data;
        setCourse({
          ...course,
          lecturer: instructor || {},
          average_rating,
          student_count,
          total_lessons,
          isEnrollment,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy chi tiết khoá học:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [course_id]);

  // Khi voucher được áp dụng, mở modal BuyCourse
  useEffect(() => {
    if (
      selectedVoucher ||
      new URLSearchParams(location.search).get("voucher_applied")
    ) {
      setIsModalOpen(true);
      setIsModalVisible(true);
    }
  }, [selectedVoucher, location.search]);

  useEffect(() => {
    if (!user || !course_id) return;

    axiosClient
      .get(`/user/wishlist/check/${course_id}`)
      .then(() => setIsFavorite(true))
      .catch(() => setIsFavorite(false));
  }, [course_id, user]);

  const showModal = () => {
    if (user) {
      setIsModalVisible(true);
    } else {
      const loginModal = document.getElementById("loginModal");
      if (loginModal) {
        const modal = new bootstrap.Modal(loginModal);
        modal.show();
      }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLearn = async () => {
    if (!course_id) return;

    try {
      const response = await axiosClient.post(
        `/user/courses/${course_id}/create-payment`,
        { amount: 0 }, // Đăng ký khóa học miễn phí
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("🎉 Bạn đã đăng ký khóa học thành công!", {
          position: "top-right",
          autoClose: 3000, // Ẩn sau 3 giây
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });

        // Chuyển hướng sau khi thông báo hiển thị
        setTimeout(() => {
          navigate(`/student/MyCourse`);
        }, 1000);
      } else {
        toast.error(
          response.data.message || "❌ Có lỗi xảy ra khi đăng ký khóa học."
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "❌ Lỗi không xác định!");
    }
  };

  const toggleWishlist = async () => {
    if (!user) {
      toast.warning("Vui lòng đăng nhập để sử dụng tính năng này!");
      return;
    }

    try {
      if (isFavorite) {
        await axiosClient.delete(`/user/wishlist/${course_id}`);
        toast.success("Khóa học đã được xóa khỏi danh sách yêu thích!");
      } else {
        await axiosClient.post(`/user/wishlist/${course_id}`);
        toast.success("Khóa học đã được thêm vào danh sách yêu thích!");
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi hệ thống!");
    }
  };

  if (loading) {
    return (
      <>
        <div className="card p-5">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </>
    );
  }

  if (!course) {
    return <p>Khoá học không tồn tại hoặc đã bị xoá.</p>;
  }

  const isFree = !course.price_sale && !course.price_regular;
  return (
    <>
      <div className="card p-2">
        <div className="card">
          <div
            style={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={
                (course.thumbnail && getImageUrl(course.thumbnail)) ||
                "/default-thumbnail.jpg"
              }
              alt="course"
              className="rounded img-4by3-lg w-100"
            />
            {course.level && (
              <span
                className="badge bg-dark-soft"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  padding: "5px 10px",
                  backgroundColor: "white",
                }}
              >
                <div className="d-flex align-items-center gap-1">
                  {course.level}
                  {course.level == "Sơ cấp" && (
                    <svg
                      className=""
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="2"
                        height="6"
                        rx="1"
                        fill="#19cb98"
                      />
                      <rect
                        x="7"
                        y="5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#D3D3D3"
                      />
                      <rect
                        x="11"
                        y="2"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#D3D3D3"
                      />
                    </svg>
                  )}
                  {course.level == "Trung cấp" && (
                    <svg
                      className=""
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="2"
                        height="6"
                        rx="1"
                        fill="#ffaa46"
                      />
                      <rect
                        x="7"
                        y="5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#ffaa46"
                      />
                      <rect
                        x="11"
                        y="2"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#D3D3D3"
                      />
                    </svg>
                  )}
                  {course.level == "Chuyên gia" && (
                    <svg
                      className=""
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="2"
                        height="6"
                        rx="1"
                        fill="#e53f3c"
                      />
                      <rect
                        x="7"
                        y="5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#e53f3c"
                      />
                      <rect
                        x="11"
                        y="2"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#e53f3c"
                      />
                    </svg>
                  )}
                </div>
              </span>
            )}
          </div>
        </div>
        <div className="px-1 py-1">
          <h4 className="mt-1 mb-1 text-truncate-line-2">{course.title}</h4>
          <div className="d-flex mt-2">
            {isFree ? (
              <h5 className="mb-0">Miễn phí</h5>
            ) : (
              <>
                <h4 className="mb-0 text-danger">
                  {parseInt(
                    course.price_sale || course.price_regular,
                    10
                  ).toLocaleString("vi-VN")}{" "}
                  đ
                </h4>
                {course.price_sale && course.price_regular && (
                  <h6
                    className="mb-0 text-muted text-decoration-line-through"
                    style={{ marginLeft: "10px" }}
                  >
                    {parseInt(course.price_regular, 10).toLocaleString("vi-VN")}{" "}
                    đ
                  </h6>
                )}
              </>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="d-flex align-items-center">
              <img
                src={
                  course && course.user.profile_picture
                    ? getImageUrl(course.user.profile_picture)
                    : "/avatarDefault.jpg"
                }
                alt="Avatar"
                className="rounded-circle me-2"
                style={{ width: "20px" }}
              />
              <span className="mb-0 ">
                {course.lecturer?.name || "Chưa cập nhật giảng viên"}
              </span>
            </div>
            {/* <small className="fs-12">
                By: {course.lecturer?.name || "Chưa cập nhật giảng viên"}
              </small> */}
          </div>
          <div className="text-warning mt-3">
            {course.average_rating} ★ (
            {course && course.reviews_count ? course.reviews_count : 0} đánh
            giá)
          </div>
          <div className="d-flex align-items-center justify-content-between text-muted mt-2">
            <div className="d-flex align-items-center gap-1">
              <i className="bi bi-people text-secondary"></i>
              <span className="small text-dark">
                {course && course.student_count} học viên
              </span>
            </div>

            <div className="d-flex align-items-center gap-1">
              <i className="bi bi-play-circle text-secondary"></i>
              <span className="small text-dark">
                {course && course.total_lessons} bài học
              </span>
            </div>

            {/* <div className="d-flex align-items-center gap-1">
              <i className="bi bi-clock"></i>
              <span className="small">29h5p</span>
            </div> */}
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          {/* {isFree ? (
            <button
              className="btn btn-success flex-grow-1"
              onClick={handleLearn}
            >
              Đăng ký học
            </button>
          ) : (
            <button className="btn btn-primary flex-grow-1" onClick={showModal}>
              Mua khóa học
            </button>
          )} */}
          {user && course && user.id == course.lecturer.id ? (
            <Link
              to={`/lecturer/course/${course.id}/view/goals`}
              className="btn btn-primary flex-grow-1"
            >
              Xem chi tiết
            </Link>
          ) : course.isEnrollment ? (
            <Link
              to={`/student/course/${course.id}`}
              className="btn btn-primary flex-grow-1"
            >
              Học khoá học
            </Link>
          ) : isFree ? (
            <button
              className="btn btn-success flex-grow-1"
              onClick={handleLearn}
            >
              Đăng ký học
            </button>
          ) : (
            <button className="btn btn-primary flex-grow-1" onClick={showModal}>
              Mua khóa học
            </button>
          )}

          <button
            className={`btn ${
              isFavorite ? "btn-danger" : "btn-outline-danger"
            } ms-2`}
            onClick={toggleWishlist}
            title={isFavorite ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
          >
            <i
              className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}
            ></i>
          </button>
          <Modal
            open={isModalVisible}
            onCancel={handleCancel}
            width={700}
            footer={null}
          >
            <BuyCourse
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(true)}
            />
          </Modal>
        </div>
      </div>
    </>
  );
}
