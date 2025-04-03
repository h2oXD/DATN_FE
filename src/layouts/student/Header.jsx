/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logout from "../../pages/Auth/Logout";
import LiUser from "./LiUser";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreProvider";
import UserHeader from "../../components/UserHeader";

export default function Header({ collapsed, setCollapsed }) {
  const { user } = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);
  return (
    <>
      <div className="header tw-fixed tw-top-0 tw-left-0 tw-w-full" style={{ zIndex: "999" }}>
        <nav className="navbar-default navbar navbar-expand-lg flex-nowrap">
          <a
            className="me-3 ms-1"
            id="nav-toggle"
            href="#"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i className="fe fe-menu"></i>
          </a>
          <Link to={"/"} className="">
            <img src="/logo.png" width={"133px"} height={"31px"} alt="" />
          </Link>
          <div className="ms-auto d-flex">
            <UserHeader />
          </div>
        </nav>
      </div>
    </>
  );
}
