import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommunicationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: typeof window !== 'undefined' ? 'http://' + window.location.hostname + ':8081/' : '', 
        credentials: "include"
    }),
    endpoints: () => ({}),
});