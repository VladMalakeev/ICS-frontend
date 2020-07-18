import {AppStateType} from "../../../redux/store";
import {getNewsById} from "../../../redux/actions/singleNewsAction";
import {connect} from "react-redux";
import {SingleGraduatesNews} from "./SingleGraduatesNews";
import {NewsEntityType} from "../../../redux/reducers/newsReducer";

type MapStateToPropsType = {
    news:NewsEntityType,
    preloader:boolean,
    isExist:boolean | null
}

type MapDispatchToPropsType = {
    getNewsById:(id:number, publics:number) => void
}

type OwnPropsType = {
    match:any
}

export type SingleNewsPropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;

let MapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        news:state.singleNewsReducer.news,
        preloader:state.singleNewsReducer.preloader,
        isExist:state.singleNewsReducer.isExist
    }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
    return {
        getNewsById:(id, publics) => {
            dispatch(getNewsById(id, publics))
        }
    }
};

export const SingleGraduatesNewsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>
(MapStateToProps, MapDispatchToProps)
(SingleGraduatesNews);