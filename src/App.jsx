import { Route, Routes } from "react-router-dom";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Guest/Home";
import CourseDetail from "./pages/Guest/CourseDetail";
import StudentLayout from "./layouts/StudentLayout";
import LecturerLayout from "./layouts/LecturerLayout";
import PageNotFound from "./pages/PageNotFound";
import CourseList from "./pages/Guest/CourseList";
import HomeLecturer from "./pages/Lecturer/HomeLecturer";
import List from "./pages/Lecturer/Course/List";
import Create from "./pages/Lecturer/Course/Create";
// import Edit from "./pages/Lecturer/Course/Edit";

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
          <Route index element={<HomeLecturer />} />
          <Route path="/lecturer/course" element={<List />} />
          <Route path="/lecturer/course/create" element={<Create />} />
          {/* <Route path="/lecturer/course/edit/:id" element={<Edit />} /> */}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
