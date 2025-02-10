/* eslint-disable react/prop-types */
// import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import {
  CourseIcon,
  ThongKeIcon,
  ThongTinIcon,
  TinNhanIcon,
  ViTienIcon,
} from "./Icon";
// import { Link } from "react-router-dom";

export default function SideBar({ collapsed }) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Sidebar
        className="vh-100 pe-1 mt-1"
        backgroundColor={"white"}
        collapsed={collapsed}
        transitionDuration={500}
      >
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active ? "#f3f3f3" : undefined,
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              };
            },
          }}
        >
          <NavLink className="text-dark" to={"/lecturer/overview"}>
            <MenuItem
              rootStyles={{
                ["." + "ps-menu-icon"]: {},
              }}
              active={currentPath === "/lecturer/overview"}
              className="text-dark"
              icon={<ThongKeIcon />}
            >
              Thống kê
            </MenuItem>
          </NavLink>
          <SubMenu
            className="text-dark"
            label="Thông tin"
            icon={<ThongTinIcon />}
          >
            <NavLink className="text-dark" to={"/lecturer/inforLecturers"}>
              <MenuItem
                active={currentPath === "/lecturer/inforLecturers"}
                className="text-dark"
              >
                Giảng viên
              </MenuItem>
            </NavLink>
            <NavLink className="text-dark" to={"/lecturer/inforStudents"}>
              <MenuItem
                className="text-dark"
                active={currentPath === "/lecturer/inforStudents"}
              >
                Học viên
              </MenuItem>
            </NavLink>
          </SubMenu>
          <NavLink to={"/lecturer/course"} className="text-dark">
            <MenuItem
              className="text-dark"
              icon={<CourseIcon />}
              active={currentPath === "/lecturer/course"}
            >
              Khoá học
            </MenuItem>
          </NavLink>
          <NavLink to={"/lecturer/walletLecturer"} className="text-dark">
            <MenuItem
              className="text-dark"
              icon={<ViTienIcon />}
              active={currentPath === "/lecturer/walletLecturer"}
            >
              Ví tiền
            </MenuItem>
          </NavLink>
          <NavLink className="text-dark" to={"/lecturer/chat"}>
            <MenuItem className="text-dark" icon={<TinNhanIcon />}>
              Tin nhắn
            </MenuItem>
          </NavLink>
        </Menu>
      </Sidebar>
    </>
  );
}
