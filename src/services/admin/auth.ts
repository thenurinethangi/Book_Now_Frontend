import api from "../api";

export async function signIn(formdata: FormData) {
    const res = await api.post('/auth/signin', formdata, { withCredentials: true });
    return res;
}