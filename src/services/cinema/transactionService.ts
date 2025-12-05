import api from "../api";

export const getAllTransactions = async () => {
    const res = await api.get('/transaction/cinema/all', { withCredentials: true });
    return res;
}