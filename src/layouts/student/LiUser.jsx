import { useContext, useEffect, useState } from "react";
import Logout from "../../pages/Auth/Logout";
import { StoreContext } from "../../contexts/StoreProvider";
import { Link } from "react-router-dom";

export default function LiUser() {
    const { user } = useContext(StoreContext);
    const [userInfo, setUserInfo] = useState(null)
    const [isLecturer, setIsLecturer] = useState(false);
    useEffect(() => {
        if (user) {
            setUserInfo(user)
            const hasLecturerRole = user.roles.some(role => role.name === "lecturer")
            setIsLecturer(hasLecturerRole)
        }
    }, [user])
    return (
        <>
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
                            src="/assets/images/avatar/avatar-1.jpg"
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
                                    src="/assets/images/avatar/avatar-1.jpg"
                                    className="rounded-circle"
                                />
                            </div>
                            <div className="ms-3 lh-1">
                                <h5 className="mb-1">{userInfo && userInfo.name}</h5>
                                <p className="mb-0">{userInfo && userInfo.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <ul className="list-unstyled">
                        <li>
                            <Link
                                className="dropdown-item"
                                to={'profile'}
                            >
                                <i className="fe fe-user me-2"></i>
                                Thông tin cá nhân
                            </Link>
                        </li>
                        {!isLecturer &&
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to={"/registerTeacher"}
                                >
                                    <i className="fe fe-star me-2"></i>
                                    Đăng ký trở thành giảng viên
                                </Link>
                            </li>}
                        {isLecturer &&
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to={"/lecturer"}
                                >
                                    <i className="fe fe-star me-2"></i>
                                    Truy cập trang của giảng viên
                                </Link>
                            </li>}

                        {/* <li>
                            <a
                                className="dropdown-item"
                                href="../pages/student-subscriptions.html"
                            >
                                <i className="fe fe-star me-2"></i>
                                Subscription
                            </a>
                        </li> */}

                        <li>
                            <a className="dropdown-item" href="#">
                                <i className="fe fe-settings me-2"></i>
                                Settings
                            </a>
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
        </>
    )
}
