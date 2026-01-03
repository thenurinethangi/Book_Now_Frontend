import api from "../api";

export const getAllBookings = async (rules: any) => {

    const res = await api.post('/booking/cinema/all', rules, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return res;
}