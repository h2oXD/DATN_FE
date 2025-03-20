import { useRef } from "react";

export default function FeaturedCourses() {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-1 p-3 position-relative">
      <h2 className="mb-2">Khoá học liên quan</h2>

      {/* Nút điều hướng */}
      <div className="position-absolute top-0 end-0 d-flex mt-2 p-3">
        <a className="text-dark me-2" onClick={scrollLeft}>
          <i className="bi bi-chevron-left"></i>
        </a>
        <a className="text-dark" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>

      {/* Danh sách khoá học */}
      <div
        className="row g-3 overflow-auto"
        ref={listRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          scrollBehavior: "smooth",
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div className="col-md-3" key={index}>
            <div className="card p-2">
              <a href="#">
                <img
                  src="/default-thumbnail.jpg"
                  alt="Lập trình Web"
                  className="card-img-top rounded"
                />
              </a>
              <div className="px-1 py-1">
                <h4 className="mt-1 mb-1 text-truncate-line-2">
                  Lập trình Web
                </h4>
                <ul className="mb-1 list-inline">
                  <li className="list-inline-item">
                    <svg
                      className="me-1 mt-n1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="2"
                        height="6"
                        rx="1"
                        fill="#754FFE"
                      />
                      <rect
                        x="7"
                        y="5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#754FFE"
                      />
                      <rect
                        x="11"
                        y="2"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#754FFE"
                      />
                    </svg>
                    <span>Level: Cơ bản</span>
                  </li>
                </ul>
                <small>By: Nguyễn Văn A</small>
                <div className="lh-1 mt-2 text-warning">5 ★ (10 reviews)</div>
              </div>

              <div className="d-flex mt-2">
                <h5 className="mb-0">Miễn phí</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .row.g-3.overflow-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
