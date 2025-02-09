import { useContext } from "react";
import { CategoriesDropdown, LanguageModal } from "./CategoriesDropdown";
import { StoreContext } from "../contexts/StoreProvider";
import UserHeader from "./UserHeader";
import Cookies from "js-cookie";
import ButtonAuth from "../pages/Auth/ButtonAuth";

const Header = () => {
  const { userInfo } = useContext(StoreContext)
  if (userInfo) {
    if(userInfo.lecturer_id){
      Cookies.set('lecturer_id',userInfo.lecturer_id)
    }
  }
  const token = Cookies.get('token')
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="">
          <img src="/logo.png" width={'133px'} height={'31px'} alt="" />
        </a>
        <div className="order-lg-3 d-flex align-items-center">
          <div>
            <div className="d-flex align-items-center">
              {token ?
                (<UserHeader />) :
                (<><LanguageModal />
                  <ButtonAuth value='Đăng nhập' classData='btn btn-outline-dark shadow-sm me-1' dataTarget='#loginModal' />
                  <ButtonAuth value='Đăng ký' classData='btn btn-dark d-none d-md-block shadow-sm me-1' dataTarget='#registerModal' /></>)}
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
            <span className="position-absolute d-flex ps-3 search-icon">
              <i className="fe fe-search "></i>
            </span>
            <input
              type="search"
              className="form-control ps-6 rounded-5"
              placeholder="Tìm kiếm"
              style={{ width: '400px' }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
