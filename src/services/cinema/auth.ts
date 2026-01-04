import api from "../api";

export async function signUp(formdata: FormData) {
    const res = await api.post('/auth/cinema/signup', formdata);
    return res;
}

export async function signIn(formdata: FormData) {
    const res = await api.post('/auth/signin', formdata, { withCredentials: true });
    return res;
}

export async function sendOTP(email: string) {
    const res = await api.post('/auth/otp', { email: email }, { headers: { "Content-Type": 'application/json' } });
    return res;
}

export async function verifyUser(email: string) {
    const res = await api.put('/auth/user/verify', { email: email }, { headers: { "Content-Type": 'application/json' } });
    return res;
}

export async function cinemaLogout() {
    const res = await api.get('/user/logout', { withCredentials: true });
    return res;
}

export async function loadUserAndCinemaDetails() {
    const res = await api.get('/user/current/cinema', { withCredentials: true });
    return res;
}