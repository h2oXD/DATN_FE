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
const getCategories = async () => {
    return await axiosClient.get(`/categories`)
}
const getTags = async () => {
    return await axiosClient.get(`/tags`)
}
const showCourseBasic = async (id) => {
    return await axiosClient.get(`/lecturer/courses/`+id)
}
export {getUser , login , register , getCategories , getTags , showCourseBasic}