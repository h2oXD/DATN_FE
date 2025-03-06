/* eslint-disable react/prop-types */
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import {
  BaiVietIcon,
  ChatIcon,
  CourseIcon,
  LecturerIcon,
  LoTrinhIcon,
  TongQuanIcon,
  ViTienIcon,
  ĐKiIcon,
} from "./Icon";

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
            active={currentPath === "/student/"}
            className="text-dark"
            icon={<TongQuanIcon />}
            component={<Link to={"/student/"} />}
          >
            Tổng quan
          </MenuItem>
          <SubMenu className="text-dark" label="Khóa học" icon={<CourseIcon />}>
            <MenuItem
              active={currentPath === "/student/MyCourse"}
              className="text-dark"
              component={<Link to={"/student/MyCourse"} />}
            >
              Khóa học của tôi
            </MenuItem>
            <MenuItem
              className="text-dark"
              active={currentPath === "/student/KHYeuThich"}
              component={<Link to={"/student/KHYeuThich"} />}
            >
              Khóa học yêu thích
            </MenuItem>
            <MenuItem
              className="text-dark"
              active={currentPath === "/student/LSHocTap"}
              component={<Link to={"/student/LSHocTap"} />}
            >
              Lịch sử học tập
            </MenuItem>
          </SubMenu>
          <MenuItem
            className="text-dark"
            icon={<LecturerIcon />}
            active={currentPath === "/student/lecturer"}
            component={<Link to={"/student/lecturer"} />}
          >
            Người hướng dẫn
          </MenuItem>
          <MenuItem
            className="text-dark"
            icon={<BaiVietIcon />}
            component={<Link to={"/student/baiViet"} />}
          >
            Bài viết
          </MenuItem>
          <MenuItem
            className="text-dark"
            icon={<LoTrinhIcon />}
            component={<Link to={"/student/loTrinh"} />}
          >
            Lộ trình
          </MenuItem>
          <MenuItem
            className="text-dark"
            icon={<ViTienIcon />}
            component={<Link to={"/student/walletStudent"} />}
          >
            Ví
          </MenuItem>
          <MenuItem
            className="text-dark"
            icon={<ChatIcon />}
            component={<Link to={"/student/chatAI"} />}
          >
            Chat AI
          </MenuItem>
          <MenuItem
            className="text-dark"
            icon={<ĐKiIcon />}
            component={<Link to={"/registerTeacher"} />}
          >
            Đăng ký giảng viên
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
