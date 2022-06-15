import axios from "axios";
export const TOKEN_KEY = "@calendar-Token";

const URL_BASE = "http://localhost:3333";

const httpClient = axios.create({
    baseURL: URL_BASE,
});

const requestHandler = (request) => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
};

httpClient.interceptors.request.use((request) => requestHandler(request));
export default httpClient;
