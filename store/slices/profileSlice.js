import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useRequesthandler } from '@/hooks/useRequesthandler';


const initialState = {
    currentTab: 0,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        profileCurrentTabUpdated: (state, action) => {
            state.currentTab = action.payload;
        },
    },
});

export const {
    profileCurrentTabUpdated,
} = profileSlice.actions;

export default profileSlice;

export const profileCurrentTab = (state) => state.profile.currentTab;
