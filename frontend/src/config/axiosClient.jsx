import axios from 'axios'
export const AxiosClient = axios.create({
    // baseURL: 'http://localhost:5000/api/v1/', // Replace with your API endpoint
    baseURL: '/api/v1/', // Replace with your API endpoint
})