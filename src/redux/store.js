import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reduxer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

// declare and assign middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// apply the logger if we're in development mode
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// pass our redux object inside the store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


// run redux saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);