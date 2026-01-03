import api from "../api";

export const getAllBookings = async (rules: any) => {

    const res = await api.post('/booking/cinema/all', rules, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return res;
}

export const getTotalBookingsCount = async () => {

    const res = await api.get('/booking/cinema/all/count', { withCredentials: true });
    return res;
}

export const getTodayBookingsCount = async () => {

    const res = await api.get('/booking/cinema/today/count', { withCredentials: true });
    return res;
}

export const getScheduledBookingsCount = async () => {

    const res = await api.get('/booking/cinema/scheduled/count', { withCredentials: true });
    return res;
}

export const getCanceledBookingsCount = async () => {

    const res = await api.get('/booking/cinema/canceled/count', { withCredentials: true });
    return res;
}