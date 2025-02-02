import axiosClient from "./axios";

const getInfo = async () => {
    return await axiosClient.get(`/user`)
}

export {getInfo}