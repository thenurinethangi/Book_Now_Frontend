import api from "../api";

export const lockSeats = async (data: any) => {

    const res = await api.post('/seats/lock', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const checkIsSeatLock = async (data: any) => {

    const res = await api.post('/seats/check/islock', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const checkLockedSeats = async (id: any) => {

    const res = await api.get('/seats/check/all/islock/' + id, { withCredentials: true });
    return res;
}