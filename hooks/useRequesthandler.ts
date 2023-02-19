import axios from 'axios';

export const useRequesthandler = async (URL: string, PATH: string, type: string, payload: object = {}) => {
    const requestHandler = axios.create({
        withCredentials: true,
        baseURL: URL
    });

    if (type === 'GET') {
        return await requestHandler.get(URL + PATH);
    }
    if (type === 'POST') {
        return await requestHandler.post(URL + PATH, payload);
    }
    
    return false;
}