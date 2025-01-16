import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Scroll from "./Scroll";

export default function ClientLayout() {
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