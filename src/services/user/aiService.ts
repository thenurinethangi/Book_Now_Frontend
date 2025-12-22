import api from "../api";

export async function generateMovieSummery(data: any) {
    const res = await api.post('/ai/movie/summery', data, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return res;
}