import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useRequesthandler } from '@/hooks/useRequesthandler';
import { userApi } from "../services/user";

export const userLogin = createAsyncThunk(
    "app/userLogin",
    async (data) => {
        const response = await useRequesthandler('http://localhost:8081/', 'user/login', 'POST', data).catch((error) => {
            console.warn('oh no');
        });

        if (response.status === 200) {
            return response.data?.data;
        }
    },
);

export const userSessionCheck = createAsyncThunk(
    "app/userSessionCheck",
    async () => {
        const response = await useRequesthandler('http://localhost:8081/', 'user/isloggedin', 'POST', {}).catch((error) => {
            console.warn('oh no');
        });

        console.log('response', response);

        if (response.status === 200) {
            return response.data?.data;
        }
    },
);

export const userLogOut = createAsyncThunk(
    "app/userLogOut",
    async () => {
        const response = await useRequesthandler('http://localhost:8081/', 'user/logout', 'POST', {}).catch((error) => {
            console.warn('oh no');
        });

        if (response.status === 200) {
            return response.data;
        }
    },
);

const initialState = {
    isLoggedIn: false,
    currentUser: {
        id: 0,
        username: '',
        email: '',
    }
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(userSessionCheck.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            console.log('action', action);
            if (Object.hasOwnProperty.call(action.payload, 'id')) {
                state.currentUser = action.payload;
            }
        });

        builder.addMatcher(userApi.endpoints.login.matchPending, (state, action) => {
            console.log('hello');
        }); 
        builder.addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
            console.log('dsadai');
        }); 
        builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
            state.currentUser = action.payload; 
        }); 
    },
    reducers: {
        isLoggedInUpdated: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        currentUserUpdated: (state, action) => {
            state.currentUser = action.payload;
        }
    },
});

export const {
    isLoggedInUpdated,
    currentUserUpdated,
} = appSlice.actions;

export default appSlice;

export const appIsLoggedIn = (state) => state.app?.isLoggedIn;
export const appCurrentUser = (state) => state.app?.currentUser;
