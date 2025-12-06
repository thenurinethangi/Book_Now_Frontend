import api from "../api";

export const getAllActiveScreens = async () => {

    const res = await api.get('/screen/admin/active/all', { withCredentials: true });
    return res;
}

export const getAllDeactiveScreens = async () => {

    const res = await api.get('/screen/admin/deactive/all', { withCredentials: true });
    return res;
}

export const deactivateAScreen = async (id: string) => {

    const res = await api.put('/screen/admin/deactive/'+id, { withCredentials: true });
    return res;
}

export const activateAScreen = async (id: string) => {

    const res = await api.put('/screen/admin/active/'+id, { withCredentials: true });
    return res;
}