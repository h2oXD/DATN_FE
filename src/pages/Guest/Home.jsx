import "../../App.css";
import MentorList from "../../components/MentorList";
import MostPopularCourse from "../../components/MostPopularCourse";
import Banner from "../../components/Banner";
import FormLogin from "../Auth/FormLogin";
import FormRegister from "../Auth/FormRegister";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import CourseSale from "../components/CourseSale";
import CourseList from "./../Student/OverView/CourseList";
import CourseFree from "../Student/OverView/CourseFree";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Trang chủ</title>
        </Helmet>
      </HelmetProvider>

      <Banner />
      {/* <CourseSale /> */}
      {/* <MostPopularCourse /> */}

      <div className="container px-2 px-md-3">
        <div className="col-md-12 col-12">
          {/* <MentorList /> */}
          <CourseList />
          <CourseFree />
        </div>
      </div>

      <FormLogin />
      <FormRegister />
    </>
  );
}
