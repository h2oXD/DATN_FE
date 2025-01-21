import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
    // const {user, token, role} = useStateContext();
   
    return (
        <>
            <Header />
            <main style={{ marginTop: '70px' }}>
                <Outlet />
            </main>
            <Footer />
            <Scroll />
        </>
    );
}