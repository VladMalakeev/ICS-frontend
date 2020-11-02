import {SemestersActionType, SET_SEMESTER} from "../actions/semestersAction";
import moment from "moment";

export type ModuleEntityType = {
    id: number | null,
    weekOfModuleStart: number | null,
    weekOfModuleEnd: number | null,
    weekOfModuleStartDate: string | null,
    weekOfModuleEndDate: string | null
};

export type SemesterEntityType = {
    id: number | null,
    startDate: string | null,
    finishDate: string | null,
    startWeek: number | null,
    firstModule: ModuleEntityType | null,
    secondModule: ModuleEntityType | null,
    session: ModuleEntityType | null,
    description: string | null,
    thisWeek: number | null
};

let initialState: SemesterEntityType = {
    id: null,
    startDate: null,
    finishDate: null,
    startWeek: null,
    firstModule: null,
    secondModule: null,
    session: null,
    description: null,
    thisWeek:null
}

export const SemestersReducer = (state = initialState, action: SemestersActionType):SemesterEntityType => {
    switch (action.type){
        case SET_SEMESTER:
            state = action.payload;
            return {...state}
        default:return state;
    }
}