import CourseContent from "./../../Guest/CourseContent";
import CourseSummary from "./CourseSummary";
import FeaturedCourses from "./../OverView/FeaturedCourses";
export default function CourseDetail() {
  return (
    <div className="row">
      <div className="col-lg-9 col-md-12 col-12 mb-4 mb-lg-0">
        <CourseContent />
      </div>
      <div className="col-lg-3">
        <CourseSummary />
      </div>
      <div className="col-lg-9 col-md-12 col-12 mb-4 mb-lg-0 mt-3">
        <div className="card rounded-3">
          <FeaturedCourses />
        </div>
      </div>
    </div>
  );
}
