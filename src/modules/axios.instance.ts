import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://petstore.swagger.io/v2",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
