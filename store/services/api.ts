import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommunicationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: typeof window !== 'undefined' ? 'https://server.robin-dev.no/' : '', 
        credentials: "include"
    }),
    endpoints: () => ({}),
});