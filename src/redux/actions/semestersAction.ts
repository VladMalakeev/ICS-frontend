import {SemesterEntityType} from "../reducers/semestersReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {SemestersApi} from "../../api/DataAccessLayer";
import {ServerError} from "../../commonComponents/modals/errors";

export const SET_SEMESTER = "SEMESTERS_REDUCER/SET_SEMESTER";

type SetSemesterActionType = {
    type: typeof SET_SEMESTER,
    payload:SemesterEntityType
}

export type SemestersActionType = SetSemesterActionType;

const setSemesterAction = (semester:SemesterEntityType):SetSemesterActionType => {
    return {
        type:SET_SEMESTER,
        payload:semester
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, SemestersActionType>

export const getSemesterData = ():ThunkType => {
    return async (dispatch) => {
        SemestersApi.getSemesterData()
            .then(data => {
                dispatch(setSemesterAction(data))
            })
            .catch(error => {
                ServerError(error)
            })
            .finally(() => {

            })
    }
}