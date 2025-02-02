import { Route, Routes } from "react-router-dom";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Guest/Home";
import CourseDetail from "./pages/Guest/CourseDetail";
import StudentLayout from "./layouts/StudentLayout";
import LecturerLayout from "./layouts/LecturerLayout";
import PageNotFound from "./pages/PageNotFound";
import CourseList from "./pages/Guest/CourseList";

function App() {
  return (
    <>
      <Routes>

        {/* Khách */}
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/course/detail/:id" element={<CourseDetail />} />
        </Route>

        {/* Học Viên */}
        <Route path="/student" element={<StudentLayout />} >
          <Route index element={<Home />} />
        </Route>

        {/* Giảng Viên */}
        <Route path="/lecturer" element={<LecturerLayout />} >
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
