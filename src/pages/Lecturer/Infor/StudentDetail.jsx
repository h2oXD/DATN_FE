// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import moment from "moment";
// import "moment/locale/vi";
// import axiosClient from "../../../api/axios";

// export default function StudentDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axiosClient.get(`/lecturer/students/${id}`);
//         setStudent(res.data.data);
//       } catch (error) {
//         console.error("Lỗi khi lấy thông tin học viên:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudent();
//   }, [id]);

//   if (loading) return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
//   if (!student) return <div className="text-center mt-5">Không tìm thấy học viên.</div>;

//   return (
//     <div className="container mt-4">
//       <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/lecturer/inforStudents")}>
//         ← Quay lại
//       </button>

//       <div className="card shadow-sm border-0 mb-4">
//         <div className="card-body">
//           <h4 className="mb-4 text-primary">Thông tin chi tiết học viên</h4>
//           <div className="row align-items-center">
//             <div className="col-md-3 text-center">
//               <img
//                 src={student.profile_picture || "/assets/images/avatar/avatar-1.jpg"}
//                 className="rounded-circle border shadow-sm"
//                 alt="avatar"
//                 width={120}
//                 height={120}
//               />
//               <h5 className="mt-3 mb-0">{student.name}</h5>
//               <small className="text-muted">
//                 {student.gender === "male" ? "Nam" : student.gender === "female" ? "Nữ" : "Khác"}
//               </small>
//             </div>

//             <div className="col-md-9">
//               <div className="row">
//                 {[
//                   { label: "Email", value: student.email },
//                   { label: "Số điện thoại", value: student.phone_number },
//                   { label: "Ngày sinh", value: student.birth_date ? moment(student.birth_date).format("LL") : null },
//                   { label: "Tỉnh/Thành phố", value: student.province },
//                   { label: "Quốc gia", value: student.country },
//                   {
//                     label: "LinkedIn",
//                     value: student.linkedin_url ? (
//                       <a href={student.linkedin_url} target="_blank" rel="noreferrer">{student.linkedin_url}</a>
//                     ) : null
//                   },
//                   {
//                     label: "Website",
//                     value: student.website_url ? (
//                       <a href={student.website_url} target="_blank" rel="noreferrer">{student.website_url}</a>
//                     ) : null
//                   },
//                   {
//                     label: "Ngày tạo tài khoản",
//                     value: moment(student.created_at).format("LLL")
//                   }
//                 ].map((item, idx) => (
//                   <div className="col-sm-6 mb-2" key={idx}>
//                     <strong>{item.label}:</strong>{" "}
//                     <span className="text-muted">{item.value || "Chưa cập nhật"}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Khóa học hiện tại */}
//       <div className="card shadow-sm border-0 mb-4">
//         <div className="card-header bg-white">
//           <strong>📚 Khóa học hiện tại</strong>
//         </div>
//         <div className="card-body">
//           {student.current_courses?.length > 0 ? (
//             <ul className="list-group list-group-flush">
//               {student.current_courses.map((course, index) => (
//                 <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
//                   <span>{course.name}</span>
//                   <span className="badge bg-success">Tiến độ: {course.progress || 0}%</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-muted mb-0">Chưa có khóa học nào.</p>
//           )}
//         </div>
//       </div>

//       {/* Lịch sử khóa học */}
//       <div className="card shadow-sm border-0">
//         <div className="card-header bg-white">
//           <strong>📖 Lịch sử khóa học</strong>
//         </div>
//         <div className="card-body">
//           {student.course_history?.length > 0 ? (
//             <ul className="list-group list-group-flush">
//               {student.course_history.map((course, index) => (
//                 <li className="list-group-item d-flex justify-content-between" key={index}>
//                   <span>{course.name}</span>
//                   <span className="text-muted">{course.progress || 0}%</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-muted mb-0">Chưa có lịch sử khóa học.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/vi";
import axiosClient from "../../../api/axios";

