/* eslint-disable react/prop-types */
// import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { LiaQuestionSolid } from "react-icons/lia";

import {
  CourseIcon,
  DanhGiaIcon,
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
          <MenuItem
            rootStyles={{
              ["." + "ps-menu-icon"]: {},
            }}
            active={currentPath === "/lecturer/dashboard"}
            className="text-dark"
            icon={<ThongKeIcon />}
            component={<Link to={"/lecturer/dashboard"} />}
          >
            Thống kê
          </MenuItem>
          <SubMenu
            className="text-dark"
            label="Thông tin"
            icon={<ThongTinIcon />}
          >
            <MenuItem
              active={currentPath === "/lecturer/inforLecturers"}
              className="text-dark"
              component={<Link to={"/lecturer/inforLecturers"} />}
            >
              Giảng viên
            </MenuItem>
            <MenuItem
              className="text-dark"
              active={currentPath === "/lecturer/inforStudents"}
              component={<Link to={"/lecturer/inforStudents"} />}
            >
              Học viên
            </MenuItem>
          </SubMenu>
          <MenuItem
            className="text-dark"
            icon={<CourseIcon />}
            active={currentPath === "/lecturer/course"}
            component={<Link to={"/lecturer/course"} />}
          >
            Khoá học
          </MenuItem>
          <MenuItem
            className="text-dark"
            icon={<ViTienIcon />}
            active={currentPath === "/lecturer/walletLecturer"}
            component={<Link to={"/lecturer/walletLecturer"} />}
          >
            Ví tiền
          </MenuItem>
          <MenuItem className="text-dark" icon={<TinNhanIcon />} component={<Link to={"/lecturer/chat"} />}>
            Tin nhắn
          </MenuItem>
          <SubMenu
            className="text-dark"
            label="Đánh giá"
            icon={<DanhGiaIcon />}
          >
            <MenuItem
              active={currentPath === "/lecturer/inforLecturers"}
              className="text-dark"
              component={<Link to={"/lecturer/courseReviews"} />}
            >
              Khóa học
            </MenuItem>
            <MenuItem
              className="text-dark"
              active={currentPath === "/lecturer/instructorReviews"}
              component={<Link to={"/lecturer/instructorReviews"} />}
            >
              Giảng viên
            </MenuItem>
          </SubMenu>
          <MenuItem className="text-dark" icon={<LiaQuestionSolid className="tw-size-7" />} component={<Link to={"/lecturer/quiz"} />}>
            Bộ câu hỏi trắc nghiệm
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
