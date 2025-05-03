import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../contexts/StoreProvider";
import { Link } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { toast } from "react-toastify";
import HistoryStudent from "./HistoryStudent";
import Histories from "./Histories";
import { getImageUrl } from "../../../api/common";

export default function WalletHome() {
  const { user, role } = useContext(StoreContext);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axiosClient.get("/user/wallets");
        setWallet(response.data.wallet);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Lỗi khi lấy dữ liệu ví";
        toast.error(errorMessage);
      }
    };

    fetchWallet();
  }, []);

  return (
    <>
      <div className="row p-2">
        <div className="col-md-3">
          <div className="card p-3 shadow-none">
            <div className="d-flex align-items-center mb-2 ">
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
              <h4 className="mb-0 ms-2">
                {user && user.name}
              </h4>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-white text-dark p-2 rounded shadow-sm">
              <h5 className="mb-0">Số dư</h5>
              <h4 className="fw-bold mb-0">
                {wallet?.balance.toLocaleString()} VNĐ
              </h4>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Link
                className="btn btn-success w-auto px-3"
                to={"/student/walletStudent"}
              >
                <i className="bi bi-wallet2 me-1"></i> Nạp tiền
              </Link>
              <Link
                className="btn btn-danger w-auto px-3 ms-3"
                to={"/lecturer/walletLecturer"}
              >
                <i className="bi bi-cash me-1"></i> Rút tiền
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="card shadow-none">
            {/* <HistoryStudent /> */}
            {role === "student" ? <HistoryStudent /> : <Histories />}
          </div>
        </div>
      </div>
    </>
  );
}
