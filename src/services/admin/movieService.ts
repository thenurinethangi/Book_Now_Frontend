import api from "../api";

export const getAllManagedMovies = async () => {

    const res = await api.get('/movie/admin/manage/all', { withCredentials: true });
    return res;
}