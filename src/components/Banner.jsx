import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.params.navigation.prevEl = ".custom-prev";
    swiper.params.navigation.nextEl = ".custom-next";
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);
  return (
    <section className="pb-3 pt-2 relative">
      <div className="container">
        <div className="row">
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
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="d-flex align-items-center bg-primary text-white p-5 rounded-4">
                  <div className="col-md-6">
                    <h2 className="h1 mb-3">
                      Giảm giá khóa học mới 50% học phí!
                    </h2>
                    <p className="fs-4">
                      Nội dung bài học chất lượng, đa dạng loại bài tập.
                    </p>
                    <button className="btn btn-light">Đăng ký ngay</button>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src="../assets/images/education/course.png"
                      alt="Khóa học"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="d-flex align-items-center bg-info-subtle text-white p-5 rounded-4">
                  <div className="col-md-6">
                    <h2 className="h1 mb-3">Chào mừng bạn đến với LoraSpace</h2>
                    <p className="fs-4">
                      Nội dung bài học chất lượng, đa dạng loại bài tập.
                    </p>
                    <button className="btn btn-light">Đăng ký ngay</button>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src="../assets/images/education/course.png"
                      alt="Khóa học"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="d-flex align-items-center bg-light text-white p-5 rounded-4">
                  <div className="col-md-6">
                    <h2 className="h1 mb-3">Chào mừng bạn đến với LoraSpace</h2>
                    <p className="fs-4 text-black">
                      Nội dung bài học chất lượng, đa dạng loại bài tập.
                    </p>
                    <button className="btn btn-primary">Đăng ký ngay</button>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src="../assets/images/education/course.png"
                      alt="Khóa học"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
