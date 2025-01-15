//<!-- Favicon icon-->
import "../assets/images/favicon/favicon.ico";
//<!-- darkmode js -->
import "../assets/js/vendors/darkMode.js";
//<!-- Libs CSS -->
import "../assets/fonts/feather/feather.css";
import "../assets/libs/bootstrap-icons/font/bootstrap-icons.min.css";
import "../assets/libs/simplebar/dist/simplebar.min.css";
//<!-- Theme CSS -->
import "../assets/css/theme.min.css";
import "../assets/libs/tiny-slider/dist/tiny-slider.css";

//<!-- Scripts -->
//<!-- Libs JS -->
import "../assets/libs/@popperjs/core/dist/umd/popper.min.js";
import "../assets/libs/bootstrap/dist/js/bootstrap.min.js";
import "../assets/libs/simplebar/dist/simplebar.min.js";
//<!-- Theme JS -->
import "../assets/js/theme.min.js";
import "../assets/libs/tiny-slider/dist/min/tiny-slider.js";
import "../assets/js/vendors/tnsSlider.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container px-0">
        {/* LOGO */}
        <a className="navbar-brand" href="/"><img src="" alt="Geeks" /></a>

        {/* Tìm kiếm */}
        <form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
          <span className="position-absolute ps-3 search-icon">
            <i className="fe fe-search"></i>
          </span>
          <label htmlFor="search" className="visually-hidden"></label>
          <input
            type="search"
            id="search"
            className="form-control ps-6"
            placeholder="Search Courses"
          />
        </form>

        {/* Login / Register */}
        <div className="ms-auto d-flex align-items-center order-lg-3">
          <div className="d-flex gap-2 align-items-center">
            <a href="pages/sign-in.html" className="btn btn-outline-dark">Login</a>
            <a href="pages/sign-up.html" className="btn btn-dark d-none d-md-block">Join Now</a>
          </div>
        </div>

        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbar-default">
          <ul className="navbar-nav mt-3 mt-lg-0 mx-xxl-auto">

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
