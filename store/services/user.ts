import { api } from './api';

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body: {username: 'Robin', password: '123'},
            }),
        }),
    }),
})

export const {
    useLoginMutation,
} = userApi;
