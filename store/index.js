import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer
} from "redux-persist";
import logger from "redux-logger";
import localforage from 'localforage';
import thunkMiddleware from 'redux-thunk';
import reducers from "./reducers/index";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/hardSet";

const middleware = [thunkMiddleware];

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
if (typeof window !== 'undefined') {
    console.log('true');
    preStore = configureStore({
        reducer: persistedReducer,
        middleware: middleware,
    });
} else {
    preStore = configureStore({
        reducer: reducers,
        middleware: middleware,
    });
}

export default preStore;
