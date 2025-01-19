import { Route, Routes } from "react-router-dom";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<CourseDetail />} />
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
