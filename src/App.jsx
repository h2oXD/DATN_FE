import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/trangchu" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
