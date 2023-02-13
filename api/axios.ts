import axios from 'axios';

const axiosInstance = axios.create({
    ...(process.env.NODE_ENV === 'development' && {
        baseURL: 'http://localhost:3000'
    }),
    withCredentials: false
});

export default axiosInstance;
