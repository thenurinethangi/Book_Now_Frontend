import api from "../api";

export const getAllShowtimes = async () => {

    const res = await api.get('/showtime/cinema/all', { withCredentials: true });
    return res;
}