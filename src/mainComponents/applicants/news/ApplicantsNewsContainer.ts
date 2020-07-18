import {NewsEntityType} from "../../../redux/reducers/newsReducer";
import {AppStateType} from "../../../redux/store";
import {getApplicantsNews} from "../../../redux/actions/newsAction";
import {connect} from "react-redux";
import {ApplicantsNewsComponent} from "./ApplicantsNewsComponent";

type MapStateToPropsType = {
    amountOfNews:number
    totalAmountOfNews:number,
    news:Array<NewsEntityType>,
    limit:number,
    preloader:boolean
}

type MapDispatchToPropsType = {
    getNews:(offset:number, limit:number) => void
}

type OwnPropsType = {
    match:any
}

export type NewsPropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;

let MapStateToProps = (state:AppStateType):MapStateToPropsType => {
  return {
      amountOfNews:state.newsReducer.amountOfNews,
      totalAmountOfNews:state.newsReducer.totalAmountOfNews,
      news:state.newsReducer.news,
      limit:state.newsReducer.limit,
      preloader:state.newsReducer.preloader
  }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
    return {
        getNews:(offset, limit) => {
            dispatch(getApplicantsNews(offset, limit))
        }
    }
};

export const ApplicantsNewsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType>
(MapStateToProps, MapDispatchToProps)
(ApplicantsNewsComponent);