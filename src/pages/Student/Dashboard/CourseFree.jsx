export default function CourseFree() {
  return (
    <>
      <div className="mt-1 p-3">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-0 mt-2">
              <h2 className="mb-2">Khoá học miễn phí</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                {/* <!-- row --> */}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  <div className="col">
                    {/* <!-- Card --> */}
                    <div className="card card-hover">
                      <a href="../course-single.html">
                        <img
                          src="../../assets/images/course/course-javascript.jpg"
                          alt="course"
                          className="card-img-top"
                        />
                      </a>
                      {/* <!-- Card Body --> */}
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="badge bg-info-soft">
                            Intermediate
                          </span>
                          <a href="#" className="fs-5">
                            <i className="fe fe-heart align-middle"></i>
                          </a>
                        </div>
                        <h4 className="mb-2 text-truncate-line-2">
                          <a
                            href="../course-single.html"
                            className="text-inherit"
                          >
                            How to easily create a website with JavaScript
                          </a>
                        </h4>

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
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
