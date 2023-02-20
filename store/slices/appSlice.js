import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {requestHandler} from '@/hooks/useRequesthandler';

export const fetchStoreInfo = createAsyncThunk(
    "app/fetchStoreInfo",
    async () => {
        const response = await requestHandler('/kontrollpanel/rest/pos/hello');
        if (typeof response !== "undefined") {
            const returnArray = {
                response: response.data,
                isLoggedIn: response.request.responseURL.indexOf("/kontrollpanel/rest/pos/hello") !== -1,
            };

            return returnArray;
        }

        throw new Error("Failed to fetch store info");
    },
);

const initialState = {
    isLoggedIn: false,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: {

    },
    reducers: {
        isLoggedInUpdated: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const {
    isLoggedInUpdated,
} = appSlice.actions;

export default appSlice;

export const appIsLoggedIn = (state) => state.app.isLoggedIn;
