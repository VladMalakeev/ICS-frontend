import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import {NewsReducer} from "./reducers/newsReducer";

const reducers = combineReducers({
    newsReducer:NewsReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);