import api from "./api";

export const getNewAccessTokenUsingRefreshToken = async () => {
    const res = await api.get('/auth/refreshToken', { withCredentials: true });
    return res.data
}