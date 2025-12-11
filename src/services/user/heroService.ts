import api from "../api";

export const getAllHeroPosters = async () => {

    const res = await api.get('/hero/all');
    return res;
}