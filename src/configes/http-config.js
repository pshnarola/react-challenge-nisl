import axios from "axios";
const axiosInstance = axios.create({ baseURL: "https://opentdb.com" });
// Request Interceptor
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Response Interceptor
axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
export default axiosInstance;