// import { FaEdit, FaFileAlt, FaUsers, FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import EditInfLecturers from "./EditInfLecturers";

// export default function InforLecturer() {
//   return (
//     <>
//       <div className="row">
//         {/* <!-- Chi tiết cá nhân --> */}
//         <div className="col-md-4">
//           <div className="card p-3">
//             <div className="text-center">
//               <img
//                 src="../assets/images/avatar/avatar-1.jpg"
//                 alt="avatar"
//                 className="rounded-circle avatar-xxl border-white border border-4 position-relative "
//               />
//               <h3 className="mt-3">Le Thi Thu Trang (FPL HN)</h3>
//               <h5>Chuyên ngành: Công nghệ thông tin</h5>
//               <h5>Email: giangviena@gmail.com</h5>
//               <h5>SĐT: 0123456789</h5>
//             </div>
//             <Link
//               className="position-absolute top-0 end-0 m-2"
//               style={{ fontSize: "1.2rem", color: "#333" }}
//               data-bs-toggle="modal"
//               data-bs-target="#editProfileModal"
//             >
//               <FaEdit />
//               <EditInfLecturers />
//             </Link>
//           </div>
//         </div>

//         <div className="col-md-8">
//           <div className="card border-0">
//             <div className="card-header">
//               <h4 className="mb-0">
//                 My Courses
//                 <span className="fs-6">(12)</span>
//               </h4>
//             </div>

