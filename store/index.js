import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import reducers from "./reducers/index";

const middleware = [];
if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
