import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import { CategoriesDropdown, LanguageModal } from "./CategoriesDropdown";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container px-0">
        <a className="navbar-brand" href="../index.html">
          <img src="../assets/images/brand/logo/logo.svg" alt="" />
        </a>
        <div className="order-lg-3 d-flex align-items-center">
          <div>
            <div className="d-flex align-items-center">
              <LanguageModal />
              <Login />
              <Register />
            </div>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar-default">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Khoá học
              </a>
            </li>
            <CategoriesDropdown />
          </ul>
          <form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
            <span className="position-absolute ps-3 search-icon">
              <i className="fe fe-search "></i>
            </span>
            <input
              type="search"
              className="form-control ps-6"
              placeholder="Tìm kiếm"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
