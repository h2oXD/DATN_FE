import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axiosClient from "../api/axios";
import { getImageUrl } from "./../api/common";

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API lấy danh sách banner
    axiosClient
      .get("/banners") // Endpoint API
      .then((response) => {
        setBanners(response.data.banners);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu banner:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const swiper = document.querySelector(".swiper")?.swiper;
    if (swiper) {
      swiper.params.navigation.prevEl = ".custom-prev";
      swiper.params.navigation.nextEl = ".custom-next";
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [banners]);

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  return (
    <section className="pb-2 pt-1 relative bg-light">
      <div className="container">
        <div className="col-md-12 col-12 position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="relative"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className="d-flex align-items-center p-2 rounded-4">
                  <div className="col-md-1"></div>
                  <div className="col-md-6">
                    <h2 className="h1 mb-3">{banner.title}</h2>
                    <p className="fs-4">Khám phá ngay!</p>
                    <button className="btn btn-primary">Xem chi tiết</button>
                  </div>
                  <div className="col-md-5">
                    <img
                      src={getImageUrl(banner.image)}
                      alt={banner.title}
                      className="img-fluid rounded-4"
                      width="400"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
