import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommunicationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8081', 
        credentials: "include"
    }),
    endpoints: () => ({}),
});