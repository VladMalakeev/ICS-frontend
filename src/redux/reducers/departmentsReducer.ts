import {DepartmentSpecialtyType} from "./singleDepartmentsReducer";
import {CHANGE_DEPARTMENTS_PRELOADER, DepartmentsActionType, SET_DEPARTMENTS} from "../actions/departmentsAction";

export type DepartmentsListType = {
    id: number | null,
    name: string | null,
    image: string | null,
    description: string | null,
    email: string | null,
    headOfDepartment: string | null,
    specialty: DepartmentSpecialtyType
}

type DepartmentsListStateType = {
    departments:Array<DepartmentsListType>,
    preloader:boolean
}

let initialState: DepartmentsListStateType = {
    departments:[],
    preloader:false
};

export const DepartmentsReducer = (state = initialState, action:DepartmentsActionType):DepartmentsListStateType => {
  switch (action.type) {
      case SET_DEPARTMENTS:{
          state.departments = action.payload.list;
          return {...state};
      }
      case CHANGE_DEPARTMENTS_PRELOADER:
          state.preloader = action.payload.status;
          return {...state};
      default: return state;
  }
};