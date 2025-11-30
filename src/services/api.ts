import axios, { AxiosError } from "axios";
import { getNewAccessTokenUsingRefreshToken } from "./auth";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
});

const PUBLIC_ENDPOINTS = ["/auth/signin", "/auth/user/signup", "/auth/cinema/signup", "/auth/refreshToken"];

api.interceptors.request.use((config) => {

    const accessToken = localStorage.getItem('accessToken');

    const isPublic = PUBLIC_ENDPOINTS.some((url) => config.url?.includes(url));

    if (!isPublic && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});


api.interceptors.response.use(
    (response) => {
        return response
    },
    async (error: AxiosError) => {
        const originalRequest: any = error.config

        if (error.response?.status === 401 && !PUBLIC_ENDPOINTS.some((url) => originalRequest.url?.includes(url)) && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const data = await getNewAccessTokenUsingRefreshToken()
                localStorage.setItem("accessToken", data.accessToken)

                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

                return axios(originalRequest)
            }
            catch (refreshErr) {
                localStorage.removeItem("refreshToken")
                localStorage.removeItem("accessToken")
                window.location.href = "/login"
                console.error(refreshErr)
                return Promise.reject(refreshErr)
            }
        }
        return Promise.reject(error)
    }
)

export default api;