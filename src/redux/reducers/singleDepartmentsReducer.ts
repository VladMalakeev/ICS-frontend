import {
    CHANGE_DEPARTMENT_PRELOADER,
    SET_DEPARTMENT, SET_IS_EXIST_STATUS,
    SingleDepartmentActionType
} from "../actions/singleDepartmentsAction";

export type DepartmentSpecialtyType = {
    id: number | null,
    specialtyCode: string | null,
    specialtyNumberCode: number | null,
    name: string | null
}

export type DepartmentType = {
    id: number | null,
    name: string | null,
    image: string | null,
    description: string | null,
    basicDiscipline: string | null,
    recommendedKnowledge: string | null,
    email: string | null,
    headOfDepartment: string | null,
    specialty: DepartmentSpecialtyType
}

type DepartmentsStateType = {
    department:DepartmentType,
    preloader:boolean,
    isExist:boolean | null
}

let initialState: DepartmentsStateType = {
    department: {
        id: null,
        name: null,
        image: null,
        description: null,
        basicDiscipline: null,
        recommendedKnowledge: null,
        email: null,
        headOfDepartment: null,
        specialty: {
            id: null,
            specialtyCode: null,
            specialtyNumberCode: null,
            name: null
        }
    },
    preloader:false,
    isExist: null
};

export const singleDepartmentReducer = (state = initialState, action:SingleDepartmentActionType):DepartmentsStateType => {
  switch (action.type) {
      case SET_DEPARTMENT:
          state.department = action.payload.department;
          return {...state};
      case CHANGE_DEPARTMENT_PRELOADER:
          state.preloader = action.payload.status;
          return {...state};
      case SET_IS_EXIST_STATUS:
          state.isExist = action.payload.status;
          return {...state};
      default: return state;
  }
};

