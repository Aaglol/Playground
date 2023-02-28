import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CommunicationApi } from './services/api';
import thunkMiddleware from 'redux-thunk';
import { appSlice } from './slices/appSlice';
import { profileSlice } from './slices/profileSlice';

const customMiddleware = [thunkMiddleware, CommunicationApi.middleware];

if (process.env.NODE_ENV === "development") {
    customMiddleware.push(logger);
}

const reducers = combineReducers({
    app: appSlice.reducer,
    profile: profileSlice.reducer,
    api: CommunicationApi.reducer,
});

const preStore = configureStore({
    reducer: reducers,
    middleware:  getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(customMiddleware),
});

export type AppDispatch = typeof preStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof preStore.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default preStore;

