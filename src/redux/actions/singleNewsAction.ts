import {NewsMock, NewsStudents, NewsGraduates} from '../../mockData/news'
import {NewsApi} from "../../api/DataAccessLayer";
import {ServerError} from "../../commonComponents/modals/errors";
import {NewsEntityType} from "../reducers/newsReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

export const SET_NEWS = "SINGLE_NEWS_REDUCER/SET_NEWS";

type setNewsActionType = {
    type: typeof SET_NEWS
    payload:NewsEntityType
}

export type SingleNewsActionType = setNewsActionType;

const setNewsAction = (news:any):setNewsActionType => {
    return {
        type: SET_NEWS,
        payload:news
    };
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, SingleNewsActionType>

export const getNewsById = (id:number, publics:number):ThunkType => {
    return async (dispatch) => {
        // NewsApi.getNewsById(id,publics)
        //     .then(res => {
        //         dispatch(setNewsAction(res));
        //     })
        //     .catch(error => {
        //         ServerError(error)
        //     });

        switch (publics) {
            case 1: dispatch(setNewsAction(NewsMock.news[id-1])); break;
            case 2: dispatch(setNewsAction(NewsStudents.news[id-1])); break;
            case 3: dispatch(setNewsAction(NewsGraduates.news[id-1])); break;
        }
    }
};