import { CommunicationApi } from './api';

export const userApi = CommunicationApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation({
            query: (body) => ({
                url: '/user/create',
                method: 'POST',
                body,
            }),
        }),
        login: build.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body,
            }),
        }),
        logout: build.mutation({
            query: (body) => ({
                url: '/user/logout',
                method: 'POST',
                body,
            }),
        }),
        isLoggedIn: build.mutation({
            query: (body) => ({
                url: '/user/isloggedin',
                method: 'GET',
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useLoginMutation,
    useIsLoggedInMutation,
    useLogoutMutation,
    useRegisterMutation,
} = userApi;

export const {
    endpoints: { login, isLoggedIn, logout, register },
} = userApi;