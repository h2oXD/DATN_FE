// import { useEffect } from "react";
// import axiosClient from "../../../api/axios";

// export default function InforStudent() {
//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const res = await axiosClient.get(`/lecturer-course-student-infor`)
//         console.log(res);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetch()
//   }, [])
//   return (
//     <>
//       <div className="d-flex">
//         <div className="col-lg-12 col-md-8 col-12">
//           {/* <!-- Card --> */}
//           <div className="card mb-4">
//             {/* <!-- Card body --> */}
//             <div className="p-4 d-flex justify-content-between align-items-center">
//               <div>
//                 <h3 className="mb-0">Học viên của tôi</h3>
//                 <span>Học viên tham gia khóa học </span>
//               </div>
//             </div>
//           </div>
//           {/* <!-- Tab content --> */}
//           <div className="tab-content">
//             <div
//               className="tab-pane fade show active pb-4"
//               id="tabPaneGrid"
//               role="tabpanel"
//               aria-labelledby="tabPaneGrid"
//             >
//               <div className="row">
//                 <div className="col-lg-12 col-md-12 col-12 mb-2">
//                   {/* <!-- Content --> */}
//                   <div className="row">
//                     <div className="col pe-0">
//                       <form>
//                         <input
//                           type="search"
//                           className="form-control"
//                           placeholder="Tìm kiếm theo tên"
//                         />
//                       </form>
//                     </div>

//                     <div className="col-auto">
//                       <select className="form-select">
//                         <option value="">Nhập môn lập trình</option>
//                         <option value="">
//                           Lập trình cơ sở với JavaScript
//                         </option>
//                         <option value="">
//                           Lập trình JavaScript nâng cao
//                         </option>
//                         <option value="">Thiết kế UI/UX</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <div className="text-center">
//                         <img
//                           src="../assets/images/avatar/avatar-3.jpg"
//                           className="rounded-circle avatar-xl mb-3"
//                           alt="avatar"
//                         />
//                         <h4 className="mb-1">Học viên A</h4>
//                         <p className="mb-0">
//                           <i className="fe fe-map-pin me-1"></i>
//                           Hà Nội
//                         </p>
//                       </div>
//                       <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
//                         <span>Thời gian đăng ký</span>
//                         <span className="text-dark">3/12/2020</span>
//                       </div>
//                       <div className="d-flex justify-content-between pt-2 fs-6">
//                         <span>Tiến độ</span>
//                         <span className="text-success">0%</span>
//                       </div>

//                       <div className="d-flex justify-content-center mt-2">
//                         <a
//                           href="#"
//                           className="btn btn-sm btn-outline-secondary m-1"
//                         >
//                           Xem thông tin
//                         </a>
//                         {/* <a
//                           href="#"
//                           className="btn btn-sm btn-outline-secondary m-1"
//                         >
//                           Nhắn tin
//                         </a> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axios";


export default function InforStudent() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosClient.get(`/lecturer/getAll`);
        
        console.log(res.data.students);
        setStudents(res.data.students); // 👈 Lấy từ "students" trong response
      } catch (error) {
        console.error("Lỗi khi lấy danh sách học viên:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="col-lg-12 col-md-8 col-12">
          <div className="card mb-4">
            <div className="p-4 d-flex justify-content-between align-items-center">
              <div>
                <h3 className="mb-0">Học viên của tôi</h3>
                <span>Học viên tham gia khóa học</span>
              </div>
            </div>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade show active pb-4">
              <div className="row">
                {students.map((student) => (
                  <div className="col-lg-3 col-md-6 col-12" key={student.id}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="text-center">
                        <img
                                                alt="avatar"
                                                src={
                                                  student && student.profile_picture
                                                    ? getImageUrl(student.profile_picture)
                                                    : "/avatarDefault.jpg"
                                                }
                                                className="rounded-circle tw-w-32 tw-ml-26 tw-my-2"
                                              />
                          <h4 className="mb-1">{student.name}</h4>
                          {/* <p className="mb-0">
                            <i className="fe fe-map-pin me-1"></i>
                            {student.province || "Không rõ"}
                          </p> */}
                          <h5>Email: {student?.email || "Chưa cập nhật"}</h5>
              <h5>SĐT: {student?.phone_number || "Chưa cập nhật"}</h5>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                          {/* <span>Ngày tạo</span> */}
                          {/* <span className="text-dark">
                            {student.created_at?.substring(0, 10) || "N/A"}
                          </span> */}
                        </div>

                        <div className="d-flex justify-content-center mt-2">
  <button
    className="btn btn-sm btn-outline-secondary m-1 "
    onClick={() => navigate(`/lecturer/students/${student.id}`)}
  >
    Xem thông tin
  </button>
</div>
                      </div>
                    </div>
                  </div>
                ))}
                {students.length === 0 && (
                  <div className="text-center mt-4">Không có học viên nào.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

