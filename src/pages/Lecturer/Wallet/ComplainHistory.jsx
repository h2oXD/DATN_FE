// import { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import {
//   FaExclamationTriangle,
//   FaCheckCircle,
//   FaClock,
//   FaEye,
//   FaInfoCircle,
// } from "react-icons/fa";

// const ComplaintHistory = () => {
//   const [complaints, setComplaints] = useState([
//     {
//       id: 1,
//       status: "pending",
//       attempts: 0,
//       details: "Khiếu nại về bài giảng không hợp lệ.",
//     },
//     {
//       id: 2,
//       status: "success",
//       attempts: 0,
//       details: "Khiếu nại về hoàn tiền đã được xử lý thành công.",
//     },
//     {
//       id: 3,
//       status: "failed",
//       attempts: 0,
//       details: "Khiếu nại không đủ điều kiện để xử lý.",
//     },
//   ]);

//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showWarningModal, setShowWarningModal] = useState(false);
//   const [showDetailModal, setShowDetailModal] = useState(false);

//   const handleCancelClick = (complaint) => {
//     if (complaint.attempts >= 2) {
//       setShowWarningModal(true);
//     } else {
//       setSelectedComplaint(complaint);
//       setShowConfirmModal(true);
//     }
//   };

//   const confirmCancel = () => {
//     setComplaints((prevComplaints) =>
//       prevComplaints.map((c) =>
//         c.id === selectedComplaint.id ? { ...c, attempts: c.attempts + 1 } : c
//       )
//     );
//     setShowConfirmModal(false);
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="text-primary mb-3">Lịch sử Khiếu Nại</h3>
//       <div className="card shadow-lg border-0 rounded-3">
//         <div className="card-body">
//           <table className="table table-bordered text-center">
//             <thead className="table-primary">
//               <tr>
//                 <th>#</th>
//                 <th>Trạng thái</th>
//                 <th>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               {complaints.map((complaint, index) => (
//                 <tr key={complaint.id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     {complaint.status === "pending" && (
//                       <span className="badge bg-warning text-dark">
//                         <FaClock className="me-1" /> Đang xử lý
//                       </span>
//                     )}
//                     {complaint.status === "success" && (
//                       <span className="badge bg-success">
//                         <FaCheckCircle className="me-1" /> Thành công
//                       </span>
//                     )}
//                     {complaint.status === "failed" && (
//                       <span className="badge bg-danger">
//                         <FaExclamationTriangle className="me-1" /> Thất bại
//                       </span>
//                     )}
//                   </td>
//                   <td>
//                     <Button
//                       variant="primary"
//                       className="me-2"
//                       onClick={() => {
//                         setSelectedComplaint(complaint);
//                         setShowDetailModal(true);
//                       }}
//                     >
//                       <FaEye /> Xem chi tiết
//                     </Button>
//                     <Button
//                       variant="danger"
//                       onClick={() => handleCancelClick(complaint)}
//                     >
//                       Hủy
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal xác nhận hủy */}
//       <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Xác nhận hủy khiếu nại</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Bạn có chắc chắn muốn hủy khiếu nại này?</Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="secondary"
//             onClick={() => setShowConfirmModal(false)}
//           >
//             Đóng
//           </Button>
//           <Button variant="danger" onClick={confirmCancel}>
//             Xác nhận hủy
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal cảnh báo */}
//       <Modal
//         show={showWarningModal}
//         onHide={() => setShowWarningModal(false)}
//         centered
//       >
//         <Modal.Header closeButton className="bg-danger ">
//           <Modal.Title className="tw-text-white">
//             <FaExclamationTriangle className="me-2 tw-text-white" />
//             Cảnh báo
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-danger bg-light fw-bold text-center">
//           <FaExclamationTriangle className="me-2" />
//           Bạn không thể hủy khiếu nại này nữa!
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={() => setShowWarningModal(false)}>
//             Đóng
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal chi tiết khiếu nại */}
//       <Modal
//         show={showDetailModal}
//         onHide={() => setShowDetailModal(false)}
//         centered
//       >
//         <Modal.Header closeButton className="bg-primary">
//           <Modal.Title className="tw-text-white">
//             <FaInfoCircle className="me-2" />
//             Chi tiết Khiếu Nại
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="bg-light">
//           {selectedComplaint ? (
//             <div className="p-3 border rounded bg-white shadow-sm">
//               <h5 className="text-dark">Mô tả chi tiết:</h5>
//               <p className="text-muted">
//                 {selectedComplaint.details || "Không có thông tin."}
//               </p>
//             </div>
//           ) : (
//             <p className="text-danger">Không tìm thấy dữ liệu khiếu nại.</p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
//             Đóng
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ComplaintHistory;

