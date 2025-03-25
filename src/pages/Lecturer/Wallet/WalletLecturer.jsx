// import { useState, useEffect, useContext } from "react";

// import {
//   FaBolt,
//   FaClock,
//   FaCoins,
//   FaInfinity,
//   FaMoneyBillWave,
//   FaShieldAlt,
//   FaUserCircle,
// } from "react-icons/fa";
// import axiosClient from "../../../api/axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../../contexts/StoreProvider";

// const WalletWithdraw = () => {
//   const [amount, setAmount] = useState("");
//   const [balance, setBalance] = useState(0);
//   const [bankName, setBankName] = useState("Vietcombank");
//   const [bankNumber, setBankNumber] = useState("");
//   const [accountName, setAccountName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { user } = useContext(StoreContext);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetchWallet();
//   }, []);

//   const fetchWallet = async () => {
//     try {
//       const response = await axiosClient.get("/user/wallets");
//       console.log("Dữ liệu từ API:", response.data); // Kiểm tra số dư trả về
//       if (response.data.status === "success") {
//         setBalance(response.data.wallet.balance);
//         setBankName(response.data.wallet.bank_name || "Vietcombank");
//         setBankNumber(response.data.wallet.bank_number || "");
//         setAccountName(response.data.wallet.account_name || "");
//       }
//     } catch (error) {
//       console.error("Lỗi khi lấy thông tin ví:", error.response?.data?.message);
//     }
//   };

//   const handleWithdraw = async () => {
//     if (!amount || amount < 50000) {
//       toast("Số tiền rút phải lớn hơn hoặc bằng 50.000 VND");
//       return;
//     }
//     if (amount > balance) {
//       toast.error("Số dư không đủ để rút tiền");
//       return;
//     }
//     if (!bankNumber || !accountName) {
//       toast.info("Vui lòng nhập đầy đủ thông tin tài khoản ngân hàng");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axiosClient.post("/lecturer/wallets/withdraw", {
//         amount: Number(amount),
//         bank_name: bankName,
//         bank_number: bankNumber,
//         bank_nameUser: accountName,
//         qr_image: "", // Có thể bỏ qua nếu không cần
//       });
//       console.log("Response từ API:", response.data); // Kiểm tra response

//       if (response.data.status === "success") {
//         toast.success(
//           "Gửi yêu cầu rút tiền thành công! Vui lòng chờ phê duyệt."
//         );

//         setAmount("");
//         // setBankNumber("");
//         // setAccountName("");

//         // Chờ admin duyệt, không cập nhật balance ngay lập tức
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Đã xảy ra lỗi khi rút tiền");
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Gọi fetchWallet mỗi 30s để cập nhật số dư nếu có thay đổi từ admin
//   useEffect(() => {
//     fetchWallet();
//     const interval = setInterval(fetchWallet, 30000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="container mt-2 ms-0">
//       <button
//         className="btn btn-outline-primary mt-0 mb-2"
//         onClick={() => navigate("/lecturer/withdraw-history")}
//       >
//         Xem lịch sử rút tiền
//       </button>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card p-4 shadow-sm text-center border-0 bg-light">
//             <div className="d-flex flex-column align-items-center text-center mb-4">
//               <div className="bg-info text-white p-4 rounded shadow-sm text-center w-100">
//                 <div className="d-flex align-items-center mb-2">
//                   <FaUserCircle className="text-black me-2" size={50} />
//                   <div className="text-start">
//                     <h5 className="fw-bold mb-0 text-black">{user.name}</h5>
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center bg-white text-dark p-2 rounded shadow-sm">
//                   <h6 className="mb-0">Số dư khả dụng</h6>
//                   <h4 className="text-success fw-bold mb-0">
//                     {balance.toLocaleString()} đ
//                   </h4>
//                 </div>
//               </div>
//             </div>
//             <div className="text-start">
//               <p>
//                 <FaClock className="text-primary me-2" />
//                 <strong>Thời gian xử lý nhanh:</strong> Chỉ từ 1 - 5 phút
//               </p>
//               <p>
//                 <FaMoneyBillWave className="text-success me-2" />
//                 <strong>Miễn phí giao dịch:</strong> Không mất phí khi rút tiền
//               </p>
//               <p>
//                 <FaShieldAlt className="text-danger me-2" />
//                 <strong>Bảo mật cao:</strong> Mọi giao dịch đều được mã hóa an
//                 toàn
//               </p>
//               <p>
//                 <FaBolt className="text-warning me-2" />
//                 <strong>Giao dịch nhanh chóng:</strong> Tiền sẽ được chuyển ngay
//                 sau khi xử lý
//               </p>
//               <p>
//                 <FaInfinity className="text-info me-2" />
//                 <strong>Không giới hạn:</strong> Rút tiền bất cứ lúc nào, không
//                 hạn chế số lần
//               </p>
//             </div>
//             {/* <button
//               className="btn btn-primary w-100 mt-3 fw-bold"
//               onClick={handleWithdraw}
//               disabled={loading}
//             >
//               {loading ? "Đang xử lý..." : "Rút tiền ngay"}
//             </button> */}
//             <div className="alert alert-info mt-3">
//               <p>
//                 Số tiền tối thiểu cho mỗi lần rút là 50.000 VNĐ. Số dư trong tài
//                 khoản phải lớn hơn số tiền bạn muốn rút.
//               </p>
//             </div>
//             <div className="alert alert-danger mt-2">
//               <p>
//                 Vui lòng kiểm tra kỹ thông tin tài khoản ngân hàng trước khi
//                 thực hiện rút tiền. Chúng tôi không chịu trách nhiệm nếu bạn
//                 cung cấp sai thông tin.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-8">
//           <div className="card p-4 shadow-sm border-0">
//             <h5 className="fw-bold">Chọn số tiền muốn rút</h5>
//             <div className="row g-3">
//               {[50000, 100000, 200000, 500000, 1000000, 2000000].map(
//                 (value) => (
//                   <div className="col-md-4" key={value}>
//                     <button
//                       className="btn btn-outline-primary fw-bold w-100"
//                       onClick={() => setAmount(value)}
//                     >
//                       <FaCoins className="me-1 text-warning" />
//                       {value.toLocaleString()} VNĐ
//                     </button>
//                   </div>
//                 )
//               )}
//             </div>
//             <div className="mt-3">
//               <label htmlFor="customAmount" className="form-label fw-bold">
//                 Hoặc nhập số tiền khác
//               </label>
//               <input
//                 type="number"
//                 id="customAmount"
//                 className="form-control"
//                 value={amount || ""}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   if (value === "") {
//                     setAmount("");
//                   } else {
//                     const num = Math.max(0, parseInt(value, 10));
//                     setAmount(num);
//                   }
//                 }}
//               />
//             </div>

