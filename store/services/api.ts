import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CommunicationApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: typeof window !== 'undefined' ? 'https://server.robin-dev.no/' : '', 
        credentials: "include",
        prepareHeaders: (headers) => {
                headers.set("Access-Control-Allow-Origin", 'true');
              
    
            return headers;
        },
    }),
    endpoints: () => ({}),
});