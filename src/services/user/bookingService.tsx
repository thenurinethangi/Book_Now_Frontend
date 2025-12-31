import api from "../api";

export const getMyBookings = async () => {

    const res = await api.get('/booking/mybookings', { withCredentials: true });
    return res;
}

export const cancelBooking = async (id: string) => {

    const res = await api.put('/booking/cancel/' + id, { withCredentials: true });
    return res;
}