import { Route, Routes } from "react-router-dom";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import StudentLayout from "./layouts/StudentLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<CourseDetail />} />
        </Route>

        <Route path="/student" element={<StudentLayout />} >
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
