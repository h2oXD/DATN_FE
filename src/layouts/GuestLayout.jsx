import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

export default function GuestLayout() {
    return (
        <>
            <Header />
                <main style={{marginTop: '70px'}}>
                    <Outlet />
                </main>
            <Footer />
            <Scroll />
        </>
    );
}