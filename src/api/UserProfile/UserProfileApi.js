import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://localhost:8083/' });

export async function getUserByUsername(username) {
    const response = await axiosInstance.get(`in/${username}`);
    return response.data.user;
}

export async function getCompanyById(id) {
    const response = await axiosInstance.get(`company/${id}`);
    return response.data.company;
}