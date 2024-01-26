import { applyMiddleware, compose, createStore } from "redux";
import logger from 'redux-logger';
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";
const loger: any = logger;

const enhancer = compose(applyMiddleware(loger, thunk));
export const store = createStore(reducer, enhancer);