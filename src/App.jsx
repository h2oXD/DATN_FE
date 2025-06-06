import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import GuestLayout from "./layouts/GuestLayout";
import LecturerLayout from "./layouts/LecturerLayout";
import StudentLayout from "./layouts/StudentLayout";
import CourseDetail from "./pages/Student/CourseDetail/CourseDetail";
// import CourseList from "./pages/Guest/CourseList";
import Home from "./pages/Guest/Home";
import Edit from "./pages/Lecturer/Course/Edit";
import List from "./pages/Lecturer/Course/List";
// import HomeLecturer from "./pages/Lecturer/HomeLecturer";
import InforLecturer from "./pages/Lecturer/Infor/InforLecturer";
import InforStudent from "./pages/Lecturer/Infor/InforStudent";
import PageNotFound from "./pages/PageNotFound";

import WalletLecturer from "./pages/Lecturer/Wallet/WalletLecturer";

import Basic from "./pages/Lecturer/Course/Basic";
import Curriculum from "./pages/Lecturer/Course/Curriculum";
import Goals from "./pages/Lecturer/Course/Goals";

import CourseReviews from "./pages/Lecturer/Reviews/CourseReviews";

import DashboardLecturer from "./pages/Lecturer/DashboardLecturer";
import First from "./components/LecturerRegister/First";
import Last from "./components/LecturerRegister/Last";
import RegisterTeacher from "./components/RegisterTeacher";
import RequireQuizParams from "./components/RequireQuizParams";
import { CourseProvider } from "./contexts/CourseProvider";
import { LecturerProvider } from "./contexts/LecturerProvider";
// import Chat from "./pages/Lecturer/Chat/Chat";
import EditQuiz from "./pages/Lecturer/Quiz/EditQuiz";
import ListQuiz from "./pages/Lecturer/Quiz/ListQuiz";
import InstructorReviews from "./pages/Lecturer/Reviews/InstructorReviews";
import ShowCertificate from "./pages/Student/Certificates/ShowCertificate";
import MyCourse from "./pages/Student/CoursePage/MyCourse";
import HomeStudent from "./pages/Student/HomeStudent";
import OverView from "./pages/Student/OverView/OverView";
import Review from "./pages/Student/ReviewCourse/Review";
import Course from "./pages/Student/Study/Course";
import Voucher from "./pages/Student/Voucher/Voucher";
import WalletStudent from "./pages/Student/Wallet/WalletStudent";

import BlogList from "./pages/Student/Blog/List";
import MyBlog from "./pages/Student/Blog/MyBlog";
import WriteBlog from "./pages/Student/Blog/WriteBlog";
import Wishlist from "./pages/Student/CoursePage/Wishlist";
import VoucherDetail from "./pages/Student/Vouchers/Detail";
import VoucherHistory from "./pages/Student/Vouchers/History";
import VoucherPage from "./pages/Student/Vouchers/List";
import Content from "./pages/Student/Study/Components/Content";

import { VoucherProvider } from "./contexts/VoucherContext";
import ChangePassword from "./pages/Auth/ChangePassword";
import ShowCourse from "./pages/Lecturer/Course/ShowCourse";
import GoogleCallback from "./pages/Auth/GoogleCallback";
import LoginGoogle from "./pages/Auth/LoginGoogle";
import ResetPassword from "./pages/Auth/ResetPassword";
import WalletHomeLecturer from "./pages/Lecturer/Wallet/WalletHome";
import WalletHome from "./pages/Student/Wallet/WalletHome";
import ChatLayout from "./pages/Lecturer/Chat/ChatLayout";
import CourseDetailGuest from "./pages/Guest/CourseDetail";
import BasicView from "./pages/Lecturer/Course/Show/BasicView";
import GoalsView from "./pages/Lecturer/Course/Show/GoalsView";
import CurriculumView from "./pages/Lecturer/Course/Show/CurriculumView";

import ComplaintHistory from "./pages/Lecturer/Wallet/ComplainHistory";
import WithdrawalHistory from "./pages/Lecturer/Wallet/WithdrawHistory";
import PurchaseHistory from "./pages/Student/CoursePage/PurchaseHistory";
import SalesHistory from "./pages/Lecturer/Course/SalesHistory";

import ProfileLecturer from "./pages/Lecturer/Profile/Infor";
import ProfileStudent from "./pages/Student/Profile/Infor";
import EditBlog from "./pages/Student/Blog/EditBlog";
import PostDetail from "./pages/Student/Blog/Detail";
import HomeCourseList from "./pages/Guest/Course/HomCourseList";
import LecturerShowInfo from "./pages/Guest/LecturerShowInfo";
import StudentDetail from "./pages/Lecturer/Infor/StudentDetail";
import CategoryPage from "./components/categories/CategoryPage";

