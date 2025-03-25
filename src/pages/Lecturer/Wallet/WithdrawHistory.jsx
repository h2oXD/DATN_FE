// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState, useEffect } from "react";
// import axiosClient from "../../../api/axios";
// import { useNavigate } from "react-router-dom";

// const WithdrawalHistory = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [selectedTransaction, setSelectedTransaction] = useState(null);
//   const [complaintReason, setComplaintReason] = useState("");
//   const [proofImage, setProofImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosClient
//       .get("/lecturer/wallet/withdraw-histories")
//       .then((response) => {
//         if (response.data.histories) {
//           const formattedData = response.data.histories.map((tx) => {
//             const dateObj = new Date(tx.transaction_date);
//             return {
//               id: tx.id,
//               date:
//                 dateObj.toLocaleDateString("vi-VN") +
//                 " " +
//                 dateObj.toLocaleTimeString("vi-VN"),
//               bank: tx.bank_name,
//               bankUser: tx.bank_nameUser,
//               bankNumber: tx.bank_number,
//               transactionCode: tx.transaction_code,
//               amount: new Intl.NumberFormat("vi-VN").format(tx.amount) + " VNĐ",
//               balance:
//                 new Intl.NumberFormat("vi-VN").format(tx.balance) + " VNĐ",
//               qrImage: tx.qr_image,
//               status: (
//                 <span
//                   className={
//                     tx.status === "pending"
//                       ? "badge bg-warning text-dark" // Màu vàng
//                       : tx.status === "success"
//                       ? "badge bg-success" // Màu xanh lá
//                       : "badge bg-danger" // Màu đỏ
//                   }
//                 >
//                   {tx.status === "pending"
//                     ? "Đang xử lý"
//                     : tx.status === "success"
//                     ? "Thành công"
//                     : "Thất bại"}
//                 </span>
//               ),
//             };
//           });
//           setTransactions(formattedData);
//         }
//       })
//       .catch((error) => {
//         console.error("Lỗi khi lấy lịch sử rút tiền:", error);
//       });
//   }, []);

//   const handleComplaintSubmit = () => {
//     if (!selectedTransaction || !complaintReason) {
//       alert("Vui lòng nhập lý do khiếu nại.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("transaction_id", selectedTransaction.id);
//     formData.append("reason", complaintReason);
//     if (proofImage) {
//       formData.append("proof_image", proofImage);
//     }

//     axiosClient
//       .post("/user/wallet/withdraw-complaint", formData)
//       .then(() => {
//         alert("Gửi khiếu nại thành công!");
//         setComplaintReason("");
//         setProofImage(null);
//       })
//       .catch((error) => {
//         console.error("Lỗi khi gửi khiếu nại:", error);
//         alert("Gửi khiếu nại thất bại!");
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="fw-bold text-primary d-flex align-items-center m-0">
//           <i className="fas fa-money-check-alt me-2"></i> Lịch sử rút tiền
//         </h3>

//         <button
//           className="btn btn-outline-primary"
//           onClick={() => navigate("/lecturer/complaintHistory")}
//         >
//           Xem lịch sử khiếu nại
//         </button>
//       </div>

