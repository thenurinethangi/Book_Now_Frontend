import api from "../api";

export async function signUp(formdata: FormData) {
    const res = await api.post('/auth/user/signup', formdata);
    return res;
}

export async function signIn(formdata: FormData) {
    const res = await api.post('/auth/signin', formdata, { withCredentials: true });
    return res;
}