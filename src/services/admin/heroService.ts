import api from "../api";

export const getAllHeros = async () => {

    const res = await api.get('/booking/cinema/all', { withCredentials: true });
    return res;
}