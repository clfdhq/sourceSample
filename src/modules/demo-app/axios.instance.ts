import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://demo.example.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
