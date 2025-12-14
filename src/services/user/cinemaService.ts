import api from "../api";

export const getAllCinemas = async () => {

    const res = await api.get('/cinema/active/all');
    return res;
}