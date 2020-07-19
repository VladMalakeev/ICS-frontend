import React, {useEffect} from "react";
import {
    AuthorBlock,
    DescriptionBlock,
    InfoText,
    NewsBlock,
    NewsImage, NewsImageWrap,
    NewsTitle,
    NewsWrap
} from "./singleNewsStyles";
import moment from 'moment'
import {NewsEntityType} from "../../../redux/reducers/newsReducer";
import {EmptySinglePost} from "../../Empty";
import {Skeleton} from "antd";
import {SingleNewsTextWrap} from "../newsStyles";
import {IMAGES} from "../../../api/DataAccessLayer";

type SingleNewsComponentType = {
    news:NewsEntityType,
    preloader:boolean,
    isExist:boolean
}

export const SingleNewsComponent:React.FC<SingleNewsComponentType> = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return(
        <NewsWrap>
            {(props.isExist && !props.preloader) &&
                <NewsBlock>
                    <NewsImageWrap>
                        <NewsImage image={IMAGES+props.news.image}/>
                    </NewsImageWrap>
                    <NewsTitle>{props.news.title}</NewsTitle>
                    <DescriptionBlock>
                        {props.news.description}
                    </DescriptionBlock>
                    <AuthorBlock>
                        <InfoText>Дата публикации: {moment(props.news.dateOfPublication).format('DD.MM.YYYY')}</InfoText>
                        <InfoText>Автор: {props.news.author}</InfoText>
                    </AuthorBlock>
                </NewsBlock>
            }
            {(!props.isExist && props.preloader) && <EmptyNews/>}
            {props.isExist === false && <EmptySinglePost/>}
        </NewsWrap>
    )
};

const EmptyNews = () => {
  return (
      <NewsBlock>
          <NewsImage style={{background:'#ababab47'}}/>
          <Skeleton active />
          <Skeleton active />
      </NewsBlock>
  )
};