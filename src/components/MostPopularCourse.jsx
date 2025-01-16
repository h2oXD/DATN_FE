export default function MostPopularCourse() {
    return (
        <>
            <section className="mt-2">
                {/* <!-- row --> */}
                <div className="container mb-lg-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-0 mt-2">
                                <span className="text-primary mb-0 d-block text-uppercase fw-semibold ls-lg">
                                    Theo danh mục
                                </span>
                                <h2 className="mb-1 display-4 fw-bold">Khoá học nổi bật</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* <!-- Nav tab --> */}
                            <ul className="nav nav-lb-tab mb-6" id="pills-tab" role="tablist">
                                {/* <!-- nav item --> */}
                                <li className="nav-item ms-0" role="presentation">
                                    <a
                                        className="nav-link active"
                                        id="pills-development-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-development"
                                        role="tab"
                                        aria-controls="pills-development"
                                        aria-selected="true">
                                        Development
                                    </a>
                                </li>
                                {/* <!-- nav item --> */}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-design-tab" data-bs-toggle="pill" href="#pills-design" role="tab" aria-controls="pills-design" aria-selected="false">Design</a>
                                </li>
                                {/* <!-- nav item --> */}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" href="#pills-marketing" role="tab" aria-controls="pills-marketing" aria-selected="false">
                                        Marketing
                                    </a>
                                </li>
                                {/* <!-- nav item --> */}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-business-tab" data-bs-toggle="pill" href="#pills-business" role="tab" aria-controls="pills-business" aria-selected="false">
                                        Business
                                    </a>
                                </li>
                                {/* <!-- nav item --> */}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-health-tab" data-bs-toggle="pill" href="#pills-health" role="tab" aria-controls="pills-health" aria-selected="false">Health</a>
                                </li>
                            </ul>
                            {/* <!-- Tab content --> */}
                            <div className="tab-content" id="pills-tabContent">
                                {/* <!-- tab content --> */}
                                <div className="tab-pane fade show active" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">
                                    {/* <!-- row --> */}

                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                    <small>By: Claire Evans</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                    </h4>

                                                    <small>By: Carolyn Welborn</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$30.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Gatsby Course: build web application</a></h4>

                                                    <small>By: Floyd Amall</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$34.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                    </h4>

                                                    <small>By: Victor Elliott</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with React</a></h4>
                                                    {/* <!-- List --> */}
                                                    <small>By: Morris Mccoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(7,700)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$29.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                    <small>By: Michael Cundiff</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">Free</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                    <small>By: Jeffrey McCoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$49.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="card" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Python Course: build web application</a></h4>

                                                    <small>By: Douglas Howell</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$19.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- tab content --> */}
                                <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                    <small>By: Michael Cundiff</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">Free</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                    <small>By: Jeffrey McCoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$49.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Python Course: build web application</a></h4>

                                                    <small>By: Douglas Howell</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$19.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                    <small>By: Claire Evans</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                    </h4>

                                                    <small>By: Carolyn Welborn</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$30.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Gatsby Course: build web application</a></h4>

                                                    <small>By: Floyd Amall</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$34.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                    </h4>

                                                    <small>By: Victor Elliott</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with React</a></h4>
                                                    {/* <!-- List --> */}
                                                    <small>By: Morris Mccoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(7,700)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$29.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Tab Pane --> */}
                                <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with React</a></h4>
                                                    {/* <!-- List --> */}
                                                    <small>By: Morris Mccoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(7,700)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$29.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                    <small>By: Michael Cundiff</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">Free</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                    <small>By: Jeffrey McCoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$49.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                    </h4>

                                                    <small>By: Carolyn Welborn</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$30.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Gatsby Course: build web application</a></h4>

                                                    <small>By: Floyd Amall</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$34.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                    <small>By: Claire Evans</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                    </h4>

                                                    <small>By: Victor Elliott</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Python Course: build web application</a></h4>

                                                    <small>By: Douglas Howell</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$19.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                    </h4>

                                                    <small>By: Victor Elliott</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Python Course: build web application</a></h4>

                                                    <small>By: Douglas Howell</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$19.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with React</a></h4>
                                                    {/* <!-- List --> */}
                                                    <small>By: Morris Mccoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(7,700)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$29.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                    <small>By: Michael Cundiff</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">Free</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                    <small>By: Jeffrey McCoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$49.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                    <small>By: Claire Evans</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                    </h4>

                                                    <small>By: Carolyn Welborn</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$30.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Gatsby Course: build web application</a></h4>

                                                    <small>By: Floyd Amall</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$34.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Python Course: build web application</a></h4>

                                                    <small>By: Douglas Howell</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$19.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                    </h4>

                                                    <small>By: Victor Elliott</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with React</a></h4>
                                                    {/* <!-- List --> */}
                                                    <small>By: Morris Mccoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">3.5</span>
                                                        <span className="fs-6">(7,700)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$29.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-success-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                    <small>By: Michael Cundiff</small>
                                                    <div className="d-flex align-text-top mt-3">
                                                        <span className="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>

                                                        <span className="text-warning">4</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">Free</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                    <small>By: Claire Evans</small>
                                                    <div className="d-flex align-text-top mt-3">
                                                        <span className="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="text-warning">3.5</span>
                                                        <span className="fs-6">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Beginner</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2">
                                                        <a href="../course-single.html" className="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                    </h4>

                                                    <small>By: Carolyn Welborn</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$30.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info-soft">Intermediate</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">The Gatsby Course: build web application</a></h4>

                                                    <small>By: Floyd Amall</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(13,245)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$34.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <!-- Card --> */}
                                            <div className="card card-hover">
                                                <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-danger-soft">Advance</span>
                                                        <a href="#" className="fs-5"><i className="fe fe-heart align-middle"></i></a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2"><a href="../course-single.html" className="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                    <small>By: Jeffrey McCoy</small>
                                                    <div className="lh-1 mt-3">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6">(8,890)</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Footer --> */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$49.00</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit">
                                                                <i className="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                                Get Enrolled
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}