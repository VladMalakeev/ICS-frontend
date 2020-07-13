import {NewsMock, NewsStudents, NewsGraduates} from '../../mockData/news'

import {NewsType} from "../reducers/newsReducer";

export const SET_NEWS = "SET_NEWS";

type setNewsActionType = {
    type: typeof SET_NEWS
    payload:{
        amountOfNews:number,
        totalAmountOfNews:number,
        news:Array<any>
    }
}
//TODO any
const setNewsAction = (amountOfNews:number,totalAmountOfNews:number, news:any):setNewsActionType => {
    return {
        type: SET_NEWS,
        payload:{
            amountOfNews:amountOfNews,
            totalAmountOfNews:totalAmountOfNews,
            news:news
        }
    };
};

export const getApplicantsNews = (offset:number, limit:number) => {
    return (dispatch:any) => {
        let arr =  [];
        arr = NewsMock.news.concat();
        dispatch(setNewsAction(
            limit,
            NewsMock.totalAmountOfNews,
            arr.splice(offset, limit)
        ))
    }
};

export const getStudentsNews = (offset:number, limit:number) => {
    return (dispatch:any) => {
        let arr =  [];
        arr = NewsStudents.news.concat();
        dispatch(setNewsAction(
            limit,
            NewsStudents.totalAmountOfNews,
            arr.splice(offset, limit)
        ))
    }
};

export const getGraduatesNews = (offset:number, limit:number) => {
    return (dispatch:any) => {
        let arr =  [];
        arr = NewsGraduates.news.concat();
        dispatch(setNewsAction(
            limit,
            NewsGraduates.totalAmountOfNews,
            arr.splice(offset, limit)
        ))
    }
};