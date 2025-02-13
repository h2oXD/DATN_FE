// import React from "react";
import axiosClient from "../../api/axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Logout() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosClient
      .post("/logout")
      .then((res) => {
        Cookies.remove("token");
        toast.success(res.data.message);
        window.location.href = "/";
        console.log(res);
        
      })
      .catch();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="dropdown-item">
          <i className="fe fe-power me-2"></i>
          Sign Out
        </button>
      </form>
    </>
  );
}
