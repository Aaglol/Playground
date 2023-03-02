import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    someVariable: false,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        someVariableUpdated: (state) => {
            state.someVariable = true;
        }
    },
});

export const {
    someVariableUpdated
} = profileSlice.actions;

export default profileSlice;


