import api from "../api";

export const getAllMovies = async () => {

    const res = await api.get('/movie/admin/manage/all', { withCredentials: true });
    return res;
}

export const addNewHeroPoster = async (formdata: FormData) => {

    const res = await api.post('/hero/admin/add', formdata, { withCredentials: true });
    return res;
}

export const getAllHeros = async () => {

    const res = await api.get('/hero/all', { withCredentials: true });
    return res;
}

export const deleteAHeroPoster = async (id: string) => {

    const res = await api.delete('/hero/admin/delete/'+id, { withCredentials: true });
    return res;
}