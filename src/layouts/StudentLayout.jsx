import { useState } from "react";
import Header from "./student/Header";
import SideBar from "./student/SideBar";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <div id="">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="d-flex">
          <SideBar collapsed={collapsed} />
          <main className="w-100" style={{ backgroundColor: "#F1F5F9" }}>
            <div className="container-fluid p-3">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
