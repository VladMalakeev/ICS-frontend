import {NewsEntityType} from "../../redux/reducers/newsReducer";
import {AppStateType} from "../../redux/store";
import {getApplicantsNews} from "../../redux/actions/newsAction";
import {connect} from "react-redux";
import {MainPage} from "./MainPageComponent";

type MapStateToPropsType = {
    amountOfNews:number
    news:Array<NewsEntityType>,
}

type MapDispatchToPropsType = {
    getApplicantsNews:(offset:number, limit:number) => void
}

export type NewsPropsType = MapDispatchToPropsType & MapStateToPropsType;

let MapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        amountOfNews:state.newsReducer.amountOfNews,
        news:state.newsReducer.news
    }
};

let MapDispatchToProps = (dispatch):MapDispatchToPropsType => {
    return {
        getApplicantsNews:(offset, limit) => {
            dispatch(getApplicantsNews(offset, limit))
        }
    }
};

export const MainPageContainer = connect<MapStateToPropsType, MapDispatchToPropsType, null>
(MapStateToProps, MapDispatchToProps)
(MainPage);