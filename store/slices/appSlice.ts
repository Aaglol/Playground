import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useRequesthandler } from '@/hooks/useRequesthandler';
import { userApi } from "../services/user";
import { User } from "../types";

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

const intialUser: User = {
    id: 0,
    username: '',
    email: '',
};

const initialState = {
    isLoggedIn: false,
    currentUser: intialUser,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
            state.currentUser = action.payload.data;
            state.isLoggedIn = true;
        }); 
        builder.addMatcher(userApi.endpoints.isLoggedIn.matchFulfilled, (state, action) => {
            state.isLoggedIn = true;            
            state.currentUser = action.payload.data;
        });
        builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state, action) => {
            state.isLoggedIn = false;
            state.currentUser = intialUser;
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
