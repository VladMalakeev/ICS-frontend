import {NewsMock, NewsStudents, NewsGraduates} from '../../mockData/news'
import {NewsApi} from "../../api/DataAccessLayer";
import {ServerError} from "../../commonComponents/modals/errors";
import {NewsEntityType} from "../reducers/newsReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

export const SET_NEWS = "SINGLE_NEWS_REDUCER/SET_NEWS";
export const CHANGE_PRELOADER = "SINGLE_NEWS/CHANGE_PRELOADER";
export const NEWS_EXIST = "SINGLE_NEWS/NEWS_EXIST";

type setNewsActionType = {
    type: typeof SET_NEWS
    payload:NewsEntityType
}

type changePreloaderType = {
    type: typeof CHANGE_PRELOADER,
    payload:{
        status:boolean
    }
}

type newsExistType = {
    type: typeof NEWS_EXIST,
    payload:{
        status:boolean
    }
}

export type SingleNewsActionType = setNewsActionType | changePreloaderType | newsExistType;

const setNewsAction = (news:any):setNewsActionType => {
    return {
        type: SET_NEWS,
        payload:news
    };
};

const changePreloader = (status:boolean):changePreloaderType => {
  return {
      type:CHANGE_PRELOADER,
      payload:{status}
  }
};

const newsExist = (status:boolean):newsExistType => {
    return {
        type:NEWS_EXIST,
        payload:{status}
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, SingleNewsActionType>

export const getNewsById = (id:number, publics:number):ThunkType => {
    return async (dispatch) => {
        // dispatch(changePreloader(true));
        // NewsApi.getNewsById(id, publics)
        //     .then(res => {
        //         dispatch(setNewsAction(res));
        //         dispatch(newsExist(true))
        //     })
        //     .catch(error => {
        //         if(error.response){
        //             if(error.response.status === 404) {
        //                 dispatch(newsExist(false))
        //             }
        //         }else ServerError(error)
        //     })
        //     .finally(() => {
        //         dispatch(changePreloader(false));
        //     });

        dispatch(newsExist(true));
        switch (publics) {
            case 1: dispatch(setNewsAction(NewsMock.news[id-1])); break;
            case 2: dispatch(setNewsAction(NewsStudents.news[id-1])); break;
            case 3: dispatch(setNewsAction(NewsGraduates.news[id-1])); break;
        }
    }
};