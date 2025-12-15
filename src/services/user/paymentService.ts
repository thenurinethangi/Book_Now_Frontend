import api from "../api";

export const checkoutWithStripe = async (data: any) => {

    const res = await api.post('/payment/stripe/', data, { headers: { "Content-Type": 'application/json' }, withCredentials: true });
    return res;
}

export const getShowtimeDetailsByPaymentId = async (id: string) => {

    const res = await api.get('/transaction/details/'+id, { withCredentials: true });
    return res;
}

export const deleteTransactionAndBookingIfErrorInBooking = async (id: string) => {

    const res = await api.get('/transaction/details/'+id, { withCredentials: true });
    return res;
}