// import React from 'react'

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import axiosClient from "../../../api/axios";

export default function Edit() {
    const navigate = useNavigate()
    const { course_id } = useParams();
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axiosClient.get(`/lecturer/courses/${course_id}`);
                console.log(response);

            } catch (error) {
                if(error.status == 404){
                    navigate('/notfound')
                }
                console.log(error.status);
                toast.error("Không thể tải .");
            }
        };
        fetchCourse();
    }, []);
    return (
        <>
            <h1>{course_id}</h1>
        </>
    )
}
