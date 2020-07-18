import {NewsEntityType} from "./newsReducer";
import {SET_NEWS, SingleNewsActionType} from "../actions/singleNewsAction";

let initialState:NewsEntityType = {
    id: null,
    title: null,
    description: null,
    author: null,
    dateOfPublication: null,
    image: null,
    link: null,
    publics: null
};

export const SingleNewsReducer = (state = initialState, action: SingleNewsActionType) => {
    switch (action.type) {
        case SET_NEWS:
            state = action.payload;
            return {...state};
        default: return state;
    }
};