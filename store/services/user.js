import { CommunicationApi } from './api';

export const userApi = CommunicationApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useLoginMutation,
} = userApi;

export const {
    endpoints: { login },
} = userApi;