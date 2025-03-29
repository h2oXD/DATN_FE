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
        console.log(response.data.banners);
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
    return <p></p>;
  }

  if (!banners) {
    return <p>Không có dữ liệu banner...</p>;
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
                    <h3 className="mb-3">{banner.title}</h3>
                    <p className="fs-4">{banner.description}</p>
                    <a href={banner.link}
                    className="btn btn-primary" target="_blank" rel="noopener noreferrer">Xem chi tiết</a>
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
