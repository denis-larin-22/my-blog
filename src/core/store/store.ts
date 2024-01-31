import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";
// import logger from 'redux-logger';
// const loger: any = logger;

// const enhancer = compose(applyMiddleware(loger, thunk)); For logging prew- next- states
const enhancer = compose(applyMiddleware(thunk));
export const store = createStore(reducer, enhancer);