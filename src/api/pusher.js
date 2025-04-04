import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Cookies from "js-cookie";

window.Pusher = Pusher;
const token = Cookies.get("token");
const echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: false,
  authEndpoint: "http://loraspacebe.test/api/broadcasting/auth", // Đường dẫn Laravel Echo auth
  auth: {
    headers: {
      Authorization: `Bearer ${token}`, // Nếu cần token
    },
  },
});
// // Ghi log trạng thái kết nối
// window.Pusher.logToConsole = true;

// echo.connector.pusher.connection.bind("connected", () => {
//   console.log("Kết nối thành công đến máy chủ WebSocket.");
// });

// echo.connector.pusher.connection.bind("error", (err) => {
//   console.error("Lỗi kết nối:", err);
// });
export default echo;
