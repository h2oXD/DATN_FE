import { Outlet } from "react-router-dom";

import Header from "../layouts/lecturer/Header";

export default function RegisterTeacher() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
