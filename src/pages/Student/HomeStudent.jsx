// import React from 'react'

import { useContext } from "react";
import NewCourse from "./HomePartials/NewCourse";
import { StoreContext } from "../../contexts/StoreProvider";
import { getImageUrl } from "../../api/common";

export default function HomeStudent() {
  const { user } = useContext(StoreContext);
  return (
    <>
      <div className="card mb-3">
        <div className="d-flex m-3 align-items-center">
          <div className="avatar">
            <img src={user && user.profile_picture ? getImageUrl(user.profile_picture) : '/avatarDefault.jpg' } className="rounded-circle" alt="" />
          </div>
          <div className="ms-2">
            <p className="m-0">Xin chào, <b>{user && user.name }</b></p>
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
