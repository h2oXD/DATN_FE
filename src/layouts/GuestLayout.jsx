import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Slider from "../components/Slider";

// import SideBar from "../components/SideBar";

export default function GuestLayout() {
  return (
    <>
      <Header />

      {/* <Slider /> */}
      {/* <SideBar /> */}
      <main style={{ marginTop: "10px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
