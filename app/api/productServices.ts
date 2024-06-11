import axios from "axios";
import handleResponseError from "@/app/api/apiHandler";

const apiFakeStoreService = axios.create({baseURL: 'https://fakestoreapi.com'});
apiFakeStoreService.interceptors.response.use((response) => {
    return response;
}, (error) => {
    handleResponseError(error);
    return Promise.reject(error);
});

export default apiFakeStoreService