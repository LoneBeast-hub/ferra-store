import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reduxer";
import { persistStore } from "redux-persist";

// declare and assign middleware
const middlewares = [];

// apply the logger if we're in development mode
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// pass our redux object inside the store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);