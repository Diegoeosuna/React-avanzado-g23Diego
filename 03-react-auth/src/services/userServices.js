import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
      // console.log("request error", error);
        return Promise.reject(error);
    }
);

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUserService = (id) => axios.get(`${BASE_URL}/users/${id}`)

export {registerUserService, loginUserService, getSingleUserService}