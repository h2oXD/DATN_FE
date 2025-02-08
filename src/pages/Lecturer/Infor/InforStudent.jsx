export default function InforStudent() {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="col-lg-12 col-md-8 col-12">
          {/* <!-- Card --> */}
          <div className="card mb-4">
            {/* <!-- Card body --> */}
            <div className="p-4 d-flex justify-content-between align-items-center">
              <div>
                <h3 className="mb-0">My Students</h3>
                <span>Meet people taking your course.</span>
              </div>
            </div>
          </div>
          {/* <!-- Tab content --> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active pb-4"
              id="tabPaneGrid"
              role="tabpanel"
              aria-labelledby="tabPaneGrid"
            >
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12 mb-3">
                  {/* <!-- Content --> */}
                  <div className="row">
                    <div className="col pe-0">
                      {/* <!-- Form --> */}
                      <form>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search by Name"
                        />
                      </form>
                    </div>
                    {/* <!-- Button --> */}
                    <div className="col-auto">
                      <a href="#" className="btn btn-secondary">
                        Export CSV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* <!-- Card --> */}
                  <div className="card mb-4">
                    {/* <!-- Card body --> */}
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="../assets/images/avatar/avatar-3.jpg"
                          className="rounded-circle avatar-xl mb-3"
                          alt="avatar"
                        />
                        <h4 className="mb-1">Wade Warren</h4>
                        <p className="mb-0">
                          <i className="fe fe-map-pin me-1"></i>
                          United States
                        </p>
                        <a
                          href="#"
                          className="btn btn-sm btn-outline-secondary mt-3"
                        >
                          Message
                        </a>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                        <span>Enrolled</span>
                        <span className="text-dark">3/12/2020</span>
                      </div>
                      <div className="d-flex justify-content-between pt-2 fs-6">
                        <span>Progress</span>
                        <span className="text-success">0%</span>
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
