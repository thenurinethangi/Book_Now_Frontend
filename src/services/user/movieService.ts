import api from "../api";

export const getAllNowShowingMovies = async () => {

    const res = await api.get('/movie/nowShowing/all');
    return res;
}

export const getAllComingSoonMovies = async () => {

    const res = await api.get('/movie/comingSoon/all');
    return res;
}

export const getMovieDetails = async (id: string) => {

    const res = await api.get('movie/'+id);
    return res;
}