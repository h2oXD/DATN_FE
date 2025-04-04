// import React from 'react'

import { Link } from "react-router-dom";
import Logout from "../pages/Auth/Logout";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreProvider";
import Skeleton from "react-loading-skeleton";
import { getImageUrl } from "../api/common";
import Notification from "./Notification";

export default function UserHeader() {
  const { user } = useContext(StoreContext);
  const isLecturer = user?.roles?.some((role) => role.name === "lecturer");
  const isStudent = user?.roles?.some((role) => role.name === "student");
  return (
    <>
      {user ? (
        <ul className="navbar-nav navbar-right-wrap mx-2 flex-row">
          {isStudent && (
            <li className="nav nav-link">
              <Link to="/student/home">Học viên</Link>
            </li>
          )}
          {isLecturer && (
            <li className="nav nav-link">
              <Link to="/lecturer/dashboard">Giảng viên</Link>
            </li>
          )}
          <Notification />
          <li className="dropdown ms-2 d-inline-block position-static">
            <a
              className="rounded-circle"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <div className="avatar avatar-md avatar-indicators avatar-online">
                <img
                  alt="avatar"
                  src={user.profile_picture ? getImageUrl(user.profile_picture) : '/avatarDefault.jpg'}
                  className="rounded-circle"
                />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end position-absolute mx-3 my-5">
              <div className="dropdown-item">
                <div className="d-flex">
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img
                      alt="avatar"
                      src={user.profile_picture ? getImageUrl(user.profile_picture) : '/avatarDefault.jpg'}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="ms-3 lh-1">
                    <h5 className="mb-1">{user ? user.name : <Skeleton />}</h5>
                    <p className="mb-0">{user ? user.email : <Skeleton />}</p>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <ul className="list-unstyled">
                {/* <li className="dropdown-submenu dropstart-lg">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    <i className="fe fe-circle me-2"></i>
                    Status
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="badge-dot bg-success me-2"></span>
                        Online
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="badge-dot bg-secondary me-2"></span>
                        Offline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="badge-dot bg-warning me-2"></span>
                        Away
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="badge-dot bg-danger me-2"></span>
                        Busy
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <a
                    className="dropdown-item"
                    href="../pages/profile-edit.html"
                  >
                    <i className="fe fe-user me-2"></i>
                    Profile
                  </a>
                </li> */}
                <li>
                  <Link to="/profile" className="dropdown-item">
                    <i className="fe fe-user me-2"></i>
                    Thông tin cá nhân
                  </Link>
                </li>
                {/* <li>
                  <a
                    className="dropdown-item"
                    href="../pages/student-subscriptions.html"
                  >
                    <i className="fe fe-star me-2"></i>
                    Subscription
                  </a>
                </li> */}
                {/* <li>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-settings me-2"></i>
                    Settings
                  </a>
                </li> */}
                <li>
                  <Link to="/changePassword" className="dropdown-item">
                    <i className="fe fe-lock me-2"></i>
                    Đổi mật khẩu
                  </Link>
                </li>
                {isStudent &&
                  <li>
                    <Link to="/student/home" className="dropdown-item">
                      <i className="fe fe-log-in me-2"></i>
                      Truy cập trang Học Viên
                    </Link>
                  </li>
                }
                {isLecturer &&
                  <li>
                    <Link to="/lecturer/dashboard" className="dropdown-item">
                      <i className="fe fe-log-in me-2"></i>
                      Truy cập Trang Giảng Viên
                    </Link>
                  </li>
                }
              </ul>
              <div className="dropdown-divider"></div>
              <ul className="list-unstyled">
                <li>
                  <Logout />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      ) : (
        <Skeleton />
      )}
    </>
  );
}