function App() {
  return (
    <>
      <VoucherProvider>
        <Routes>
          {/* Khách */}
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="/course" element={<HomeCourseList />} />
            <Route path="/course/:course_id/coursedetail" element={<CourseDetailGuest />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/loginGoogle" element={<LoginGoogle />} />
            <Route path="/lecturer/:id" element={<LecturerShowInfo />} />
            <Route path="/category" element={<CategoryPage />} />
          </Route>
          <Route path="/google/callback" element={<GoogleCallback />} />

          {/* Học Viên */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<OverView />} />
            <Route path="/student/home" element={<OverView />} />
            <Route path="/student/MyCourse" element={<MyCourse />} />
            <Route path="/student/wishList" element={<Wishlist />} />
            <Route path="/student/course" element={<Course />} />
            <Route path="/student/blogList" element={<BlogList />} />
            <Route path="/student/myBlog" element={<MyBlog />} />
            <Route path="/student/writeBlog" element={<WriteBlog />} />
            <Route path="/student/editBlog/:postId" element={<EditBlog />} />
            <Route path="/student/post/detail/:id" element={<PostDetail />} />
            <Route path="/student/course/voucher" element={<VoucherPage />} />
            <Route path="/student/course/voucher/history" element={<VoucherHistory />} />
            <Route path="/student/course/voucher/detail/:voucher_id" element={<VoucherDetail />} />
            <Route path="/student/certificate/:id" element={<ShowCertificate />} />
            <Route path="/student/home/:course_id/coursedetail/" element={<CourseDetail />} />
            <Route path="/student/walletStudent" element={<WalletStudent />} />
            <Route path="/student/course/:course_id/review" element={<Review />} />
            <Route path="/student/wallethome" element={<WalletHome />} />
            <Route path="/student/profile" element={<ProfileStudent/>} />
            
            <Route path="/student/PurchaseHistory" element={<PurchaseHistory />} />
            <Route path="/student/profile" element={<ProfileStudent />} />
            <Route path="/student/chat" element={<ChatLayout />} />
          </Route>

          {/* Đăng ký giảng viên */}
          <Route path="/registerTeacher" element={<RegisterTeacher />}>
            <Route index element={<First />} />
            <Route path="/registerTeacher/Last" element={<Last />} />
          </Route>

          <Route path="/student/course/:course_id" element={<Course />}>
            <Route index element={<Content />} />
          </Route>

          <Route path="/voucher" element={<Voucher />} />
          <Route path="/student/certificate/:id" element={<ShowCertificate />} />

          {/* Giảng Viên */}
          <Route path="/lecturer" element={<LecturerProvider><LecturerLayout /></LecturerProvider>} >
            <Route index element={<DashboardLecturer />} />
            <Route path="/lecturer/course" element={<List />} />
            <Route path="/lecturer/quiz" element={<ListQuiz />} />
            <Route path="/lecturer/course/:course_id/edit" element={<CourseProvider><Edit /></CourseProvider>} >
              <Route index element={<Navigate to="goals" replace />} />
              <Route path="basic" element={<Basic />} />
              <Route path="goals" element={<Goals />} />
              <Route path="curriculum" element={<Curriculum />} />
            </Route>
            <Route path="/lecturer/course/:course_id/view" element={<ShowCourse />} >
              <Route index element={<Navigate to="goals" replace />} />
              <Route path="basic" element={<BasicView />} />
              <Route path="goals" element={<GoalsView />} />
              <Route path="curriculum" element={<CurriculumView />} />
            </Route>
            <Route path="/lecturer/course/:course_id" element={<ShowCourse />} />
            <Route path="/lecturer/inforLecturers" element={<InforLecturer />} />
            <Route path="/lecturer/inforStudents" element={<InforStudent />} />
            <Route path="/lecturer/wallethome" element={<WalletHomeLecturer />} />
            <Route path="/lecturer/walletLecturer" element={<WalletLecturer />} />
            <Route path="/lecturer/withdraw-history" element={<WithdrawalHistory />} />
            <Route path="/lecturer/complaintHistory" element={<ComplaintHistory />} />
            <Route path="/lecturer/chat" element={<ChatLayout />} />
            <Route path="/lecturer/courseReviews" element={<CourseReviews />} />
            <Route path="/lecturer/instructorReviews" element={<InstructorReviews />} />
            <Route path="/lecturer/dashboard" element={<DashboardLecturer />} />
            <Route path="/lecturer/SalesHistory" element={<SalesHistory />} />
            <Route path="/lecturer/profile" element={<ProfileLecturer />} />
            <Route path="/lecturer/students/:id" element={<StudentDetail />} />
          </Route>

          <Route path="/lecturer/quiz/edit" element={ <RequireQuizParams><EditQuiz /></RequireQuizParams>}/>

          <Route path="*" element={<PageNotFound />} />
          <Route path="404" element={<PageNotFound />} />
        </Routes>
      </VoucherProvider>
    </>
  );
}

export default App;
