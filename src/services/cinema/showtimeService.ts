import api from "../api";

export const getAllShowtimes = async () => {

    const res = await api.get('/showtime/cinema/all', { withCredentials: true });
    return res;
}

export const getAllAvailableScreens = async () => {

    const res = await api.get('/screen/cinema/available/all', { withCredentials: true });
    return res;
}

export const getAllAvailableMovies = async () => {

    const res = await api.get('/movie/cinema/available/all', { withCredentials: true });
    return res;
}

export const checkShowtimeAlreadyExist = async (data: {}) => {

    const res = await api.post('/showtime/cinema/check/availability', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const addANewShowtime = async (data: {}) => {

    const res = await api.post('/showtime/cinema/add', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const deleteAShowtime = async (id: string) => {

    const res = await api.delete('/showtime/cinema/delete/' + id, { withCredentials: true });
    return res;
}