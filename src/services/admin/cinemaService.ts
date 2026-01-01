import api from "../api";

export const getAllActiveCinemas = async () => {

    const res = await api.get('/cinema/active', { withCredentials: true });
    return res;
}

export const getAllPendingCinemas = async () => {

    const res = await api.get('/cinema/pending', { withCredentials: true });
    return res;
}

export const getAllRejectedCinemas = async () => {

    const res = await api.get('/cinema/rejected', { withCredentials: true });
    return res;
}

export const deactivateACinema = async (id: string) => {

    const res = await api.put('/cinema/deactivate/'+id, { withCredentials: true });
    return res;
}

export const makeCinemaApprove = async (id: string) => {

    const res = await api.put('/cinema/activate/'+id, { withCredentials: true });
    return res;
}

export const makeCinemaRejecte = async (id: string) => {

    const res = await api.put('/cinema/reject/'+id, { withCredentials: true });
    return res;
}

export const deleteRejectedCinema = async (id: string) => {

    const res = await api.delete('/cinema/rejected/delete/'+id, { withCredentials: true });
    return res;
}