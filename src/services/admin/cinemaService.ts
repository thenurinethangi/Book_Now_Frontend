import api from "../api";

export const getAllActiveCinemas = async () => {

    const res = await api.get('/cinema/active', { withCredentials: true });
    return res;
}