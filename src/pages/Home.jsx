import "../App.css";
import MentorList from "../components/MentorList";
import MostPopularCourse from "../components/MostPopularCourse";
import Banner from "../components/Banner";
// import CourseSale from "../components/CourseSale";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <CourseSale /> */}
      <MentorList />
      <MostPopularCourse />
    </>
  );
};