//             <div className="mt-3">
//               <label htmlFor="bank" className="form-label fw-bold">
//                 Chọn ngân hàng
//               </label>
//               <select
//                 id="bank"
//                 className="form-select fw-bold text-dark"
//                 value={bankName}
//                 onChange={(e) => setBankName(e.target.value)}
//               >
//                 <option value="Vietcombank">Vietcombank</option>
//                 <option value="Techcombank">Techcombank</option>
//                 <option value="ACB">ACB</option>
//                 <option value="MB Bank">MB Bank</option>
//               </select>
//             </div>
//             <div className="mt-3">
//               <label htmlFor="accountNumber" className="form-label fw-bold">
//                 Số tài khoản
//               </label>
//               <input
//                 type="text"
//                 id="accountNumber"
//                 className="form-control"
//                 value={bankNumber}
//                 onChange={(e) => setBankNumber(e.target.value)}
//               />
//             </div>
//             <div className="mt-3">
//               <label htmlFor="accountName" className="form-label fw-bold">
//                 Tên chủ tài khoản
//               </label>
//               <input
//                 type="text"
//                 id="accountName"
//                 className="form-control"
//                 value={accountName}
//                 onChange={(e) => setAccountName(e.target.value)}
//               />
//             </div>
//             <button
//               className="btn btn-primary w-100 mt-3 fw-bold"
//               onClick={handleWithdraw}
//               disabled={loading}
//             >
//               {loading ? "Đang xử lý..." : "Gửi yêu cầu rút tiền"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletWithdraw;

import { useState, useEffect, useContext } from "react";

import {
  FaBolt,
  FaClock,
  FaCoins,
  FaInfinity,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUserCircle,
} from "react-icons/fa";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../contexts/StoreProvider";
import { getImageUrl } from "../../../api/common";

