// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUsers, FaEye, FaClock } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import EditInfor from "./EditInfor";

// const ProfileStudent = () => {
//   return (
//     <div className=" py-5">
//       <div className="row">
//         {/* Thông tin cá nhân */}
//         <div className="col-md-4">
//           <div className="card p-4 border-0 shadow-sm text-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
//               className="rounded-circle img-fluid mx-auto mb-3 w-30"
//               alt="User Avatar"
//             />
//             <h4 className="fw-bold">Nguyen Thi Hong Nhung (FPL HN)</h4>
//             <p className="text-muted">@thihongnhungfplhnnguyen</p>
//             <p className="small text-secondary">
//               0 người theo dõi · 0 đang theo dõi
//             </p>
//             <p className="small text-secondary">Tham gia từ 9 ngày trước</p>
//             <Link
//               className="position-absolute top-0 end-0 m-2"
//               style={{ fontSize: "1.2rem", color: "#333" }}
//               data-bs-toggle="modal"
//               data-bs-target="#editProfileModal"
//             >
//               <EditInfor />
//             </Link>
//           </div>
//         </div>

//         {/* Danh sách khóa học */}
//         <div className="col-md-8">
//           <div className="card border-0 shadow-sm p-4">
//             <h4 className="fw-bold mb-4 position-relative d-inline-block pb-2">
//               Khóa học đã đăng ký (1)
//               <span
//                 className="position-absolute start-0 bottom-0 w-100"
//                 style={{
//                   height: "4px",
//                   background: "linear-gradient(to right, #ff7eb3, #ff758c)",
//                   borderRadius: "2px",
//                 }}
//               ></span>
//             </h4>

//             {/* Card khóa học */}
//             <div
//               className="card border-0 shadow-sm rounded-4 overflow-hidden"
//               style={{ maxWidth: "300px" }}
//             >
//               {/* Hình ảnh khóa học */}
//               <div className="position-relative">
//                 <img
//                   src=" /default-thumbnail.jpg"
//                   className="img-fluid w-100"
//                   alt="Course Thumbnail"
//                   style={{ height: "150px", objectFit: "cover" }}
//                 />
//               </div>

//               {/* Nội dung khóa học */}
//               <div className="p-3">
//                 <h5 className="mb-2" style={{ fontSize: "1rem" }}>
//                   Kiến Thức Nhập Môn IT
//                 </h5>
//                 <p
//                   className="text-danger fw-bold mb-2"
//                   style={{ fontSize: "0.9rem" }}
//                 >
//                   Miễn phí
//                 </p>

//                 {/* Thông tin khóa học */}
//                 <div className="d-flex justify-content-between text-muted small">
//                   <span>
//                     <FaUsers className="me-1" /> 133.464
//                   </span>
//                   <span>
//                     <FaEye className="me-1" /> 9
//                   </span>
//                   <span>
//                     <FaClock className="me-1" /> 3h12p
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileStudent;

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaUsers,  FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

import EditInfor from "./EditInfor";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";

const ProfileStudent = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch user information
    axiosClient.get("/user").then((response) => {
      setUser(response.data);
    });
   
    // Fetch user courses
    axiosClient.get("/user/courses").then((response) => {
      if (response.data.status === "success") {
        setCourses(response.data.data);
      }
    });
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };


  return (
    <div className="py-5">
      <div className="row">
        {/* Thông tin cá nhân */}
        <div className="col-md-4">
          <div className="card p-4 border-0 shadow-sm text-center">
            
                                <img
                                  alt="avatar"
                                  src={
                                    user && user.profile_picture
                                      ? getImageUrl(user.profile_picture)
                                      : "/avatarDefault.jpg"
                                  }
                                  className="rounded-circle tw-w-32 tw-ml-36 tw-my-2"
                                />
                              
            <h4 className="fw-bold">{user?.name || "Tên người dùng"}</h4>
            <p className="small text-secondary">Phone: {user?.phone_number}</p>
            <p className="text-muted">Email: {user?.email || "username"}</p>
            
            <p className="small text-secondary">
              {user?.followers || 0} người theo dõi · {user?.following || 0} đang theo dõi
            </p>
            
            <p className="small text-secondary">Tham gia từ {formatDate(user?.created_at)}</p>
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
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-4 position-relative d-inline-block pb-2">
              Khóa học đã đăng ký ({courses.length})
              <span
                className="position-absolute start-0 bottom-0 w-100"
                style={{
                  height: "4px",
                  background: "linear-gradient(to right, #ff7eb3, #ff758c)",
                  borderRadius: "2px",
                }}
              ></span>
            </h4>

            {/* Danh sách khóa học */}
            <div className="row">
              {courses.map((course) => (
                <div key={course.id} className="col-md-4 mb-2">
                  <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="position-relative">
                      {/* <img
                        src={course.course.thumbnail || "/default-thumbnail.jpg"}
                        className="img-fluid w-100"
                        alt="Course Thumbnail"
                        style={{ height: "150px", objectFit: "cover" }}
                      /> */}
                      <img                    
                                          src={
                                            (getImageUrl(course.course.thumbnail)) ||
                                            "/default-thumbnail.jpg"
                                          }
                                          alt="Course Thumbnail"
                                          className="rounded img-4by3-lg w-100"
                                        />
                    </div>
                    <div className="p-3">
                      <h5 className="mb-2" style={{ fontSize: "1rem" }}>
                        {course.course.title}
                      </h5>
                      <div className="mb-2">
  <div className="d-flex justify-content-between align-items-center mb-1">
    <small className="text-muted">Tiến độ hoàn thành</small>
    <small className="fw-semibold text-primary">
      {parseInt(course.progress.progress_percent)}%
    </small>
  </div>
  <div className="progress rounded-pill" style={{ height: "10px" }}>
    <div
      className="progress-bar bg-info"
      role="progressbar"
      style={{ width: `${parseInt(course.progress.progress_percent)}%` }}
      aria-valuenow={parseInt(course.progress.progress_percent)}
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</div>

                  
                      {/* <p className="text-danger fw-bold mb-2" style={{ fontSize: "0.9rem" }}>
                        {course.course.price_sale ? `${course.course.price_sale} VNĐ` : "Miễn phí"}
                      </p> */}
                      {/* <div className="d-flex justify-content-between text-muted small"> */}
                        {/* <span>
                          <FaUsers className="me-1" /> {course.progress.completed_lessons}/{course.progress.total_lessons}
                        </span> */}
                        {/* <span>
                          <FaClock className="me-1" /> {course.progress.progress_percentage}% hoàn thành
                        </span> */}
                      {/* </div> */}
                      
                    </div>
                    
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudent;
