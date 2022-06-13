import axios from "axios";

const URL_BASE = "http://localhost:3333";

const httpClient = axios.create({
    baseURL: URL_BASE,
});

export default httpClient;
