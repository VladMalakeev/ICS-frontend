import {DepartmentsApi} from "../../api/DataAccessLayer";
import {DepartmentsListType} from "../reducers/departmentsReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {ServerError} from "../../commonComponents/modals/errors";
import {DepartmentsMock} from "../../mockData/departmets";

export const SET_DEPARTMENTS = "DEPARTMENTS_REDUCER/SET_DEPARTMENTS";
export const CHANGE_DEPARTMENTS_PRELOADER = "DEPARTMENTS_REDUCER/CHANGE_DEPARTMENTS_PRELOADER";

type setDepartmentsType = {
    type: typeof SET_DEPARTMENTS,
    payload:{
        list:Array<DepartmentsListType>
    }
}

type changeDepartmentsPreloaderType = {
    type: typeof CHANGE_DEPARTMENTS_PRELOADER,
    payload:{
        status:boolean
    }
}

export type DepartmentsActionType = setDepartmentsType | changeDepartmentsPreloaderType;

const setDepartments = (list:Array<DepartmentsListType>):setDepartmentsType => {
  return {
      type:SET_DEPARTMENTS,
      payload: {
          list
      }
  }
};

const changeDepartmentsPreloader = (status:boolean):changeDepartmentsPreloaderType => {
    return {
        type:CHANGE_DEPARTMENTS_PRELOADER,
        payload:{
            status
        }
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, DepartmentsActionType>

export const getDepartmentsList = ():ThunkType => {
    return async (dispatch) => {
        dispatch(changeDepartmentsPreloader(true));
        DepartmentsApi.getDepartments()
            .then(res => {
                dispatch(setDepartments(res))
            })
            .catch(error => {
                ServerError(error)
            })
            .finally(() => {
                dispatch(changeDepartmentsPreloader(false));
            })

       // dispatch(setDepartments(DepartmentsMock))
    }
};