import axiosClient from "./axios";

const getUser = async () => {
    return await axiosClient.get(`/user`)
}
const login = async (values) => {
    return await axiosClient.post(`/login`,values)
}
const register = async (values) => {
    return await axiosClient.post(`/register`,values)
}
const showCourseBasic = async (id) => {
    return await axiosClient.get(`/lecturer/courses/`+id)
}
const getCourseData = async (id) => {
    return await axiosClient.get(`/lecturer/courses/${id}`)
}
const createSection = async (id, data) => {
    return await axiosClient.post(`/lecturer/courses/${id}/sections`,data)
}
export {getUser , login , register  , showCourseBasic, createSection, getCourseData}