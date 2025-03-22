import FormLogin from "../Auth/FormLogin";
import FormRegister from "../Auth/FormRegister";
import CourseContent from "./CourseContent";
import CourseSummary from "./CourseSummary";
import FeaturedCourses from "./FeaturedCourses";

export default function CourseDetailGuest() {
  return (
    <>
      <div className="container bg-light">
        <div className="row d-flex align-items-start pt-2">
          {/* Nội dung khóa học */}
          <div className="col-lg-9 col-md-12">
            <CourseContent />
          </div>

          {/* Tóm tắt khóa học */}
          <div className="col-lg-3">
            <CourseSummary />
          </div>
        </div>

        {/* Khóa học nổi bật */}
        <div className="row mt-4 pb-4">
          <div className="col-lg-9">
            <div className="card rounded-3 p-3 shadow">
              <FeaturedCourses />
            </div>
          </div>
        </div>
      </div>

      <FormLogin />
      <FormRegister />
    </>
  );
}
