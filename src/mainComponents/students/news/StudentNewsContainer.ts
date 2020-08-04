import {NewsEntityType} from "../../../redux/reducers/newsReducer";
import {AppStateType} from "../../../redux/store";
import {getStudentsNews} from "../../../redux/actions/newsAction";
import {connect} from "react-redux";
import {StudentNews} from "./StudentNewsComponent";
import {SemesterEntityType} from "../../../redux/reducers/semestersReducer";
import {getSemesterData} from "../../../redux/actions/semestersAction";

type MapStateToPropsType = {
    amountOfNews:number
    totalAmountOfNews:number,
    news:Array<NewsEntityType>,
    limit:number,
    preloader:boolean,
    semester:SemesterEntityType
}

type MapDispatchToPropsType = {
    getNews:(offset:number, limit:number) => void,
    getSemester:() => void
}

type OwnPropsType = {
    match:any
}

export type StudentNewsPropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;

let MapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        amountOfNews:state.newsReducer.amountOfNews,
        totalAmountOfNews:state.newsReducer.totalAmountOfNews,
        news:state.newsReducer.news,
        limit:state.newsReducer.limit,
        preloader:state.newsReducer.preloader,
        semester:state.semestersReducer
    }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
    return {
        getNews:(offset, limit) => {
            dispatch(getStudentsNews(offset, limit))
        },
        getSemester:() => {
            dispatch(getSemesterData())
        }
    }
};

export const StudentsNewsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>
(MapStateToProps, MapDispatchToProps)
(StudentNews);