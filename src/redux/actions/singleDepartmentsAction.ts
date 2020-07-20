import {DepartmentType} from "../reducers/singleDepartmentsReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {DepartmentsActionType} from "./departmentsAction";
import {DepartmentsApi} from "../../api/DataAccessLayer";
import {ServerError} from "../../commonComponents/modals/errors";
import {DepartmentsMock} from "../../mockData/departmets";

export const SET_DEPARTMENT = "SINGLE_DEPARTMENT_REDUCER/SET_DEPARTMENT";
export const CHANGE_DEPARTMENT_PRELOADER = "SINGLE_DEPARTMENT_REDUCER/CHANGE_DEPARTMENT_PRELOADER";
export const SET_IS_EXIST_STATUS = "SINGLE_DEPARTMENT_REDUCER/SET_IS_EXIST_STATUS";

type setDepartmentType = {
    type:typeof SET_DEPARTMENT,
    payload:{
        department:DepartmentType
    }
}

type changeDepartmentPreloaderType = {
    type: typeof CHANGE_DEPARTMENT_PRELOADER,
    payload:{
        status:boolean
    }
}

type setIsExistStatusType = {
    type: typeof SET_IS_EXIST_STATUS,
    payload:{
        status: boolean
    }
}

export type SingleDepartmentActionType = setDepartmentType | changeDepartmentPreloaderType | setIsExistStatusType;

const setDepartment = (department):setDepartmentType => {
    return {
        type:SET_DEPARTMENT,
        payload:{
            department
        }
    }
};

const changeDepartmentPreloader = (status: boolean):changeDepartmentPreloaderType => {
    return {
        type:CHANGE_DEPARTMENT_PRELOADER,
        payload:{
            status
        }
    }
};

const setIsExistStatus = (status: boolean):setIsExistStatusType => {
    return {
        type:SET_IS_EXIST_STATUS,
        payload:{
            status
        }
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, SingleDepartmentActionType>

export const getDepartmentById = (id: number):ThunkType => {
    return async (dispatch) => {
        changeDepartmentPreloader(true);
        DepartmentsApi.getDepartmentsById(id)
            .then(res => {
                dispatch(setDepartment(res));
                dispatch(setIsExistStatus(true));
            })
            .catch(error => {
                if(error.response){
                    if(error.response.status === 404) {
                        dispatch(setIsExistStatus(false));
                    }
                }else ServerError(error)
            })
            .finally(() => {
                changeDepartmentPreloader(false);
            })

        // dispatch(setDepartment(DepartmentsMock[0]));
        // dispatch(setIsExistStatus(true));
    }
};
