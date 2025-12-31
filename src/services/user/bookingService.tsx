import api from "../api";

export const getMyBookings = async () => {

    const res = await api.get('/booking/mybookings', { withCredentials: true });
    return res;
}