import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://matsar-assginement-zbfj-git-deployment-mastrangelis.vercel.app/',
    withCredentials: false
});

export default axiosInstance;
