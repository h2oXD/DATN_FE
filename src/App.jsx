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

import Goals from "./pages/Lecturer/Course/Goals";
import Basic from "./pages/Lecturer/Course/Basic";
import Curriculum from "./pages/Lecturer/Course/Curriculum";

import CourseReviews from "./pages/Lecturer/Reviews/CourseReviews";

import DashboardLecturer from "./pages/Lecturer/DashboardLecturer";

// import Edit from "./pages/Lecturer/Course/Edit";
// import Coding from "./pages/Lecturer/Course/Coding";
import Chat from "./pages/Lecturer/Chat/Chat";
import InstructorReviews from "./pages/Lecturer/Reviews/InstructorReviews";
import { CourseProvider } from "./contexts/CourseProvider";
import { LecturerProvider } from "./contexts/LecturerProvider";
import HomeStudent from "./pages/Student/HomeStudent";

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
          <Route index element={<HomeStudent />} />
        </Route>

        {/* Giảng Viên */}
        <Route
          path="/lecturer"
          element={
            <LecturerProvider>
              <LecturerLayout />
            </LecturerProvider>
          }
        >
          <Route index element={<HomeLecturer />} />
          <Route path="/lecturer/course" element={<List />} />
          <Route
            path="/lecturer/course/:course_id/edit"
            element={
              <CourseProvider>
                <Edit />
              </CourseProvider>
            }
          >
            <Route index element={<Navigate to="basic" replace />} />
            <Route path="basic" element={<Basic />} />
            <Route path="goals" element={<Goals />} />
            <Route path="curriculum" element={<Curriculum />} />
            {/* <Route path="coding" element={<Coding />} /> */}
          </Route>
          <Route path="/lecturer/inforLecturers" element={<InforLecturer />} />

          <Route path="/lecturer/inforStudents" element={<InforStudent />} />
          <Route path="/lecturer/walletLecturer" element={<WalletLecturer />} />

          <Route path="/lecturer/chat" element={<Chat />} />
          <Route path="/lecturer/courseReviews" element={<CourseReviews />} />
          <Route
            path="/lecturer/instructorReviews"
            element={<InstructorReviews />}
          />
          <Route path="/lecturer/dashboard" element={<DashboardLecturer />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