//             <div className="card-body">
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item px-0 pb-3 pt-0">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <a href="#">
//                       <div className="d-lg-flex align-items-center">
//                         <div>
//                           <img
//                             src="../assets/images/course/course-wordpress.jpg"
//                             alt="course"
//                             className="rounded img-4by3-lg"
//                           />
//                         </div>
//                         <div className="ms-lg-3 mt-2 mt-lg-0">
//                           <h4 className="text-primary-hover">
//                             Create a Website with WordPress
//                             <span className="badge bg-success-soft">New</span>
//                           </h4>
//                           <ul className="list-inline fs-6 mb-0 text-inherit">
//                             <li className="list-inline-item">
//                               <span className="align-text-bottom">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="10"
//                                   height="10"
//                                   fill="currentColor"
//                                   className="bi bi-clock"
//                                   viewBox="0 0 16 16"
//                                 >
//                                   <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
//                                   <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
//                                 </svg>
//                               </span>
//                               <span>3h 30m</span>
//                             </li>
//                             <li className="list-inline-item">
//                               <svg
//                                 className="mt-n1"
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 16 16"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <rect
//                                   x="3"
//                                   y="8"
//                                   width="2"
//                                   height="6"
//                                   rx="1"
//                                   fill="#754FFE"
//                                 ></rect>
//                                 <rect
//                                   x="7"
//                                   y="5"
//                                   width="2"
//                                   height="9"
//                                   rx="1"
//                                   fill="#DBD8E9"
//                                 ></rect>
//                                 <rect
//                                   x="11"
//                                   y="2"
//                                   width="2"
//                                   height="12"
//                                   rx="1"
//                                   fill="#DBD8E9"
//                                 ></rect>
//                               </svg>
//                               Beginner
//                             </li>
//                             <li className="list-inline-item">
//                               <span className="lh-1">
//                                 <span className="fs-6 align-text-top">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="9"
//                                     height="9"
//                                     fill="currentColor"
//                                     className="bi bi-star-fill text-warning"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                                   </svg>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="9"
//                                     height="9"
//                                     fill="currentColor"
//                                     className="bi bi-star-fill text-warning"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                                   </svg>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="9"
//                                     height="9"
//                                     fill="currentColor"
//                                     className="bi bi-star-fill text-warning"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                                   </svg>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="9"
//                                     height="9"
//                                     fill="currentColor"
//                                     className="bi bi-star-fill text-warning"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                                   </svg>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="9"
//                                     height="9"
//                                     fill="currentColor"
//                                     className="bi bi-star-fill text-warning"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                                   </svg>
//                                 </span>
//                                 <span className="text-warning">4.5</span>
//                               </span>
//                               <span>(1,345)</span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </a>
//                     <div>
//                       <span className="dropdown dropstart">
//                         <a
//                           className="text-reset"
//                           href="#"
//                           role="button"
//                           id="courseDropdown"
//                           data-bs-toggle="dropdown"
//                           data-bs-offset="-20,20"
//                           aria-expanded="true"
//                         >
//                           <i className="fe fe-more-vertical"></i>
//                         </a>
//                         <span
//                           className="dropdown-menu"
//                           aria-labelledby="courseDropdown"
//                         >
//                           <span className="dropdown-header">Share</span>
//                           <a className="dropdown-item" href="#">
//                             <span className="me-2">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="12"
//                                 height="12"
//                                 fill="currentColor"
//                                 className="bi bi-facebook text-secondary"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                               </svg>
//                             </span>
//                             <span>Facebook</span>
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             <span className="me-2">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="12"
//                                 height="12"
//                                 fill="currentColor"
//                                 className="bi bi-twitter text-secondary"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                               </svg>
//                             </span>
//                             <span>Twitter</span>
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             <span className="me-2">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="12"
//                                 height="12"
//                                 fill="currentColor"
//                                 className="bi bi-linkedin text-secondary"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                               </svg>
//                             </span>
//                             <span>Linked</span>
//                             In
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             <span className="me-2">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 fill="currentColor"
//                                 className="bi bi-copy text-secondary "
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path
//                                   fill-rule="evenodd"
//                                   d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"
//                                 />
//                               </svg>
//                             </span>
//                             <span>Copy</span>
//                             Link
//                           </a>
//                         </span>
//                       </span>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-2">
//         <div className="col-md-4">
//           <div className="card p-5">
//             <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
//               <div>
//                 <h5 className="mb-0">32</h5>
//                 <p className="text-muted mb-0">Khóa học</p>
//               </div>
//               <FaFileAlt size={20} />
//             </div>
//             <div className="d-flex justify-content-between align-items-center border-bottom py-2">
//               <div>
//                 <h5 className="mb-0">11,604</h5>
//                 <p className="text-muted mb-0">Tổng số học viên</p>
//               </div>
//               <FaUsers size={20} />
//             </div>
//             <div className="d-flex justify-content-between align-items-center pt-2">
//               <div>
//                 <h5 className="mb-0">12,230</h5>
//                 <p className="text-muted mb-0">Đánh giá</p>
//               </div>
//               <FaStar size={20} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";
import { FaFileAlt, FaUsers, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditInfor from "../Profile/EditInfor";
// import EditInfor from "./EditInfor";

export default function InforLecturer() {
  // State lưu trữ dữ liệu từ API
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [statistics, setStatistics] = useState(null);

  // Gọi API khi component được render
  useEffect(() => {
    // Lấy thông tin cá nhân giảng viên
    axiosClient
      .get("/user")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Lỗi lấy thông tin giảng viên:", error));

    // Lấy danh sách khóa học
    axiosClient
      .get("/lecturer/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Lỗi lấy danh sách khóa học:", error));

    // Lấy số lượng học viên & đánh giá
    axiosClient
      .get("/lecturer/statistics")
      .then((response) => setStatistics(response.data))
      .catch((error) => console.error("Lỗi lấy thống kê:", error));
  }, []);

  return (
    <>
      <div className="row">
        {/* Thông tin cá nhân */}
        <div className="col-md-4">
          <div className="card p-3">
            <div className="text-center">
              <img
                                                alt="avatar"
                                                src={
                                                  user && user.profile_picture
                                                    ? getImageUrl(user.profile_picture)
                                                    : "/avatarDefault.jpg"
                                                }
                                                className="rounded-circle tw-w-32 tw-ml-26 tw-my-2"
                                              />
              <h3 className="mt-3">{user?.name || "Đang tải..."}</h3>
              
              <h5>Email: {user?.email || "Chưa cập nhật"}</h5>
              <h5>SĐT: {user?.phone_number || "Chưa cập nhật"}</h5>
            </div>
            <Link
              className="position-absolute top-0 end-0 m-2"
              style={{ fontSize: "1.2rem", color: "#333" }}
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              <EditInfor />
            </Link>
          </div>
        </div>

        {/* Danh sách khóa học */}
        <div className="col-md-8">
          <div className="card border-0">
            <div className="card-header">
              <h4 className="mb-0">
                My Courses <span className="fs-6">({courses.length})</span>
              </h4>
            </div>

            <div className="card-body">
              <ul className="list-group list-group-flush">
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <li key={course.id} className="list-group-item px-0 pb-3 pt-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <a href="#">
                          <div className="d-lg-flex align-items-center">
                            <div>
                              <img
                                src={course.image || "../assets/images/course/course-css.jpg"}
                                alt={course.title}
                                className="rounded img-4by3-lg"
                              />
                            </div>
                            <div className="ms-lg-3 mt-2 mt-lg-0">
                              <h4 className="text-primary-hover">{course.title}</h4>
                              <p className="mb-0">{course.duration || "Không có thời lượng"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Không có khóa học nào.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Thống kê */}
      <div className="row mt-2">
        <div className="col-md-4">
          <div className="card p-5">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
              <div>
                <h5 className="mb-0">{courses.length}</h5>
                <p className="text-muted mb-0">Khóa học</p>
              </div>
              <FaFileAlt size={20} />
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-2">
              <div>
                <h5 className="mb-0">{statistics?.students || 0}</h5>
                <p className="text-muted mb-0">Tổng số học viên</p>
              </div>
              <FaUsers size={20} />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-2">
              <div>
                <h5 className="mb-0">{statistics?.average_rating || 0}</h5>
                <p className="text-muted mb-0">Đánh giá</p>
              </div>
              <FaStar size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

