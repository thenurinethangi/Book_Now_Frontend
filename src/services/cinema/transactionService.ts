import api from "../api";

export const getAllTransactions = async (rules: any) => {
    const res = await api.post('/transaction/cinema/all', rules, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return res;
}