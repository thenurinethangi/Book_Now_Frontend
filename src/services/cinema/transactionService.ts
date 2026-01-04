import api from "../api";

export const getAllTransactions = async (rules: any) => {
    const res = await api.post('/transaction/cinema/all', rules, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    return res;
}

export const getCinemaRevenue = async () => {

    const res = await api.get('/transaction/cinema/revenue', { withCredentials: true });
    return res;
}

export const getCompleteTransactionCount = async () => {

    const res = await api.get('/transaction/cinema/all/complete/count', { withCredentials: true });
    return res;
}

export const getPendingTransactionCount = async () => {

    const res = await api.get('/transaction/cinema/all/pending/count', { withCredentials: true });
    return res;
}

export const getFailedTransactionCount = async () => {

    const res = await api.get('/transaction/cinema/all/fail/count', { withCredentials: true });
    return res;
}