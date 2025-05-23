import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import {
  BaiVietIcon,
  CertificateIcon,
  ChatIcon,
  CourseIcon,
  HomeIcon,
  LecturerIcon,
  LoTrinhIcon,
  TongQuanIcon,
  ViTienIcon,
  VoucherIcon,
  ĐKiIcon,
} from "./Icon";

export default function SideBar({ collapsed }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // 🛠 Lấy userId và courseId từ localStorage (hoặc context nếu có)
  const userId = localStorage.getItem("user_id") || "defaultUserId";
  const courseId = localStorage.getItem("course_id") || "defaultCourseId";

  return (
    <>
      <Sidebar
        className="tw-min-h-[630px] pe-1 mt-1"
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
            active={currentPath == "/student/home"}
            className="text-dark"
            icon={<HomeIcon />}
            component={<Link to={"/student/home"} />}
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
              active={currentPath === "/student/wishList"}
              component={<Link to={"/student/wishList"} />}
            >
              Khóa học yêu thích
            </MenuItem>
            <MenuItem
              className="text-dark"
              active={currentPath === "/student/PurchaseHistory"}
              component={<Link to={"/student/PurchaseHistory"} />}
            >
              Lịch sử mua khóa học
            </MenuItem>
          </SubMenu>
          {/* <MenuItem
            className="text-dark"
            icon={<LecturerIcon />}
            active={currentPath === "/student/lecturer"}
            component={<Link to={"/student/lecturer"} />}
          >
            Người hướng dẫn
          </MenuItem> */}
          <MenuItem
            className="text-dark"
            icon={<BaiVietIcon />}
            component={<Link to={"/student/blogList"} />}
          >
            Bài viết
          </MenuItem>
          {/* <MenuItem
            className="text-dark"
            icon={<LoTrinhIcon />}
            component={<Link to={"/student/loTrinh"} />}
          >
            Lộ trình
          </MenuItem> */}

          <MenuItem
            className="text-dark"
            icon={<ViTienIcon />}
            component={<Link to={"/student/wallethome"} />}
          >
            Ví
          </MenuItem>

          <MenuItem
            className="text-dark"
            icon={<ChatIcon />}
            component={<Link to={"/student/chat"} />}
          >
            Chat
          </MenuItem>
          {/* <MenuItem
            className="text-dark"
            icon={<ĐKiIcon />}
            component={<Link to={"/registerTeacher"} />}
          >
            Đăng ký giảng viên
          </MenuItem> */}
          {/* <MenuItem
            className="text-dark"
            icon={<CertificateIcon />}
            component={
              <Link to={`/student/certificate/${userId}/${courseId}`} />
            }
          >
            Chứng chỉ
          </MenuItem> */}
          {/* <MenuItem
            className="text-dark"
            icon={<VoucherIcon />}
            component={<Link to={"/student/course/voucher"} />}
          >
            Voucher
          </MenuItem> */}
        </Menu>
      </Sidebar>
    </>
  );
}