import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaInfoCircle,
} from "react-icons/fa";
import axiosClient from "../../../api/axios";
import { getImageUrl } from "../../../api/common";
//import { toast } from "react-toastify";

const ComplaintHistory = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  //const [isCanceling, setIsCanceling] = useState(false);

  useEffect(() => {
    axiosClient
      .get("/lecturer/wallet/complain")
      .then((response) => {
        if (response.data.status === "success") {
          setComplaints(response.data["Danh sách khiếu nại"]);
          console.log("Dữ liệu API trả về:", response.data); // Kiểm tra dữ liệu
        }
      })
      .catch((error) => console.error("Error fetching complaints:", error));
  }, []);

  // Lấy chi tiết khiếu nại
  const fetchComplaintDetail = async (complaintId) => {
    try {
      const response = await axiosClient.get(
        `/lecturer/wallet/complains/${complaintId}`
      );
      console.log("Dữ liệu API trả về:", response.data); // Kiểm tra dữ liệu

      if (response.data.status === "success") {
        setSelectedComplaint(response.data["Chi tiết yêu cầu khiếu nại"]);
        setShowDetailModal(true);
      }
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết khiếu nại:", error);
    }
  };

  // Hủy khiếu nại
  // const cancelComplaint = async (complaintId) => {
  //   if (!window.confirm("Bạn có chắc chắn muốn hủy khiếu nại này?")) return;
  //   setIsCanceling(true);

  //   try {
  //     const response = await axiosClient.put(
  //       `/lecturer/wallet/complain/${complaintId}/cancel`
  //     );

  //     if (response.data.status === "success") {
  //       toast.success("Bạn đã hủy khiếu nại thành công!");

  //       // Cập nhật trạng thái khiếu nại thành "canceled" thay vì xóa khỏi danh sách
  //       setComplaints((prevComplaints) =>
  //         prevComplaints.map((c) =>
  //           c.id === complaintId ? { ...c, status: "canceled" } : c
  //         )
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error canceling complaint:", error);
  //     toast.error("Hủy khiếu nại thất bại. Vui lòng thử lại.");
  //   } finally {
  //     setIsCanceling(false);
  //   }
  // };

  return (
    <div className="container mt-4">
      <h3 className="text-primary mb-3">Lịch sử Khiếu Nại</h3>
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body">
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Trạng thái</th>
                <th>Ngày yêu cầu</th>
                <th>Số tiền hoàn</th>
                <th>Phản hồi từ Admin</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr key={complaint.id}>
                  <td>{index + 1}</td>
                  <td>
                    {complaint.status === "pending" ? (
                      <span className="badge bg-warning text-dark">
                        <FaClock className="me-1" /> Đang xử lý
                      </span>
                    ) : ["success", "resolved"].includes(complaint.status) ? (
                      <span className="badge bg-success">
                        <FaCheckCircle className="me-1" /> Thành công
                      </span>
                    ) : ["failed", "rejected"].includes(complaint.status) ? (
                      <span className="badge bg-danger">
                        <FaExclamationTriangle className="me-1" /> Thất bại
                      </span>
                    ) : (
                      <span className="badge bg-secondary">Không xác định</span>
                    )}
                  </td>

                  <td>
                    {complaint.request_date
                      ? new Date(complaint.request_date).toLocaleString("vi-VN")
                      : "N/A"}
                  </td>
                  <td>
                    {complaint.money_refund !== null &&
                    !isNaN(Number(complaint.money_refund))
                      ? `${Number(complaint.money_refund).toLocaleString(
                          "vi-VN"
                        )} VND`
                      : "Đang cập nhật..."}
                  </td>

                  {/* <img
                    src={getImageUrl(complaint.proof_img)}
                    alt="Bằng chứng khiếu nại"
                    style={{
                      width: "100px",
                      height: "100px",
                      // borderRadius: "8px",
                      // border: "1px solid #ddd",
                    }}
                  /> */}

                  <td>{complaint.feedback_by_admin || "Chưa có phản hồi"}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => fetchComplaintDetail(complaint.id)}
                    >
                      <FaEye /> Xem chi tiết
                    </Button>
                    {/* <Button
                      variant="danger"
                      disabled={isCanceling}
                      onClick={() => cancelComplaint(complaint.id)}
                    >
                      Hủy
                    </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal chi tiết khiếu nại */}
      <Modal
        show={showDetailModal}
        onHide={() => setShowDetailModal(false)}
        centered
      >
        <Modal.Header closeButton className="bg-primary tw-text-white">
          <Modal.Title className="tw-text-white">
            <FaInfoCircle className="me-2 tw-text-white" /> Chi tiết Khiếu Nại
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          {selectedComplaint ? (
            <div className="p-4 border rounded bg-white shadow-sm">
              {/* Mô tả */}
              <div className="mb-3 p-3 border rounded bg-light">
                <h6 className="text-dark fw-bold">Mô tả chi tiết:</h6>
                <p className="text-muted mb-0">
                  {selectedComplaint.description || "Không có thông tin."}
                </p>
              </div>

              {/* Trạng thái */}
              <div className="mb-3 d-flex align-items-center p-3 border rounded bg-light">
                <h6 className="text-dark fw-bold me-2 mb-0">Trạng thái:</h6>
                <span
                  className={`badge px-3 py-2 ${
                    selectedComplaint.status === "pending"
                      ? "bg-warning text-dark"
                      : selectedComplaint.status === "resolved"
                      ? "bg-success"
                      : selectedComplaint.status === "rejected"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {selectedComplaint.status === "pending" && (
                    <FaClock className="me-1" />
                  )}
                  {selectedComplaint.status === "resolved" && (
                    <FaCheckCircle className="me-1" />
                  )}
                  {selectedComplaint.status === "rejected" && (
                    <FaExclamationTriangle className="me-1" />
                  )}
                  {selectedComplaint.status === "pending"
                    ? "Đang xử lý"
                    : selectedComplaint.status === "resolved"
                    ? "Thành công"
                    : selectedComplaint.status === "rejected"
                    ? "Bị từ chối"
                    : "Không xác định"}
                </span>
              </div>

              {/* Thời gian */}
              <div className="mb-3 p-3 border rounded bg-light row">
                <div className="col-6">
                  <h6 className="text-dark fw-bold">Ngày yêu cầu:</h6>
                  <p className="text-muted mb-0">
                    {new Date(selectedComplaint.request_date).toLocaleString(
                      "vi-VN"
                    )}
                  </p>
                </div>
                <div className="col-6">
                  <h6 className="text-dark fw-bold">Ngày cập nhật:</h6>
                  <p className="text-muted mb-0">
                    {new Date(selectedComplaint.updated_at).toLocaleString(
                      "vi-VN"
                    )}
                  </p>
                </div>
              </div>

              {/* Số tiền hoàn */}
              <div className="mb-3 p-3 border rounded bg-light">
                <h6 className="text-dark fw-bold">Số tiền hoàn:</h6>
                <p
                  className={`fw-bold ${
                    selectedComplaint.money_refund > 0
                      ? "text-success"
                      : "text-danger"
                  } mb-0`}
                >
                  {selectedComplaint.money_refund &&
                  !isNaN(Number(selectedComplaint.money_refund))
                    ? `${Number(selectedComplaint.money_refund).toLocaleString(
                        "vi-VN"
                      )} VND`
                    : "Chưa có thông tin"}
                </p>
              </div>

              {/* Phản hồi từ Admin */}
              <div className="mb-3 p-3 border rounded bg-light">
                <h6 className="text-dark fw-bold">Phản hồi từ Admin:</h6>
                <p className="text-muted mb-0">
                  {selectedComplaint.feedback_by_admin || "Chưa có phản hồi"}
                </p>
              </div>

              {/* Bằng chứng */}
              <div className="mb-3 text-center p-3 border rounded bg-light">
                <h6 className="text-dark fw-bold">Bằng chứng:</h6>
                {selectedComplaint.proof_img ? (
                  <img
                    src={getImageUrl(selectedComplaint.proof_img)}
                    alt="Bằng chứng khiếu nại"
                    className="img-fluid rounded shadow"
                    style={{
                      width: "160px",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                ) : (
                  <p className="text-danger mb-0">
                    Không có hình ảnh bằng chứng.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-danger">Không tìm thấy dữ liệu khiếu nại.</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </div>
  );
};

export default ComplaintHistory;
