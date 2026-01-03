import api from "../api"

export const getAllMovies = async () => {

    const res = await api.get('/movie/cinema/all', { withCredentials: true });
    return res;
}

export const getAllAvailableMoviesToAdd = async () => {

    const res = await api.get('/movie/cinema/availableToAdd', { withCredentials: true });
    return res;
}

export const getSelectedMovieAvailableFormats = async (id: string) => {

    const res = await api.get('/movie/cinema/availableFormats/' + id, { withCredentials: true });
    return res;
}

export const addMovie = async (data: {}) => {

    const res = await api.post('/movie/cinema/add', data, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return res;
}

export const sendRequest = async (formdata: FormData) => {

    const res = await api.post('/movie/cinema/request', formdata, { withCredentials: true });
    return res;
}

export const removeMovieFromCinemasManageMovieList = async (id: string) => {

    const res = await api.delete('/cinemaMovie/remove/' + id, { withCredentials: true });
    return res;
}

export const changeStatusOfTheMovie = async (data: any) => {

    const res = await api.put('/cinemaMovie/update/status', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}