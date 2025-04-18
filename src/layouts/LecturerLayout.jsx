// import React from 'react'

import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "./lecturer/Header";
import SideBar from "./lecturer/SideBar";
import { StoreContext } from "../contexts/StoreProvider";

export default function LecturerLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const { user } = useContext(StoreContext)
  const navigate = useNavigate();
  const isLecturer = user?.roles?.some((role) => role.name === "lecturer");

  if (user && !isLecturer) {
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
          <main className="w-100" style={{ backgroundColor: "#F3F3F9" }}>
            <div className="container-fluid p-3">
              <Outlet context={{ user: user }} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
