import axios from "axios";
export default axios.create({
    baseURL: 'http://localhost:8000', // URL API của Laravel
    withCredentials: true, // Để gửi cookie xác thực của Sanctum
})