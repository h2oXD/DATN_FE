// import React from 'react'

import { Link } from "react-router-dom";
import Logout from "../pages/Auth/Logout";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreProvider";
import Skeleton from "react-loading-skeleton";

export default function UserHeader() {
  const { user } = useContext(StoreContext);
  const isLecturer = user?.roles?.some((role) => role.name === "lecturer");
  const isStudent = user?.roles?.some((role) => role.name === "student");
  return (
    <>
      {user ? (
        <ul className="navbar-nav navbar-right-wrap mx-2 flex-row">
          <li className="nav nav-link">
            <Link to="/student">Học viên</Link>
          </li>
          {isLecturer && (
            <li className="nav nav-link">
              <Link to="/lecturer">Giảng viên</Link>
            </li>
          )}
          <li className="dropdown d-inline-block stopevent position-static">
            <a
              className="btn btn-light btn-icon rounded-circle indicator indicator-primary"
              href="#"
              role="button"
              id="dropdownNotificationSecond"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fe fe-bell"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end dropdown-menu-lg position-absolute mx-3 my-5"
              aria-labelledby="dropdownNotificationSecond"
            >
              <div>
                <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">Notifications</span>
                  <a href="# ">
                    <span className="align-middle">
                      <i className="fe fe-settings me-1"></i>
                    </span>
                  </a>
                </div>
                <ul className="list-group list-group-flush" data-simplebar>
                  <li className="list-group-item bg-light">
                    <div className="row">
                      <div className="col">
                        <a className="text-body" href="#">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-1.jpg"
                              alt=""
                              className="avatar-md rounded-circle"
                            />
                            <div className="ms-3">
                              <h5 className="fw-bold mb-1">Kristin Watson:</h5>
                              <p className="mb-3 text-body">
                                Krisitn Watsan like your comment on course
                                Javascript Introduction!
                              </p>
                              <span className="fs-6">
                                <span>
                                  <span className="fe fe-thumbs-up text-success me-1"></span>
                                  2 hours ago,
                                </span>
                                <span className="ms-1">2:19 PM</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-auto text-center me-2">
                        <a
                          href="#"
                          className="badge-dot bg-info"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Mark as read"
                        ></a>
                        <div>
                          <a
                            href="#"
                            className="bg-transparent"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">
                        <a className="text-body" href="#">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-2.jpg"
                              alt=""
                              className="avatar-md rounded-circle"
                            />
                            <div className="ms-3">
                              <h5 className="fw-bold mb-1">Brooklyn Simmons</h5>
                              <p className="mb-3 text-body">
                                Just launched a new Courses React for Beginner.
                              </p>
                              <span className="fs-6">
                                <span>
                                  <span className="fe fe-thumbs-up text-success me-1"></span>
                                  Oct 9,
                                </span>
                                <span className="ms-1">1:20 PM</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-auto text-center me-2">
                        <a
                          href="#"
                          className="badge-dot bg-secondary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Mark as unread"
                        ></a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">
                        <a className="text-body" href="#">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-3.jpg"
                              alt=""
                              className="avatar-md rounded-circle"
                            />
                            <div className="ms-3">
                              <h5 className="fw-bold mb-1">Jenny Wilson</h5>
                              <p className="mb-3 text-body">
                                Krisitn Watsan like your comment on course
                                Javascript Introduction!
                              </p>
                              <span className="fs-6">
                                <span>
                                  <span className="fe fe-thumbs-up text-info me-1"></span>
                                  Oct 9,
                                </span>
                                <span className="ms-1">1:56 PM</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-auto text-center me-2">
                        <a
                          href="#"
                          className="badge-dot bg-secondary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Mark as unread"
                        ></a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">
                        <a className="text-body" href="#">
                          <div className="d-flex">
                            <img
                              src="../assets/images/avatar/avatar-4.jpg"
                              alt=""
                              className="avatar-md rounded-circle"
                            />
                            <div className="ms-3">
                              <h5 className="fw-bold mb-1">Sina Ray</h5>
                              <p className="mb-3 text-body">
                                You earn new certificate for complete the
                                Javascript Beginner course.
                              </p>
                              <span className="fs-6">
                                <span>
                                  <span className="fe fe-award text-warning me-1"></span>
                                  Oct 9,
                                </span>
                                <span className="ms-1">1:56 PM</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-auto text-center me-2">
                        <a
                          href="#"
                          className="badge-dot bg-secondary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Mark as unread"
                        ></a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="border-top px-3 pt-3 pb-0">
                  <a
                    href="../pages/notification-history.html"
                    className="text-link fw-semibold"
                  >
                    See all Notifications
                  </a>
                </div>
              </div>
            </div>
          </li>
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
                  src="../assets/images/avatar/avatar-1.jpg"
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
                      src="../assets/images/avatar/avatar-1.jpg"
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
                {isStudent &&
                  <li>
                    <Link to="/student" className="dropdown-item">
                      <i className="fe fe-star me-2"></i>
                      Truy cập trang Học Viên
                    </Link>
                  </li>
                }
                {isLecturer &&
                  <li>
                    <Link to="/lecturer" className="dropdown-item">
                      <i className="fe fe-star me-2"></i>
                      Truy cập Trang Giảng Viên
                    </Link>
                  </li>
                }
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