const WalletWithdraw = () => {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [bankName, setBankName] = useState("Vietcombank");
  const [bankNumber, setBankNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(StoreContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet = async () => {
    try {
      const walletResponse = await axiosClient.get("/user/wallets");
      const userResponse = await axiosClient.get("/user");

      console.log("Dữ liệu từ API Ví:", walletResponse.data);
      console.log("Dữ liệu từ API Người dùng:", userResponse.data);

      if (walletResponse.data.status === "success") {
        setBalance(walletResponse.data.wallet.balance);
      }
      if (userResponse.data) {
        setBankName(userResponse.data.bank_name || "Vietcombank");
        setBankNumber(userResponse.data.bank_number || "");
        setAccountName(userResponse.data.bank_nameUser || "");
      }
    } catch (error) {
      console.error(
        "Lỗi khi lấy thông tin ví hoặc ngân hàng:",
        error.response?.data?.message
      );
    }
  };

  const handleWithdraw = async () => {
    if (!amount || amount < 50000) {
      toast("Số tiền rút phải lớn hơn hoặc bằng 50.000 VND");
      return;
    }
    if (amount > balance) {
      toast.error("Số dư không đủ để rút tiền");
      return;
    }
    if (!bankNumber || !accountName) {
      toast.info("Vui lòng nhập đầy đủ thông tin tài khoản ngân hàng");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosClient.post("/lecturer/wallets/withdraw", {
        amount: Number(amount),
        bank_name: bankName,
        bank_number: bankNumber,
        bank_nameUser: accountName,
        qr_image: "", // Có thể bỏ qua nếu không cần
      });
      console.log("Response từ API:", response.data); // Kiểm tra response

      if (response.data.status === "success") {
        toast.success(
          "Gửi yêu cầu rút tiền thành công! Vui lòng chờ phê duyệt."
        );

        setAmount("");
        // setBankNumber("");
        // setAccountName("");

        // Chờ admin duyệt, không cập nhật balance ngay lập tức
      }
    } catch (error) {
      alert(error.response?.data?.message || "Đã xảy ra lỗi khi rút tiền");
    } finally {
      setLoading(false);
    }
  };
  // Gọi fetchWallet mỗi 30s để cập nhật số dư nếu có thay đổi từ admin
  useEffect(() => {
    fetchWallet();
    const interval = setInterval(fetchWallet, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mt-2 ms-0">
      <button
        className="btn btn-outline-primary mt-0 mb-2"
        onClick={() => navigate("/lecturer/withdraw-history")}
      >
        Xem lịch sử rút tiền
      </button>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm text-center border-0 bg-light">
            <div className="d-flex flex-column align-items-center text-center mb-4">
              <div className=" text-white p-4 rounded shadow-sm text-center w-100">
                <div className="d-flex align-items-center mb-2">
                  <div className="avatar avatar-md">
                    <img
                      alt="avatar"
                      src={
                        user && user.profile_picture
                          ? getImageUrl(user.profile_picture)
                          : "/avatarDefault.jpg"
                      }
                      className="rounded-circle"
                    />
                  </div>
                  <div className="text-start">
                    <h5 className="fw-bold mb-0 text-black">{user && user.name}</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-white text-dark p-2 rounded shadow-sm">
                  <h6 className="mb-0">Số dư khả dụng</h6>
                  <h4 className="text-success fw-bold mb-0">
                    {balance.toLocaleString()} đ
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-start">
              <p>
                <FaClock className="text-primary me-2" />
                <strong>Thời gian xử lý nhanh:</strong> Chỉ từ 1 - 5 phút
              </p>
              <p>
                <FaMoneyBillWave className="text-success me-2" />
                <strong>Miễn phí giao dịch:</strong> Không mất phí khi rút tiền
              </p>
              <p>
                <FaShieldAlt className="text-danger me-2" />
                <strong>Bảo mật cao:</strong> Mọi giao dịch đều được mã hóa an
                toàn
              </p>
              <p>
                <FaBolt className="text-warning me-2" />
                <strong>Giao dịch nhanh chóng:</strong> Tiền sẽ được chuyển ngay
                sau khi xử lý
              </p>
              <p>
                <FaInfinity className="text-info me-2" />
                <strong>Không giới hạn:</strong> Rút tiền bất cứ lúc nào, không
                hạn chế số lần
              </p>
            </div>
            {/* <button
              className="btn btn-primary w-100 mt-3 fw-bold"
              onClick={handleWithdraw}
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Rút tiền ngay"}
            </button> */}
            <div className="alert alert-info mt-3">
              <p>
                Số tiền tối thiểu cho mỗi lần rút là 50.000 VNĐ. Số dư trong tài
                khoản phải lớn hơn số tiền bạn muốn rút.
              </p>
            </div>
            <div className="alert alert-danger mt-2">
              <p>
                Vui lòng kiểm tra kỹ thông tin tài khoản ngân hàng trước khi
                thực hiện rút tiền. Chúng tôi không chịu trách nhiệm nếu bạn
                cung cấp sai thông tin.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0">
            <h5 className="fw-bold">Chọn số tiền muốn rút</h5>
            <div className="row g-3">
              {[50000, 100000, 200000, 500000, 1000000, 2000000].map(
                (value) => (
                  <div className="col-md-4" key={value}>
                    <button
                      className="btn btn-outline-primary fw-bold w-100"
                      onClick={() => setAmount(value)}
                    >
                      <FaCoins className="me-1 text-warning" />
                      {value.toLocaleString()} VNĐ
                    </button>
                  </div>
                )
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="customAmount" className="form-label fw-bold">
                Hoặc nhập số tiền khác
              </label>
              <input
                type="number"
                id="customAmount"
                className="form-control"
                value={amount || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setAmount("");
                  } else {
                    const num = Math.max(0, parseInt(value, 10));
                    setAmount(num);
                  }
                }}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="bank" className="form-label fw-bold">
                Chọn ngân hàng
              </label>
              <select
                id="bank"
                className="form-select fw-bold text-dark"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              >
                <option value="Vietcombank">Vietcombank</option>
                <option value="Techcombank">Techcombank</option>
                <option value="ACB">ACB</option>
                <option value="MB Bank">MB Bank</option>
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="accountNumber" className="form-label fw-bold">
                Số tài khoản
              </label>
              <input
                type="text"
                id="accountNumber"
                className="form-control"
                value={bankNumber}
                onChange={(e) => setBankNumber(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="accountName" className="form-label fw-bold">
                Tên chủ tài khoản
              </label>
              <input
                type="text"
                id="accountName"
                className="form-control"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100 mt-3 fw-bold"
              onClick={handleWithdraw}
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Gửi yêu cầu rút tiền"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletWithdraw;
