import axios from 'axios';

export const useRequesthandler = async (URL: string, PATH: string, type: string, payload: object = {}) => {
    const baseURL = 'http://server.robin-dev.no/'
    
    const requestHandler = axios.create({
        withCredentials: true,
        baseURL: baseURL
    });

    if (type === 'GET') {
        return await requestHandler.get(baseURL + PATH);
    }
    if (type === 'POST') {
        return await requestHandler.post(baseURL + PATH, payload);
    }
    
    return false;
}