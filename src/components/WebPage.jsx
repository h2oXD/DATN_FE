import React from "react";
import { FaMicrophone } from "react-icons/fa";

const WebPage = () => {
  return (
    <div className="container py-7">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          <div
            className="d-inline-flex align-items-center text-white px-3 py-2 rounded-pill mb-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)",
              boxShadow: "0 0 10px rgba(255, 165, 0, 0.5)",
              color: "#FF8C00",
              
            }}
          >
            <FaMicrophone className="me-2" style={{ color: "#FF8C00" }} />
            <span style={{color: "#FF8C00" }}>XU THẾ TẤT YẾU</span>
          </div>
          <h1 className="text-primary fw-bold mb-3">
            Đồng hành xu thế học Online trên toàn thế giới <br /> – thuận tiện – tiết
            kiệm
          </h1>
          <p className="text-secondary">
            Liên hệ ngay với chúng tôi qua <br /> số hotline
            <span className="text-danger fw-bold"> 1900 6789 </span> để được
            hướng dẫn.
          </p>
          <p className="text-secondary">
            Chúng tôi trân trọng và rất hân hạnh được phục vụ!
          </p>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0 text-center">
          <img
            src="/webpage.png"
            className="img-fluid"
            alt="Illustration of people with a large smartphone"
          />
        </div>
      </div>
    </div>
  );
};

export default WebPage;