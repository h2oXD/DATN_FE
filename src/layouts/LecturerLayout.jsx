// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "./lecturer/Header";
import SideBar from "./lecturer/SideBar";

export default function LecturerLayout() {
  return (
    <>
      <div id="db-wrapper">
        <SideBar />
        <main id="page-content" style={{backgroundColor: "#F1F5F9"}}>
          <Header />
          <div className="container-fluid p-3">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