//       <div className="card shadow-lg border-0 rounded-3">
//         <div className="card-body">
//           <table className="table table-bordered text-center">
//             <thead className="table-primary">
//               <tr>
//                 <th>Ngày & Giờ</th>
//                 <th>Ngân hàng</th>
//                 <th>Chủ tài khoản</th>
//                 <th>Số tài khoản</th>
//                 <th>Số tiền</th>
//                 <th>Số dư sau giao dịch</th>
//                 <th>Trạng thái</th>
//                 <th>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((tx) => (
//                 <tr key={tx.id}>
//                   <td>{tx.date}</td>
//                   <td>{tx.bank}</td>
//                   <td>{tx.bankUser}</td>
//                   <td>{tx.bankNumber}</td>
//                   <td>{tx.amount}</td>
//                   <td>{tx.balance}</td>
//                   <td>{tx.status}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger px-2 py-2"
//                       data-bs-toggle="modal"
//                       data-bs-target="#complaintModal"
//                       onClick={() => setSelectedTransaction(tx)}
//                     >
//                       Khiếu nại
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal Khiếu Nại */}
//       <div
//         className="modal fade"
//         id="complaintModal"
//         tabIndex="-1"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header bg-light">
//               <h5 className="modal-title fw-bold">
//                 <i className="fas fa-exclamation-circle text-danger"></i> Gửi
//                 khiếu nại
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {selectedTransaction && (
//                 <div className="border rounded p-3 bg-light">
//                   <p>
//                     <strong>Ngân hàng:</strong> {selectedTransaction.bank}
//                   </p>
//                   <p>
//                     <strong>Chủ tài khoản:</strong>{" "}
//                     {selectedTransaction.bankUser}
//                   </p>
//                   <p>
//                     <strong>Số tài khoản:</strong>{" "}
//                     {selectedTransaction.bankNumber}
//                   </p>
//                   <p>
//                     <strong>Số tiền:</strong> {selectedTransaction.amount}
//                   </p>
//                   <p>
//                     <strong>Số dư sau giao dịch:</strong>{" "}
//                     {selectedTransaction.balance}
//                   </p>
//                   <p>
//                     <strong>Ngày & Giờ:</strong> {selectedTransaction.date}
//                   </p>
//                 </div>
//               )}
//               <div className="mt-3">
//                 <label className="form-label fw-semibold">
//                   Lý do khiếu nại
//                 </label>
//                 <textarea
//                   className="form-control"
//                   rows="3"
//                   placeholder="Nhập lý do khiếu nại..."
//                   value={complaintReason}
//                   onChange={(e) => setComplaintReason(e.target.value)}
//                 ></textarea>
//               </div>
//               <div className="mt-3">
//                 <label className="form-label fw-semibold">
//                   Tải ảnh minh chứng
//                 </label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   onChange={(e) => setProofImage(e.target.files[0])}
//                 />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-outline-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Hủy
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={handleComplaintSubmit}
//               >
//                 Gửi khiếu nại
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalHistory;

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axiosClient from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const WithdrawalHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [complaintReason, setComplaintReason] = useState("");
  const [proofImage, setProofImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/lecturer/wallet/withdraw-histories")
      .then((response) => {
        if (response.data.histories) {
          const formattedData = response.data.histories.map((tx) => {
            const dateObj = new Date(tx.transaction_date);
            return {
              id: tx.id,
              date:
                dateObj.toLocaleDateString("vi-VN") +
                " " +
                dateObj.toLocaleTimeString("vi-VN"),
              bank: tx.bank_name,
              bankUser: tx.bank_nameUser,
              bankNumber: tx.bank_number,
              transactionCode: tx.transaction_code,
              amount: new Intl.NumberFormat("vi-VN").format(tx.amount) + " VNĐ",
              balance:
                new Intl.NumberFormat("vi-VN").format(tx.balance) + " VNĐ",
              qrImage: tx.qr_image,
              status: tx.status,
              statusLabel: (
                <span
                  className={
                    tx.status === "pending"
                      ? "badge bg-warning text-dark"
                      : tx.status === "success"
                      ? "badge bg-success"
                      : "badge bg-danger"
                  }
                >
                  {tx.status === "pending"
                    ? "Đang xử lý"
                    : tx.status === "success"
                    ? "Thành công"
                    : "Thất bại"}
                </span>
              ),
            };
          });
          setTransactions(formattedData);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy lịch sử rút tiền:", error);
      });
  }, []);

  const handleComplaintSubmit = () => {
    if (!selectedTransaction) {
      alert("Không tìm thấy giao dịch cần khiếu nại!");
      return;
    }
    if (!complaintReason.trim()) {
      alert("Vui lòng nhập lý do khiếu nại.");
      return;
    }
    if (!proofImage) {
      alert("Vui lòng tải lên ảnh minh chứng.");
      return;
    }

    const formData = new FormData();
    formData.append("description", complaintReason.trim());
    formData.append("proof_img", proofImage, proofImage.name); // Thêm tên file

    console.log("Dữ liệu FormData gửi lên:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    axiosClient
      .post(
        `/lecturer/wallets/withdraws/${selectedTransaction.id}/complain`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Đảm bảo gửi đúng kiểu dữ liệu
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success("Gửi khiếu nại thành công!");
          setComplaintReason("");
          setProofImage(null);
          navigate("/lecturer/complaintHistory");
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gửi khiếu nại:", error);
        alert("Gửi khiếu nại thất bại! Vui lòng kiểm tra lại.");
      });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary d-flex align-items-center m-0">
          <i className="fas fa-money-check-alt me-2"></i> Lịch sử rút tiền
        </h3>

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/lecturer/complaintHistory")}
        >
          Xem lịch sử khiếu nại
        </button>
      </div>

      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body">
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
                <th>Ngày & Giờ</th>
                <th>Ngân hàng</th>
                <th>Chủ tài khoản</th>
                <th>Số tài khoản</th>
                <th>Số tiền</th>
                <th>Số dư sau giao dịch</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.date}</td>
                  <td>{tx.bank}</td>
                  <td>{tx.bankUser}</td>
                  <td>{tx.bankNumber}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.balance}</td>
                  <td>{tx.statusLabel}</td>
                  <td>
                    {tx.status === "success" && (
                      <button
                        className="btn btn-danger px-2 py-2"
                        data-bs-toggle="modal"
                        data-bs-target="#complaintModal"
                        onClick={() => setSelectedTransaction(tx)}
                      >
                        Khiếu nại
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Khiếu Nại */}
      <div
        className="modal fade"
        id="complaintModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">
                <i className="fas fa-exclamation-circle text-danger"></i> Gửi
                khiếu nại
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedTransaction && (
                <div className="border rounded p-3 bg-light">
                  <p>
                    <strong>Ngân hàng:</strong> {selectedTransaction.bank}
                  </p>
                  <p>
                    <strong>Chủ tài khoản:</strong>{" "}
                    {selectedTransaction.bankUser}
                  </p>
                  <p>
                    <strong>Số tài khoản:</strong>{" "}
                    {selectedTransaction.bankNumber}
                  </p>
                  <p>
                    <strong>Số tiền:</strong> {selectedTransaction.amount}
                  </p>
                  <p>
                    <strong>Số dư sau giao dịch:</strong>{" "}
                    {selectedTransaction.balance}
                  </p>
                  <p>
                    <strong>Ngày & Giờ:</strong> {selectedTransaction.date}
                  </p>
                </div>
              )}
              <div className="mt-3">
                <label className="form-label fw-semibold">
                  Lý do khiếu nại
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Nhập lý do khiếu nại..."
                  value={complaintReason}
                  onChange={(e) => setComplaintReason(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-3">
                <label className="form-label fw-semibold">
                  Tải ảnh minh chứng
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setProofImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleComplaintSubmit}
              >
                Gửi khiếu nại
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
