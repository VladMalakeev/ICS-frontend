import {LecturerType} from "../lecturers/lecturers.types";

export type DepartmentType = {
    id: string,
    name: string,
    image: string,
    description: string,
   // headOfDepartment:LecturerType
}

//Component Types

export type SingleDepartmentComponentType = {
    match:{
        params:{
            id:string
        }
    }
}