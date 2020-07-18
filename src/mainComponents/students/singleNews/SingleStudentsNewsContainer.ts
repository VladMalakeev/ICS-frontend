import {AppStateType} from "../../../redux/store";
import {getNewsById} from "../../../redux/actions/singleNewsAction";
import {connect} from "react-redux";
import {SingleStudentsNews} from "./SingleStudentsNews";

type MapStateToPropsType = {
    id: number | null
    title: string | null
    description: string | null
    author: string | null
    dateOfPublication: string | null,
    image: string | null,
    link: string | null,
    publics: number | null
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
        id: state.singleNewsReducer.id,
        title: state.singleNewsReducer.title,
        description: state.singleNewsReducer.description,
        author: state.singleNewsReducer.author,
        dateOfPublication: state.singleNewsReducer.dateOfPublication,
        image: state.singleNewsReducer.image,
        link: state.singleNewsReducer.link,
        publics: state.singleNewsReducer.publics
    }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
    return {
        getNewsById:(id, publics) => {
            dispatch(getNewsById(id, publics))
        }
    }
};

export const SingleStudentsNewsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>
(MapStateToProps, MapDispatchToProps)
(SingleStudentsNews);