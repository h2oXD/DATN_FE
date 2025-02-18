import CourseFree from "./CourseFree";
import CourseList from "./CourseList";
import MentorList from "./MentorList";

export default function Dashboard() {
  return (
    <>
      <div className="card">
        <MentorList />
        <CourseList />
        <CourseFree />
      </div>
    </>
  );
}
