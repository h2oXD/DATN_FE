import "../../App.css";
import MentorList from "../../components/MentorList";
import MostPopularCourse from "../../components/MostPopularCourse";
import Banner from "../../components/Banner";
import FormLogin from "../Auth/FormLogin";
import FormRegister from "../Auth/FormRegister";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import CourseSale from "../components/CourseSale";

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
      <MentorList />
      <MostPopularCourse />
      <FormLogin />
      <FormRegister />
    </>
  );
}
