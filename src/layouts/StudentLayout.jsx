import { useContext, useEffect, useState } from "react";
import Header from "./student/Header";
import SideBar from "./student/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { StoreContext } from "../contexts/StoreProvider";

export default function StudentLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const { user } = useContext(StoreContext)
  const navigate = useNavigate();
  const isStudent = user?.roles?.some((role) => role.name === "student");

  if (user && !isStudent) {
    navigate('404')
  }
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);
  if (!user) {
    navigate('404')
    // return null; // Hoặc hiển thị loading indicator
  }
  return (
    <>
      <div id="">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="d-flex tw-mt-[60px]">
          <SideBar collapsed={collapsed} />
          <main className="w-100" style={{ backgroundColor: "#F1F5F9" }}>
            <div className="container-fluid p-3">
              <Outlet context={{ user: user }} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
