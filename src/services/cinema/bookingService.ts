import api from "../api";

export const getAllBookings = async () => {

    const res = await api.get('/booking/cinema/all', { withCredentials: true });
    return res;
}