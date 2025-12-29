import api from "../api";

export const getAllCinemas = async () => {

    const res = await api.get('/cinema/active/all');
    return res;
}

export const getCinemaDetailsById = async (id: string) => {

    const res = await api.get('/cinema/data/'+id);
    return res;
}