import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../App.css";
import Banner from "../../components/Banner";
import FormLogin from "../Auth/FormLogin";
import FormRegister from "../Auth/FormRegister";
// import CourseSale from "../components/CourseSale";
import LearningCategories from "../../components/LearningCategories";
import WebPage from "../../components/WebPage";
import CourseFree from "./OverView/CourseFree";
import CourseList from "./OverView/CourseList";
import MentorList from "./OverView/MentorList";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LoraSpace</title>
        </Helmet>
      </HelmetProvider>

      <Banner />
      {/* <CourseSale /> */}
      {/* <MostPopularCourse /> */}
      <LearningCategories />

      <div className="container px-2 px-md-3">
        <div className="col-md-12 col-12">
          <CourseList />
          <CourseFree />
          <MentorList />
        </div>
      </div>
      <div className="bg-light">
      <WebPage />

      </div>

      <FormLogin />
      <FormRegister />
    </>
  );
}
