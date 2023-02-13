import { BASE_URL } from '@/constants/url';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL, // Due to CORS issues, we proxy pass the request, check next.config.js for async writes()
    withCredentials: false
});

export default axiosInstance;
