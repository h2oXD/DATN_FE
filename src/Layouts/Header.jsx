import React from "react";
import "../assets/css/theme.min.css";
import "../assets/fonts/feather/feather.css";
import "../assets/libs/bootstrap-icons/font/bootstrap-icons.min.css";
import "../assets/libs/simplebar/dist/simplebar.min.css";
import "../assets/libs/tiny-slider/dist/tiny-slider.css";
import "../assets/js/vendors/darkMode.js";
import "../assets/images/favicon/favicon.ico";
import "../assets/libs/@popperjs/core/dist/umd/popper.min.js";
import "../assets/libs/bootstrap/dist/js/bootstrap.min.js";
import "../assets/js/theme.min.js";
import "../assets/libs/tiny-slider/dist/min/tiny-slider.js";
import "../assets/js/vendors/tnsSlider.js";
import "../assets/libs/simplebar/dist/simplebar.min.js";
// import "../";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container px-0">
          <a class="navbar-brand" href="index.html">
            <img src="../assets/images/brand/logo/logo.svg" alt="Geeks" />
          </a>

          <div class="ms-auto d-flex align-items-center order-lg-3">
            <div class="d-flex gap-2 align-items-center">
              <a
                href="#langaugeModal"
                class="text-inherit me-2"
                data-bs-toggle="modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-globe text-gray-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                </svg>
              </a>
              <a href="pages/sign-in.html" class="btn btn-outline-dark">
                Login
              </a>
              <a
                href="pages/sign-up.html"
                class="btn btn-dark d-none d-md-block"
              >
                Join Now
              </a>
            </div>
          </div>
          <div>
            <button
              class="navbar-toggler collapsed ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-default"
              aria-controls="navbar-default"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar top-bar mt-0"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbar-default">
            <ul class="navbar-nav mt-3 mt-lg-0 mx-xxl-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarBrowse"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-display="static"
                >
                  Categories
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-arrow"
                  aria-labelledby="navbarBrowse"
                >
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Web Development
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Bootstrap
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          React
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          GraphQl
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Gatsby
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Grunt
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Svelte
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Meteor
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          HTML5
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Angular
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Design
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Illustrator
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          UX / UI Design
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Figma Design
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Adobe XD
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Sketch
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Icon Design
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Photoshop
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      IT Software
                    </a>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      Music
                    </a>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      Life Style
                    </a>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="pages/course-category.html" class="dropdown-item">
                      Photography
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarLanding"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Landings
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarLanding">
                  <li>
                    <h4 class="dropdown-header">Landings</h4>
                  </li>
                  <li>
                    <a href="index.html" class="dropdown-item">
                      <span>Home Default</span>
                      <span class="badge bg-primary ms-2">New</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages/landings/landing-abroad.html"
                      class="dropdown-item"
                    >
                      <span>Home Abroad</span>
                      <span class="badge bg-primary ms-2">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="mentor/mentor.html" class="dropdown-item">
                      <span>Home Mentor</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages/landings/landing-education.html"
                      class="dropdown-item"
                    >
                      Home Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages/landings/home-academy.html"
                      class="dropdown-item"
                    >
                      Home Academy
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages/landings/landing-courses.html"
                      class="dropdown-item"
                    >
                      Home Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages/landings/landing-sass.html"
                      class="dropdown-item"
                    >
                      Home Sass
                    </a>
                  </li>
                  <li class="border-bottom my-2"></li>
                  <li>
                    <a
                      href="pages/landings/course-lead.html"
                      class="dropdown-item"
                    >
                      Lead Course
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages/landings/request-access.html"
                      class="dropdown-item"
                    >
                      Request Access
                    </a>
                  </li>

                  <li>
                    <a
                      href="pages/landings/landing-job.html"
                      class="dropdown-item"
                    >
                      Job Listing
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarPages"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-arrow"
                  aria-labelledby="navbarPages"
                >
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Courses
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-filter-grid.html"
                        >
                          Course Grid
                          <span class="badge bg-primary ms-2">New</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-filter-list.html"
                        >
                          Course List
                          <span class="badge bg-primary ms-2">New</span>
                        </a>
                      </li>
                      <li class="border-bottom my-2"></li>

                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category.html"
                        >
                          Course Category v1
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-category-v2.html"
                        >
                          Course Category v2
                          <span class="badge bg-primary ms-2">New</span>
                        </a>
                      </li>
                      <li class="border-bottom my-2"></li>

                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-single.html"
                        >
                          Course Single v1
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-single-v2.html"
                        >
                          Course Single v2
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-single-v3.html"
                        >
                          Course Single v3
                          <span class="badge bg-primary ms-2">New</span>
                        </a>
                      </li>
                      <li class="border-bottom my-2"></li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-resume.html"
                        >
                          Course Resume
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/course-checkout.html"
                        >
                          Course Checkout
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/add-course.html">
                          Add New Course
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Paths
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="pages/course-path.html" class="dropdown-item">
                          Browse Path
                        </a>
                      </li>
                      <li>
                        <a
                          href="pages/course-path-single.html"
                          class="dropdown-item"
                        >
                          Path Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Blog
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="pages/blog.html">
                          Listing
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/blog-single.html">
                          Article
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/blog-category.html"
                        >
                          Category
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/blog-sidebar.html">
                          Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Career
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="pages/career.html">
                          Overview
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/career-list.html">
                          Listing
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/career-single.html"
                        >
                          Opening
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Portfolio
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="pages/portfolio.html">
                          List
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/portfolio-single.html"
                        >
                          Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      <span>Mentor</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="mentor/mentor.html">
                          Home
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="mentor/mentor-list.html">
                          List
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="mentor/mentor-single.html"
                        >
                          Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Job
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/landings/landing-job.html"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/jobs/job-listing.html"
                        >
                          List
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/jobs/job-grid.html"
                        >
                          Grid
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/jobs/job-single.html"
                        >
                          Single
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/jobs/company-list.html"
                        >
                          Company List
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/jobs/company-about.html"
                        >
                          Company Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Specialty
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="pages/coming-soon.html">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/404-error.html">
                          Error 404
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/maintenance-mode.html"
                        >
                          Maintenance Mode
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/terms-condition-page.html"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr class="mx-3" />
                  </li>

                  <li>
                    <a class="dropdown-item" href="pages/about.html">
                      About
                    </a>
                  </li>

                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Help Center
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="pages/help-center.html">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/help-center-faq.html"
                        >
                          FAQ's
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/help-center-guide.html"
                        >
                          Guide
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/help-center-guide-single.html"
                        >
                          Guide Single
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/help-center-support.html"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/compare-plan.html">
                      Compare Plan
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="pages/contact.html">
                      Contact
                    </a>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a class="dropdown-item dropdown-toggle" href="#">
                      Dropdown levels
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-start"
                      data-bs-popper="none"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Dropdown item
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Dropdown item
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Dropdown item
                        </a>
                      </li>
                      {/* <!-- dropdown submenu open right --> */}
                      <li class="dropdown-submenu dropend">
                        <a class="dropdown-item dropdown-toggle" href="#">
                          Dropdown (end)
                        </a>
                        <ul class="dropdown-menu" data-bs-popper="none">
                          <li>
                            <a class="dropdown-item" href="#">
                              Dropdown item
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Dropdown item
                            </a>
                          </li>
                        </ul>
                      </li>

                      {/* <!-- dropdown submenu open left --> */}
                      <li class="dropdown-submenu dropstart">
                        <a class="dropdown-item dropdown-toggle" href="#">
                          Dropdown (start)
                        </a>
                        <ul class="dropdown-menu" data-bs-popper="none">
                          <li>
                            <a class="dropdown-item" href="#">
                              Dropdown item
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Dropdown item
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarAccount"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounts
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-arrow"
                  aria-labelledby="navbarAccount"
                >
                  <li>
                    <h4 class="dropdown-header">Accounts</h4>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Instructor
                    </a>
                    <ul class="dropdown-menu">
                      <li class="text-wrap">
                        <h5 class="dropdown-header text-dark">Instructor</h5>
                        <p class="dropdown-text mb-0">
                          Instructor dashboard for manage courses and earning.
                        </p>
                      </li>
                      <li>
                        <hr class="mx-3" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/dashboard-instructor.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-profile.html"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-courses.html"
                        >
                          My Courses
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-order.html"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-reviews.html"
                        >
                          Reviews
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-students.html"
                        >
                          Students
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-payouts.html"
                        >
                          Payouts
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/instructor-earning.html"
                        >
                          Earning
                        </a>
                      </li>
                      <li class="dropdown-submenu dropend">
                        <a
                          class="dropdown-item dropdown-list-group-item dropdown-toggle"
                          href="#"
                        >
                          Quiz
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/instructor-quiz.html"
                            >
                              Quiz
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/instructor-quiz-details.html"
                            >
                              Single
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/instructor-quiz-result.html"
                            >
                              Result
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Students
                    </a>
                    <ul class="dropdown-menu">
                      <li class="text-wrap">
                        <h5 class="dropdown-header text-dark">Students</h5>
                        <p class="dropdown-text mb-0">
                          Students dashboard to manage your courses and
                          subscriptions.
                        </p>
                      </li>
                      <li>
                        <hr class="mx-3" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/dashboard-student.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/student-subscriptions.html"
                        >
                          Subscriptions
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/payment-method.html"
                        >
                          Payments
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/billing-info.html">
                          Billing Info
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pages/invoice.html">
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/invoice-details.html"
                        >
                          Invoice Details
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/dashboard-student.html"
                        >
                          Bookmarked
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="pages/dashboard-student.html"
                        >
                          My Path
                        </a>
                      </li>
                      <li class="dropdown-submenu dropend">
                        <a
                          class="dropdown-item dropdown-list-group-item dropdown-toggle"
                          href="#"
                        >
                          Quiz
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/student-quiz.html"
                            >
                              Quiz
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/student-quiz-attempt.html"
                            >
                              Attempt
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/student-quiz-start.html"
                            >
                              Start
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="pages/student-quiz-result.html"
                            >
                              Result
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu dropend">
                    <a
                      class="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Admin
                    </a>
                    <ul class="dropdown-menu">
                      <li class="text-wrap">
                        <h5 class="dropdown-header text-dark">Master Admin</h5>
                        <p class="dropdown-text mb-0">
                          Master admin dashboard to manage courses, user, site
                          setting , and work with amazing apps.
                        </p>
                      </li>
                      <li>
                        <hr class="mx-3" />
                      </li>
                      <li class="px-3 d-grid">
                        <a
                          href="pages/dashboard/admin-dashboard.html"
                          class="btn btn-sm btn-primary"
                        >
                          Go to Dashboard
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr class="mx-3" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/sign-in.html">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/sign-up.html">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/forget-password.html">
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/profile-edit.html">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/security.html">
                      Security
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/social-profile.html">
                      Social Profiles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/notifications.html">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/profile-privacy.html">
                      Privacy Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/delete-profile.html">
                      Delete Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pages/linked-accounts.html">
                      Linked Accounts
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fe fe-more-horizontal"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarDropdown"
                >
                  <div class="list-group">
                    <a
                      class="list-group-item list-group-item-action border-0"
                      href="docs/index.html"
                    >
                      <div class="d-flex align-items-center">
                        <i class="fe fe-file-text fs-3 text-primary"></i>
                        <div class="ms-3">
                          <h5 class="mb-0">Documentations</h5>
                          <p class="mb-0 fs-6">Browse the all documentation</p>
                        </div>
                      </div>
                    </a>
                    <a
                      class="list-group-item list-group-item-action border-0"
                      href="docs/bootstrap-5-snippets.html"
                    >
                      <div class="d-flex align-items-center">
                        <i class="bi bi-files fs-3 text-primary"></i>
                        <div class="ms-3">
                          <h5 class="mb-0">Snippet</h5>
                          <p class="mb-0 fs-6">Bunch of Snippet</p>
                        </div>
                      </div>
                    </a>
                    <a
                      class="list-group-item list-group-item-action border-0"
                      href="docs/changelog.html"
                    >
                      <div class="d-flex align-items-center">
                        <i class="fe fe-layers fs-3 text-primary"></i>
                        <div class="ms-3">
                          <h5 class="mb-0">
                            Changelog
                            <span
                              class="text-primary ms-1"
                              id="changelog"
                            ></span>
                          </h5>
                          <p class="mb-0 fs-6">See what's new</p>
                        </div>
                      </div>
                    </a>
                    <a
                      class="list-group-item list-group-item-action border-0"
                      href="https://geeksui.codescandy.com/geeks-rtl/"
                      target="_blank"
                    >
                      <div class="d-flex align-items-center">
                        <i class="fe fe-toggle-right fs-3 text-primary"></i>
                        <div class="ms-3">
                          <h5 class="mb-0">RTL demo</h5>
                          <p class="mb-0 fs-6">RTL Pages</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="langaugeModal"
        tabindex="-1"
        aria-labelledby="langaugeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="modal-title" id="langaugeModalLabel">
                  Choose a language
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <a class="text-inherit fw-semibold active" href="#!">
                  English
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Deutsch
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Español
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Français
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Indonesia
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Italiano
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  日本語
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  한국어
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Nederlands
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Polski
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Português
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Română
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Русский
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  ภาษาไทย
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Türkçe
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  Tiếng Việt
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  中文(简体)
                </a>
                <a class="text-inherit fw-semibold" href="#!">
                  中文(繁體)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
