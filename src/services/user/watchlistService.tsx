import api from "../api";

export const getAllWatchlistMovies = async () => {

    const res = await api.get('/watchlist/all', { withCredentials: true });
    return res;
}

export const addMovieToWatchlist = async (data: any) => {

    const res = await api.post('/watchlist/add', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const removeMovieFromWatchlist = async (data: any) => {

    const res = await api.post('/watchlist/remove', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}