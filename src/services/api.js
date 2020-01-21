import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.31.32:4000/"
});

export default api;