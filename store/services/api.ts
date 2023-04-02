import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommunicationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: typeof window !== 'undefined' ? 'https://79.160.181.14:8081/' : '', 
        credentials: "include"
    }),
    endpoints: () => ({}),
});