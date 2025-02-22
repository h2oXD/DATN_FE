import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import GuestLayout from "./layouts/GuestLayout";
import LecturerLayout from "./layouts/LecturerLayout";
import StudentLayout from "./layouts/StudentLayout";
import CourseDetail from "./pages/Guest/CourseDetail";
import CourseList from "./pages/Guest/CourseList";
import Home from "./pages/Guest/Home";
import Edit from "./pages/Lecturer/Course/Edit";
import List from "./pages/Lecturer/Course/List";
import HomeLecturer from "./pages/Lecturer/HomeLecturer";
import InforLecturer from "./pages/Lecturer/Infor/InforLecturer";
import InforStudent from "./pages/Lecturer/Infor/InforStudent";
import PageNotFound from "./pages/PageNotFound";

import WalletLecturer from "./pages/Lecturer/Wallet/WalletLecturer";

import Basic from "./pages/Lecturer/Course/Basic";
import Curriculum from "./pages/Lecturer/Course/Curriculum";
import Goals from "./pages/Lecturer/Course/Goals";

import CourseReviews from "./pages/Lecturer/Reviews/CourseReviews";

import DashboardLecturer from "./pages/Lecturer/DashboardLecturer";

// import Edit from "./pages/Lecturer/Course/Edit";
// import Coding from "./pages/Lecturer/Course/Coding";
import RequireQuizParams from "./components/RequireQuizParams";
import { CourseProvider } from "./contexts/CourseProvider";
import { LecturerProvider } from "./contexts/LecturerProvider";
import Chat from "./pages/Lecturer/Chat/Chat";
import EditQuiz from "./pages/Lecturer/Quiz/EditQuiz";
import ListQuiz from "./pages/Lecturer/Quiz/ListQuiz";
import InstructorReviews from "./pages/Lecturer/Reviews/InstructorReviews";
import HomeStudent from "./pages/Student/HomeStudent";
import OverView from "./pages/Student/OverView/OverView";

import RegisterTeacher from "./components/RegisterTeacher";
import Course from "./pages/Student/CoursePage/Course";
import MyCourse from "./pages/Student/CoursePage/MyCourse";

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
          <Route path="/student/home" element={<OverView />} />
          <Route path="/student/course" element={<Course />} />
          <Route path="/student/MyCourse" element={<MyCourse />} />

          <Route
            path="/student/home/:course_id/coursedetail"
            element={<CourseDetail />}
          />
          <Route
            path="/student/registerTeacher"
            element={<RegisterTeacher />}
          />
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
          <Route path="/lecturer/quiz" element={<ListQuiz />} />
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
        <Route
          path="/lecturer/quiz/edit"
          element={
            <RequireQuizParams>
              <EditQuiz />
            </RequireQuizParams>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
