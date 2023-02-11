// import { BASE_URL } from '@/constants/url';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false
});

export default axiosInstance;
