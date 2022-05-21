import { axiosInstance } from "../AxiosInstance";

export async function getUserByUsername(username) {
    const response = await axiosInstance.get(`in/${username}`);
    return response.data.user;
}

export async function getCompanyById(id) {
    const response = await axiosInstance.get(`company/${id}`);
    return response.data.company;
}