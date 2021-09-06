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

import {EmptySinglePost} from "../../Empty";
import {Skeleton} from "antd";
import {SingleNewsTextWrap} from "../newsStyles";

const IMAGES = process.env.REACT_APP_IMAGES;

// type SingleNewsComponentType = {
//     news:NewsEntityType,
//     preloader:boolean,
//     isExist:boolean
// }

export const SingleNewsComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return(
        <NewsWrap>
            {/* {(props.isExist && !props.preloader) &&
                <NewsBlock>
                    <NewsImageWrap>
                        <NewsImage src={IMAGES+props.news.image}/>
                    </NewsImageWrap>
                    <NewsTitle>{props.news.title}</NewsTitle>
                    <DescriptionBlock dangerouslySetInnerHTML={{ __html: props.news.description }}/>
                    <AuthorBlock>
                        <InfoText>Дата публикации: {moment(props.news.dateOfPublication).format('DD.MM.YYYY')}</InfoText>
                        <InfoText>Автор: {props.news.author}</InfoText>
                    </AuthorBlock>
                </NewsBlock>
            }
            {(!props.isExist && props.preloader) && <EmptyNews/>}
            {props.isExist === false && <EmptySinglePost/>} */}
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