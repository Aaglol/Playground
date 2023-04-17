import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommunicationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: typeof window !== 'undefined' ? process.env.NODE_ENV === "development" ? 'http://localhost:3001/' : 'https://server.robin-dev.no/' : '', 
        credentials: "include"
    }),
    endpoints: () => ({}),
});