// import React from 'react'

import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import Header from "./lecturer/Header";
import SideBar from "./lecturer/SideBar";
import { StoreContext } from "../contexts/StoreProvider";

export default function LecturerLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const { user } = useContext(StoreContext)
  return (
    <>
      <div id="">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="d-flex">
          <SideBar collapsed={collapsed} />
          <main className="w-100" style={{ backgroundColor: "#F1F5F9" }}>
            <div className="container-fluid p-3">
              <Outlet context={{user: user}} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
