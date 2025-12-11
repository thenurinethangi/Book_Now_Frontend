import api from "../api";

export const getAllShowtimesOfAMovie = async (id: string) => {

    const res = await api.get('/showtime/7Days/'+id);
    return res;
}

export const getShowtimeDetailsById = async (id: string) => {

    const res = await api.get('/showtime/'+id);
    return res;
}