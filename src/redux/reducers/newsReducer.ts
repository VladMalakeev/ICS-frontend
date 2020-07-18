import {NewsActionsType, SET_NEWS, CHANGE_NEWS_PRELOADER} from '../actions/newsAction'

export type NewsEntityType = {
    id: number | null
    title: string | null
    description: string | null
    author: string | null
    dateOfPublication: string | null,
    image: string | null,
    link: string | null,
    publics: number | null
};

export type NewsType = {
    limit:number
    amountOfNews:number
    totalAmountOfNews:number,
    news:Array<NewsEntityType>,
    preloader:boolean
};

let initialState: NewsType = {
    limit:3,
    amountOfNews:0,
    totalAmountOfNews:0,
    news:[],
    preloader:false
};

export const NewsReducer = (state = initialState, action: NewsActionsType):NewsType => {
    switch (action.type) {
        case SET_NEWS:
            state.news = action.payload.news;
            state.amountOfNews = action.payload.amountOfNews;
            state.totalAmountOfNews = action.payload.totalAmountOfNews;
            return {...state};
        case CHANGE_NEWS_PRELOADER:
            state.preloader = action.payload.status;
            return {...state};
        default:return state;
    }
};