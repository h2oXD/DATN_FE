import { Navigate, Route, Routes } from "react-router-dom";
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
import Edit from "./pages/Lecturer/Course/Edit";
import InforLecturer from "./pages/Lecturer/Infor/InforLecturer";
import InforStudent from "./pages/Lecturer/Infor/InforStudent";

import WalletLecturer from "./pages/Lecturer/Wallet/WalletLecturer";

import EditInfLecturers from "./pages/Lecturer/Infor/EditInfLecturers";
import Goals from "./pages/Lecturer/Course/Goals";
import Basic from "./pages/Lecturer/Course/Basic";
import Curriculum from "./pages/Lecturer/Course/Curriculum";

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
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Giảng Viên */}
        <Route path="/lecturer" element={<LecturerLayout />}>
          <Route index element={<HomeLecturer />} />
          <Route path="/lecturer/course" element={<List />} />
          <Route path="/lecturer/course/:course_id/edit" element={<Edit />}>
            <Route index element={<Navigate to="basic" replace />} />
            <Route path="basic" element={<Basic />} />
            <Route path="goals" element={<Goals />} />
            <Route path="curriculum" element={<Curriculum />} />
          </Route>
          <Route path="/lecturer/inforLecturers" element={<InforLecturer />} />
          <Route
            path="/lecturer/inforLecturers/edit"
            element={<EditInfLecturers />}
          />
          <Route path="/lecturer/inforStudents" element={<InforStudent />} />
          <Route path="/lecturer/walletLecturer" element={<WalletLecturer />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
