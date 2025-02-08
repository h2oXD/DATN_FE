export default function EditInfLecturers() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div>
            <h1 className="mb-0">Chi tiết hồ sơ</h1>
            <p className="mb-4">Chỉnh sửa thông tin cá nhân</p>
            {/* <!-- Form --> */}
            <form className="row gx-3 needs-validation" novalidate>
              {/* <!-- First name --> */}
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" for="profileEditFname">
                  First Name
                </label>
                <input
                  type="text"
                  id="profileEditFname"
                  name="profileEditFname"
                  className="form-control"
                  placeholder="First Name"
                  required
                />
                <div className="invalid-feedback">Please enter first name.</div>
              </div>
              {/* <!-- Last name --> */}
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" for="profileEditLname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="profileEditLname"
                  name="profileEditLname"
                  className="form-control"
                  placeholder="Last Name"
                  required
                />
                <div className="invalid-feedback">Please enter last name.</div>
              </div>
              {/* <!-- Phone --> */}
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" for="profileEditPhone">
                  Phone
                </label>
                <input
                  type="text"
                  id="profileEditPhone"
                  name="profileEditPhone"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
                <div className="invalid-feedback">
                  Please enter phone number.
                </div>
              </div>
              {/* <!-- Birthday --> */}
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" for="profileEditBirth">
                  Birthday
                </label>
                <input
                  className="form-control flatpickr"
                  type="text"
                  placeholder="Birth of Date"
                  id="profileEditBirth"
                  name="profileEditBirth"
                />
                <div className="invalid-feedback">Please choose a date.</div>
              </div>
              {/* <!-- Address --> */}
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" for="profileEditAddress1">
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="profileEditAddress1"
                  name="profileEditAddress1"
                  className="form-control"
                  placeholder="Address"
                  required
                />
                <div className="invalid-feedback">Please enter address.</div>
              </div>
              {/* <!-- Address --> */}
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" for="profileEditAddress2">
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="profileEditAddress2"
                  name="profileEditAddress2"
                  className="form-control"
                  placeholder="Address"
                  required
                />
                <div className="invalid-feedback">Please enter address.</div>
              </div>

              <div className="col-12">
                {/* <!-- Button --> */}
                <button className="btn btn-primary" type="submit">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
