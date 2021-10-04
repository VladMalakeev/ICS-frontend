import React from "react";
import {SimpleBody} from "../../commonComponents/commomStyles";
import {
    DepartmentListItem,
    DepartmentListItemBackground,
    DepartmentListItemText,
    DepartmentsListWrap
} from "./DetartmentsStyles";
import {Footer} from "../../commonComponents/footer/Footer";

import departments from "../../mockData/departmets"
import {DepartmentType} from "./department.types";

export const DepartmentsListComponent = () => {
    //TODO: fetch departments
    // const {data, loading, error} = useQuery<DepartmentsListType>(GET_DEPARTMENT_LIST);
    const data:Array<DepartmentType> = departments;

    return <>
        <SimpleBody>
            <DepartmentsListWrap>
                {data.map((department:DepartmentType) =>  {
                    return <DepartmentListItem key={department.id}  to={department.id}>
                        <DepartmentListItemBackground src={department.image}></DepartmentListItemBackground>
                        <DepartmentListItemText>{department.name}</DepartmentListItemText>
                    </DepartmentListItem>
                })}
            </DepartmentsListWrap>
        </SimpleBody>
        <Footer/>
    </>
}