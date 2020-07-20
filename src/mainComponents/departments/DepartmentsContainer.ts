import {DepartmentsListType} from "../../redux/reducers/departmentsReducer";
import {AppStateType} from "../../redux/store";
import {getDepartmentsList} from "../../redux/actions/departmentsAction";
import {connect} from "react-redux";
import {DepartmentsComponent} from "./DepartmentsComponent";

type MapStateToPropsType = {
    departments:Array<DepartmentsListType>,
    preloader:boolean
}

type MapDispatchToPropsType = {
    getDepartments: () => void
}

type OwnProps = {
    match:any
}

export type DepartmentsPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps;

let MapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        departments:state.departmentsReducer.departments,
        preloader:state.departmentsReducer.preloader
    }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
  return {
      getDepartments:() => {
          dispatch(getDepartmentsList());
      }
  }
};

export const DepartmentsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps>
(MapStateToProps, MapDispatchToProps)(DepartmentsComponent);