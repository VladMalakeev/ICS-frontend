import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import {NewsReducer} from "./reducers/newsReducer";
import {SingleNewsReducer} from "./reducers/singleNewsReducer";

const reducers = combineReducers({
    newsReducer:NewsReducer,
    singleNewsReducer:SingleNewsReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);