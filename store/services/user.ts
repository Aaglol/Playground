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
        isLoggedIn: build.query({
            query: () => '/user/isloggedin',
        })
    }),
    overrideExisting: false,
});

export const {
    useLoginMutation,
    useIsLoggedInQuery,
} = userApi;

export const {
    endpoints: { login, isLoggedIn },
} = userApi;