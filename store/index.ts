import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import localforage from 'localforage';
import { api } from './services/api';
import thunkMiddleware from 'redux-thunk';
import reducers from "./reducers/index";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/hardSet";

const middleware = [thunkMiddleware, api.middleware];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
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
   
const persistedReducer = persistReducer(persistConfig, reducers);

let preStore;

preStore = configureStore({
    reducer: persistedReducer,
    middleware:  getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(middleware),
});

export type AppDispatch = typeof preStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof preStore.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default preStore;

