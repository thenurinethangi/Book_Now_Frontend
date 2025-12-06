import api from "../api";

export const getAllActiveScreens = async () => {

    const res = await api.get('/screen/admin/active/all', { withCredentials: true });
    return res;
}

export const getAllDeactiveScreens = async () => {

    const res = await api.get('/screen/admin/deactive/all', { withCredentials: true });
    return res;
}