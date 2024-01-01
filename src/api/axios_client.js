import axios from "axios";

const api_client = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export default api_client;