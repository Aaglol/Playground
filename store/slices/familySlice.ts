import { createSlice } from "@reduxjs/toolkit";

import { Family } from "../types";
import { familyApi } from "../services/family";

const initalFamily: Family = {
    user: 0,
    name: '',
    description: '',
    status: 0,
    members: []
};

const initialState = {
    familys: [],
    defaultFamilyId: 0,
    selectedFamily: initalFamily,
    isLoading: false,
};

export const familySlice = createSlice({
    name: "family",
    initialState,
    extraReducers: (builder) => {
        builder.addMatcher(familyApi.endpoints.familyList.matchPending, (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(familyApi.endpoints.familyList.matchRejected, (state) => {
            state.isLoading = false;
        });
        builder.addMatcher(familyApi.endpoints.familyList.matchFulfilled, (state, action) => {
            console.log('payload: ', action.payload);
            state.familys = action.payload;
            state.isLoading = false;
        }); 
    },
    reducers: {
        selectedFamilyUpdated: (state, action) => {
            state.selectedFamily = action.payload;
        },
        defaultFamilyIdUpdated: (state, action) => {
            state.defaultFamilyId = action.payload;
        },
    },
});

export const {
    selectedFamilyUpdated,
    defaultFamilyIdUpdated
} = familySlice.actions;

export default familySlice;

export const storeAvaiableFamilys = (state) => state.family.familys;
export const storeSelectedFamily = (state) => state.family.selectedFamily;
export const storeFamilyIsLoading = (state) => state.family.isLoading;
