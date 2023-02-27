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
        logout: build.mutation({
            query: (body) => ({
                url: '/user/logout',
                method: 'POST',
                body,
            }),
        }),
        isLoggedIn: build.query({
            query: () => '/user/isloggedin',
        })
    }),
    overrideExisting: false,
});

export const {
    useLoginMutation,
    useIsLoggedInQuery,
    useLogoutMutation,
} = userApi;

export const {
    endpoints: { login, isLoggedIn, logout },
} = userApi;