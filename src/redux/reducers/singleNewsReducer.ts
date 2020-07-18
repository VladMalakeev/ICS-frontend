import {NewsEntityType} from "./newsReducer";
import {CHANGE_PRELOADER, NEWS_EXIST, SET_NEWS, SingleNewsActionType} from "../actions/singleNewsAction";

type SingleNewsType = {
    news:NewsEntityType,
    preloader:boolean,
    isExist:boolean | null
}

let initialState:SingleNewsType = {
    news:{
        id: null,
        title: null,
        description: null,
        author: null,
        dateOfPublication: null,
        image: null,
        link: null,
        publics: null
    },
    preloader:false,
    isExist:null

};

export const SingleNewsReducer = (state = initialState, action: SingleNewsActionType) => {
    switch (action.type) {
        case SET_NEWS:
            state.news = action.payload;
            return {...state};
        case CHANGE_PRELOADER:
            state.preloader = action.payload.status;
            return {...state};
        case NEWS_EXIST:
            state.isExist = action.payload.status;
            return {...state};
        default: return state;
    }
};