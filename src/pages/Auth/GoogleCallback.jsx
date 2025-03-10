// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import Cookies from "js-cookie";
// import axiosClient from "./../../api/axios";

// export default function GoogleCallback() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosClient
//       .get("/auth/google/callback") // Gọi API lấy user + token
//       .then((response) => {
//         const { user, access_token } = response.data;

//         // Lưu token vào Cookies (dùng để gửi API sau này)
//         Cookies.set("token", access_token, { expires: 7 });

//         // Lưu user vào localStorage
//         localStorage.setItem("user", JSON.stringify(user));

//         console.log("Đăng nhập thành công:", user);
//         navigate("/"); // Chuyển hướng về trang chính
//       })
//       .catch((error) => {
//         console.error("Lỗi callback Google:", error);
//         navigate("/login"); // Nếu lỗi, quay lại trang đăng nhập
//       });
//   }, [navigate]);

//   return <p>Đang xác thực, vui lòng chờ...</p>;
// }

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GoogleCallback() {
  const navigate = useNavigate();
  const processed = useRef(false); // Đảm bảo chỉ chạy 1 lần

  useEffect(() => {
    if (processed.current) return;
    processed.current = true;

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      toast.error("Đăng nhập thất bại!");
      navigate("/");
      return;
    }

    // Lưu token vào Cookies và localStorage
    Cookies.set("token", token, { expires: 1 });
    localStorage.setItem("authToken", token);

    // Phát sự kiện để cập nhật UI
    window.dispatchEvent(new Event("storage"));

    // Hiển thị thông báo toast
    toast.success("Đăng nhập thành công!");

    // Chờ 1s rồi chuyển hướng để toast kịp hiển thị
    setTimeout(() => window.location.replace("/"), 1000);
  }, [navigate]);

  // return <h3>Đang xử lý đăng nhập...</h3>;
}
