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

    const res = await api.get('/movie/cinema/availableFormats/'+id, { withCredentials: true });
    return res;
}

export const addMovie = async (data: {}) => {

    const res = await api.post('/movie/cinema/add', data, { headers: {'Content-Type': 'application/json'}, withCredentials: true});
    return res;
}