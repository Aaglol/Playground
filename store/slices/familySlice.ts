import { createSlice } from "@reduxjs/toolkit";

import { Family } from "../types";

const initalFamily: Family = {
    user: 1,
    name: 'Familien Lavoll',
    description: 'Kult right',
    status: 1,
    members: [{
        firstname: 'Robin',
        lastname: 'Lavoll',
        age: '02.24.1994',
        permission: 1,
    },
    {
        firstname: 'Jasmin',
        lastname: 'Lavoll',
        age: '11.26.1996',
        permission: 1,
    }]
};

const initialState = {
    familys: [],
    defaultFamilyId: 0,
    selectedFamily: initalFamily,
};

export const familySlice = createSlice({
    name: "family",
    initialState,
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

