// import React from 'react'

import NewCourse from "./HomePartials/NewCourse";

export default function HomeStudent() {
  return (
    <>
      <div className="card mb-3">
        <div className="d-flex m-3 align-items-center">
          <div className="avatar avatar-indicators">
            <img src="/assets/images/avatar/avatar-1.jpg" className="rounded-circle" alt="" />
          </div>
          <div className="ms-2">
            <p className="m-0">Xin chào, <b>Nguyễn Hữu Hào</b></p>
            <a href="" className="fs-5 text-decoration-underline"><span>Tiếp tục học tập</span></a>
          </div>
        </div>
      </div>
      <div className="card">
        <NewCourse />
      </div>
    </>
  )
}
