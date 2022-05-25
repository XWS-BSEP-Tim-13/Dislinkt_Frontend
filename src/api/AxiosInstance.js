import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'https://localhost:8083/', headers: { Authorization: 'Bearer ' + localStorage.getItem("token-ls") } });