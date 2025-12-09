import api from "../api";

export const getAllManagedMovies = async () => {

    const res = await api.get('/movie/admin/manage/all', { withCredentials: true });
    return res;
}

export const changeStatusOfTheMovie = async (data: any) => {

    const res = await api.put('/movie/admin/update/status', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const checkMovieInCinemasManageMovieList = async (id: any) => {

    const res = await api.get('/movie/admin/check/cinema/use/' + id, { withCredentials: true });
    return res;
}

export const deleteAMovie = async (id: any) => {

    const res = await api.delete('/movie/admin/delete/' + id, { withCredentials: true });
    return res;
}

export const rejectMovieRequest = async (id: any) => {

    const res = await api.put('/movieRequest/admin/reject/' + id, { withCredentials: true });
    return res;
}

export const getAllRequestMovie = async () => {

    const res = await api.get('/movieRequest/admin/all', { withCredentials: true });
    return res;
}

export const deleteMovieRequest = async (id: any) => {

    const res = await api.delete('/movieRequest/admin/delete/' + id, { withCredentials: true });
    return res;
}

export function addNewMovie(formData: FormData) {
    return api.post("/movie/admin/add", formData, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true
    });
}