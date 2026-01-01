import api from "../api";

export const getTodayRevenue = async () => {

    const res = await api.get('/transaction/cinema/today/revenue', { withCredentials: true });
    return res;
}

export const getTodayBooking = async () => {

    const res = await api.get('/booking/cinema/today/stats', { withCredentials: true });
    return res;
}

export const getActiveScreen = async () => {

    const res = await api.get('/screen/cinema/stats', { withCredentials: true });
    return res;
}

export const getThisYearEachMonthRevenue = async () => {

    const res = await api.get('/transaction/cinema/week/revenue', { withCredentials: true });
    return res;
}

export const getScreenOccupancy = async () => {

    const res = await api.get('/screen/Occupancy', { withCredentials: true });
    return res;
}