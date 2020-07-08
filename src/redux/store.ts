import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"

const reducers = combineReducers({

});

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);