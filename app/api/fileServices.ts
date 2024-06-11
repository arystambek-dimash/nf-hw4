import handleResponseError from "@/app/api/apiHandler";
import axios from "axios";

const apiFakePlatziServices = axios.create({baseURL: 'https://api.escuelajs.co/api/v1'});

apiFakePlatziServices.interceptors.response.use((response) => {
    return response;
}, (error) => {
    handleResponseError(error);
    return Promise.reject(error);
});

export default apiFakePlatziServices