// React Icons
import { FaEnvelope, FaPhoneAlt, FaBirthdayCake, FaCity, FaGlobeAsia, FaLinkedin, FaGlobe, FaCalendarPlus } from "react-icons/fa";
import { getImageUrl } from "../../../api/common";

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    current_courses: [],
    course_history: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axiosClient.get(`/lecturer/students/${id}`);
        console.log("Student data:", res.data.data); // Kiểm tra toàn bộ dữ liệu trả về
      console.log("Current courses:", res.data.data.current_courses); // Kiểm tra phần current_courses
        setStudent(res.data.data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin học viên:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) return <div className="text-center mt-5">Đang tải dữ liệu...</div>;
  if (!student) return <div className="text-center mt-5">Không tìm thấy học viên.</div>;

  return (
    <div className="container mt-4">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/lecturer/inforStudents")}>
        ← Quay lại
      </button>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h3 className="mb-4 text-primary text-center">Thông tin chi tiết học viên</h3>
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <img
                src={student.profile_picture || "/assets/images/avatar/avatar-1.jpg"}
                className="rounded-circle border shadow-sm"
                alt="avatar"
                width={120}
                height={120}
              />
              <h5 className="mt-3 mb-0">{student.name}</h5>
              <small className="text-muted">
                {student.gender === "male" ? "Nam" : student.gender === "female" ? "Nữ" : "Khác"}
              </small>
            </div>

            <div className="col-md-9">
              <div className="row">
                {[
                  { label: "Email", icon: <FaEnvelope className="me-2 text-primary" />, value: student.email },
                  { label: "Số điện thoại", icon: <FaPhoneAlt className="me-2 text-success" />, value: student.phone_number },
                  { label: "Ngày sinh", icon: <FaBirthdayCake className="me-2 text-warning" />, value: student.birth_date ? moment(student.birth_date).format("LL") : null },
                  { label: "Tỉnh/Thành phố", icon: <FaCity className="me-2 text-info" />, value: student.province },
                  { label: "Quốc gia", icon: <FaGlobeAsia className="me-2 text-secondary" />, value: student.country },
                  {
                    label: "LinkedIn",
                    icon: <FaLinkedin className="me-2 text-primary" />,
                    value: student.linkedin_url ? (
                      <a href={student.linkedin_url} target="_blank" rel="noreferrer">{student.linkedin_url}</a>
                    ) : null
                  },
                  {
                    label: "Website",
                    icon: <FaGlobe className="me-2 text-dark" />,
                    value: student.website_url ? (
                      <a href={student.website_url} target="_blank" rel="noreferrer">{student.website_url}</a>
                    ) : null
                  },
                  {
                    label: "Ngày tạo tài khoản",
                    icon: <FaCalendarPlus className="me-2 text-danger" />,
                    value: moment(student.created_at).format("LLL")
                  }
                ].map((item, idx) => (
                  <div className="col-sm-6 mb-2" key={idx}>
                    <strong>{item.icon}{item.label}:</strong>{" "}
                    <span className="text-muted">{item.value || "Chưa cập nhật"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
{/* Khóa học hiện tại */}
<div className="card shadow-sm border-0 mb-4">
  <div className="card-header bg-white d-flex align-items-center">
    <strong className="me-2">📚 Khóa học hiện tại</strong>
  </div>
  <div className="card-body">
    {student.current_courses && student.current_courses.length > 0 ? (
      <div className="row g-3">
        {student.current_courses.map((course, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border rounded-3">
              <img
                                src={getImageUrl(course.thumbnail)}
                                
                                className="card-img-top"
                              />
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-2">{course.title}</h5>
                <p className="mb-2 text-muted small">
                  Ngày đăng ký: {moment(course.enrolled_at).format("DD/MM/YYYY")}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-success">Tiến độ: {course.progress_percent || 0}%</span>
                  <span className={`badge ${course.progress_status === "in_progress" ? "bg-info" : "bg-secondary"}`}>
                    {course.progress_status === "in_progress" ? "Đang học" : "Khác"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-muted mb-0">Chưa có khóa học nào.</p>
    )}
  </div>
</div>


      {/* Lịch sử khóa học */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white">
          <strong>📖 Lịch sử khóa học</strong>
        </div>
        <div className="card-body">
          {student.course_history?.length > 0 ? (
            <ul className="list-group list-group-flush">
              {student.course_history.map((course, index) => (
                <li className="list-group-item d-flex justify-content-between" key={index}>
                  <span>{course.name}</span>
                  <span className="text-muted">{course.progress || 0}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted mb-0">Chưa có lịch sử khóa học.</p>
          )}
        </div>
      </div>
    </div>
  );
}
