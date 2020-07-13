import {SET_NEWS} from '../actions/newsAction'

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
    news:Array<NewsEntityType>
};

let initialState: NewsType = {
    limit:6,
    amountOfNews:0,
    totalAmountOfNews:0,
    news:[]
};

export const NewsReducer = (state = initialState, action: any):NewsType => {
    switch (action.type) {
        case SET_NEWS:
            state.news = action.payload.news;
            state.amountOfNews = action.payload.amountOfNews;
            state.totalAmountOfNews = action.payload.totalAmountOfNews;
            return {...state};
        default:return state;
    }
};