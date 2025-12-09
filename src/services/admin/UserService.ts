import api from "../api";

export const getAllUsers = async () => {

    const res = await api.get('/user/admin/all/users', { withCredentials: true });
    return res;
}

export const getAllAdmins = async () => {

    const res = await api.get('/user/admin/all/admins', { withCredentials: true });
    return res;
}