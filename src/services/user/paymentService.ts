import api from "../api";

export const checkoutWithStripe = async (data: any) => {

    const res = await api.post('/payment/stripe/', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}