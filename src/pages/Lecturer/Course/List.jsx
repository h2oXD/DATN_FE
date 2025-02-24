import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Modal, Skeleton } from "antd";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axiosClient from "../../../api/axios";
import { useLecturerContext } from "../../../contexts/LecturerProvider";
import { getImageUrl } from "../../../api/common";
import { format } from 'date-fns';

export default function List() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const { categories } = useLecturerContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        const res = await axiosClient.get(`lecturer/courses?page=${page}`);
        console.log(res.data.courses);
        setCourses(res.data.courses.data);
        setTotalPages(res.data.courses.last_page);
      } catch (error) {
        console.log(error);
        toast.error("Gọi Api danh sách khoá học của giảng viên thất bại");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, [page]);

  const formik = useFormik({
    initialValues: {
      title: "",
      category_id: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Tiêu đề không được để trống").max(50, "Tiêu đề không được vượt quá 50 ký tự"),
      category_id: Yup.string().required("Danh mục không được để trống"),
    }),
    onSubmit: async (values) => {
      if (isLoading === true) return;
      setIsLoading(true);
      console.log(values);
      await axiosClient
        .post("/lecturer/courses", values)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          navigate(`/lecturer/course/${res.data.course_id}/edit`);
        })
        .catch((errors) => {
          if (errors.status == 422) {
            const errorsMessageServe = errors.response.data.errors;
            console.log(errorsMessageServe);
          } else {
            console.log(errors);
          }
          toast.error("Gửi request đến Api thêm mới khoá học thất bại");
          setIsLoading(false);
        });
    },
  });
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (isLoading)
    return (
      <div className="card p-5">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );

  return (
    <div className="card">
      <div className="card-header d-flex">
        <h3 className="mb-0">Tất cả khoá học</h3>
      </div>
      <div className="card-body">
        <form className="row gx-3">
          <div className="col-lg-7 col-md-4 col-12 mb-lg-0 mb-2">
            <input
              type="search"
              className="form-control"
              placeholder="Tìm kiếm khoá học"
            />
          </div>
          <div className="col-lg-3 col-md-4 mb-lg-0 mb-2 col-12">
            <select className="form-select">
              <option value="">Tất cả khoá học</option>
              <option value="">Mới nhất</option>
              <option value="">Cũ nhất</option>
              <option value="">Bản nháp</option>
              <option value="">Đã duyệt</option>
              <option value="">Chờ duyệt</option>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-4 col-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Tạo mới khoá học
            </button>
            <Modal
              open={isModalOpen}
              onCancel={() => {
                setIsModalOpen(false); // Đóng modal
                formik.resetForm(); // Xoá message validate khi đóng modal
              }}
              footer={null} // Ẩn nút OK & Cancel mặc định
            >
              <h3 className="text-center">Tạo mới khoá học</h3>
              <form className="row" onSubmit={formik.handleSubmit}>
                <div className="mb-3 col-12">
                  <div className="d-flex">
                    <label htmlFor="addCourseTitle" className="form-label">
                      Tiêu đề
                    </label>
                    <small className="ms-1 text-danger">*</small>
                    {formik.errors.title && formik.touched.title && (
                      <span className="text-danger mx-3">
                        {formik.errors.title}
                      </span>
                    )}
                  </div>
                  <input
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    type="text"
                    className="form-control"
                    id="addCourseTitle"
                    placeholder="Tiêu đề của khoá học"
                  />
                  <small className="ms-1">
                    Nếu bạn không nghĩ ra được một tiêu đề hay ngay bây giờ. Bạn
                    có thể thay đổi sau.
                  </small>
                </div>
                <div className="mb-3 col-12">
                  <div className="d-flex">
                    <label htmlFor="" className="form-label">
                      Danh mục
                    </label>
                    <small className="ms-1 text-danger">*</small>
                    {formik.errors.category_id && formik.touched.category_id && (
                      <span className="text-danger mx-3">
                        {formik.errors.category_id}
                      </span>
                    )}
                  </div>
                  <select
                    name="category_id"
                    value={formik.values.category_id}
                    onChange={formik.handleChange}
                    className="form-select text-dark"
                  >
                    <option value="">Chọn một danh mục</option>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Đang tải danh mục...</option>
                    )}
                  </select>
                  <small className="ms-1">
                    Nếu không chắc chắn về thể loại phù hợp, bạn có thể thay đổi
                    sau.
                  </small>
                </div>
                <div>
                  <button
                    type="submit"
                    className="h-100 w-100 btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault(); // Ngăn chặn hành vi mặc định của button
                      formik.handleSubmit(); // Submit form trước khi chuyển trang
                    }}
                    disabled={!formik.values.title || !!formik.errors.title}
                  >
                    Tiếp tục
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </form>
        <div className="row mt-1">
          {courses.length == 0 ? (
            <><div className="col-12 text-center mt-5 p-5">
              <h4>Không có khóa học nào.</h4>
            </div></>
          ) : (
            courses.map((course, index) => (
              <div className="col-lg-3 col-12 mt-3" key={index}>
                <div className="card d-flex rounded shadow-none">
                  <div className="p-2">
                    {course.thumbnail ? (
                      <Link>
                        <img
                          src={
                            getImageUrl(course.thumbnail) ??
                            "/default-thumbnail.jpg"
                          }
                          alt="course"
                          className="rounded img-4by3-lg w-100"
                        />
                      </Link>
                    ) : (
                      <Link>
                        <img
                          src={course.thumbnail ?? "/default-thumbnail.jpg"}
                          alt="course"
                          className="rounded img-4by3-lg w-100"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="px-2 py-1">
                    <h4 className="m-0 h5">
                      <div className="d-flex justify-content-between">
                        <div>
                          <Link className="text-inherit">{course.title}</Link>
                        </div>
                        <div>
                          <span>
                            {course.status == "draft" && (
                              <span className="badge bg-dark-soft">
                                Bản nháp
                              </span>
                            )}
                            {course.status == "pending" && (
                              <span className="badge bg-warning-soft">
                                Chờ duyệt
                              </span>
                            )}
                            {course.status == "published" && (
                              <span className="badge bg-success-soft">
                                Đã xuất bản
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </h4>
                    <ul className="list-inline fs-6 mb-0 d-flex justify-content-between align-items-center pb-2">
                      <li className="list-inline-item d-flex flex-column">
                        <span>Ngày tạo: {format(new Date(course.created_at), 'dd/MM/yyyy')}</span>
                        <span>Danh mục: {course.category.name}</span>
                      </li>
                      <li className="list-inline-item">
                        {course.status == "draft" && (
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle text-dark"
                              href="#"
                              role="button"
                              id="courseDropdown"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="tw-size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                              </svg>
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="courseDropdown"
                            >
                              <span className="dropdown-header">Setting</span>
                              <Link
                                className="dropdown-item"
                                to={`/lecturer/course/${course.id}/edit/basic`}
                              >
                                <i className="fe fe-edit dropdown-item-icon text-dark"></i>
                                Cập nhật
                              </Link>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon text-dark"></i>
                                Xoá
                              </a>
                            </span>
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-5 d-flex justify-content-end">
          <ul className="pagination mb-0">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link mx-1 rounded"
                onClick={() => handlePageChange(page - 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${page === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link mx-1 rounded"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${page === totalPages ? "disabled" : ""}`}
            >
              <button
                className="page-link mx-1 rounded"
                onClick={() => handlePageChange(page + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
