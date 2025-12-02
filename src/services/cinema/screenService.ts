import api from "../api"

export const addNewScreen = async (formdata: FormData) => {
    const res = await api.post('/screen/add',formdata,{ withCredentials: true });
    return res;
}

export const getAllScreens = async () => {
    const res = await api.get('/screen/all',{ withCredentials: true });
    return res;
}

export const deleteAScreen = async (id: string) => {
    const res = await api.delete('/screen/delete/'+id,{ withCredentials: true });
    return res;
}

export const updateScreenStatus = async (id: string, status: string) => {
    const res = await api.put('/screen/update/status', { id, status }, { withCredentials: true });
    return res;
}