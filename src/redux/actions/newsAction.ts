import {NewsMock, NewsStudents, NewsGraduates} from '../../mockData/news'
import {NewsApi} from "../../api/DataAccessLayer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {ServerError} from "../../commonComponents/modals/errors";


export const SET_NEWS = "NEWS_REDUCER/SET_NEWS";
export const CHANGE_NEWS_PRELOADER = "NEWS_REDUCER/CHANGE_NEWS_PRELOADER";

type setNewsActionType = {
    type: typeof SET_NEWS
    payload:{
        amountOfNews:number,
        totalAmountOfNews:number,
        news:Array<any>
    }
}

type changeNewsPreloaderType = {
    type: typeof CHANGE_NEWS_PRELOADER,
    payload:{
        status:boolean
    }
}

export type NewsActionsType = setNewsActionType | changeNewsPreloaderType;

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

const changeNewsPreloader = (status:boolean): changeNewsPreloaderType => {
    return {
        type:CHANGE_NEWS_PRELOADER,
        payload:{
            status:status
        }
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, NewsActionsType>

export const getApplicantsNews = (offset:number, limit:number):ThunkType => {
    return async (dispatch) => {
        // dispatch(changeNewsPreloader(true));
        // NewsApi.getApplicantsNews(offset,limit)
        //     .then(res => {
        //         dispatch(setNewsAction(res.amountOfNews, res.totalAmountOfNews, res.news));
        //     })
        //     .catch(error => {
        //         ServerError(error)
        //     })
        //     .finally(() => {
        //         dispatch(changeNewsPreloader(false));
        //     })

        let arr =  [];
        arr = NewsMock.news.concat();
        dispatch(setNewsAction(
            limit,
            NewsMock.totalAmountOfNews,
            arr.splice(offset, limit)
        ))
    }
};

export const getStudentsNews = (offset:number, limit:number):ThunkType => {
    return async (dispatch) => {
        // dispatch(changeNewsPreloader(true));
        // NewsApi.getStudentsNews(offset,limit)
        //     .then(res => {
        //         dispatch(setNewsAction(res.amountOfNews, res.totalAmountOfNews, res.news));
        //     })
        //     .catch(error => {
        //         ServerError(error)
        //     })
        //     .finally(() => {
        //         dispatch(changeNewsPreloader(false));
        //     });

        let arr =  [];
        arr = NewsStudents.news.concat();
        dispatch(setNewsAction(
            limit,
            NewsStudents.totalAmountOfNews,
            arr.splice(offset, limit)
        ))
    }
};

export const getGraduatesNews = (offset:number, limit:number):ThunkType => {
    return async (dispatch) => {
        // dispatch(changeNewsPreloader(true));
        // NewsApi.getGraduatesNews(offset,limit)
        //     .then(res => {
        //         dispatch(setNewsAction(res.amountOfNews, res.totalAmountOfNews, res.news));
        //     })
        //     .catch(error => {
        //         ServerError(error)
        //     })
        //     .finally(() => {
        //         dispatch(changeNewsPreloader(false));
        //     });

        let arr =  [];
        arr = NewsGraduates.news.concat();
        dispatch(setNewsAction(
            limit,
            NewsGraduates.totalAmountOfNews,
            arr.splice(offset, limit)
        ))
    }
};
