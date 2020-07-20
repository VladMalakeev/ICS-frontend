import {DepartmentType} from "../../../redux/reducers/singleDepartmentsReducer";
import {AppStateType} from "../../../redux/store";
import {getDepartmentById} from "../../../redux/actions/singleDepartmentsAction";
import {connect} from "react-redux";
import {SingleDepartmentComponent} from "./SingleDepartmentComponent";

type MapStateToPropsType = {
    department:DepartmentType,
    preloader:boolean,
    isExist:boolean
}

type MapDispatchToPropsType = {
    getDepartmentById: (id:number) => void
}

type OwnProps = {
    match:any
}

export type DepartmentPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps;

let MapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        department:state.singleDepartmentReducer.department,
        preloader:state.singleDepartmentReducer.preloader,
        isExist:state.singleDepartmentReducer.isExist
    }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
    return {
        getDepartmentById:(id:number) => {
            dispatch(getDepartmentById(id))
        }
    }
};

export const SingleDepartmentContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps>
(MapStateToProps, MapDispatchToProps)(SingleDepartmentComponent);