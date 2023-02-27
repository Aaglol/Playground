import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
  } from 'redux-persist'
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import localforage from 'localforage';
import { CommunicationApi } from './services/api';
import thunkMiddleware from 'redux-thunk';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/hardSet";
import { appSlice } from './slices/appSlice';
import { profileSlice } from './slices/profileSlice';

const customMiddleware = [thunkMiddleware, CommunicationApi.middleware];

if (process.env.NODE_ENV === "development") {
    customMiddleware.push(logger);
}

localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'playground',
});

const persistConfig = {
    key: 'playground',
    storage: localforage,
    stateReconciler: autoMergeLevel2
};

const reducers = combineReducers({
    app: appSlice.reducer,
    profile: profileSlice.reducer,
    api: CommunicationApi.reducer,
});
   
const persistedReducer = persistReducer(persistConfig, reducers);

const preStore = configureStore({
    reducer: persistedReducer,
    middleware:  getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(customMiddleware),
});

export type AppDispatch = typeof preStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof preStore.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default preStore;

