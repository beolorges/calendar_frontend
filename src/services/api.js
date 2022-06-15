import axios from "axios";

const URL_BASE = "http://localhost:3333";

const httpClient = axios.create({
    baseURL: URL_BASE,
});

const requestHandler = (request) => {
    const token = sessionStorage.getItem("@calendar-Token");
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
};

httpClient.interceptors.request.use((request) => requestHandler(request));
export default httpClient;
