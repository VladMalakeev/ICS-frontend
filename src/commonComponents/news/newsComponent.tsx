import React from "react";
import {NewsEntityType} from "../../redux/reducers/newsReducer";
import {
    NewsBlockWrap,
    NewsListWrap, SingleNewsButtons,
    SingleNewsDate, SingleNewsDescription,
    SingleNewsHeader, SingleNewsImageBackground,
    SingleNewsImageWrap,
    SingleNewsTextWrap,
    SingleNewsWrap
} from "./newsStyles";
import moment from 'moment';
import {Paragraph, SimpleBlueButton} from "../commomStyles";
import {NewsTxt} from "../../texts/newsTxt";
import {NavLink} from "react-router-dom";
import {IMAGES} from "../../api/DataAccessLayer";
import {Skeleton} from "antd";
import {PaginatorComponent} from "../paginator/PaginatorComponent";
import {EmptyComponent} from "../Empty";


export const NewsComponent = (props) => {
    return (
        <NewsBlockWrap>
            {(props.news.length > 0 || props.preloader) &&
            <>
                <NewsListWrap>
                    {!props.preloader &&
                        <>
                            {props.news.map(element => <SingleNews post={element} path={props.match.path}/>)}
                        </>
                    }

                    {props.preloader &&
                        <>
                            <NewsSkeleton/>
                            <NewsSkeleton/>
                            <NewsSkeleton/>
                        </>
                    }
                </NewsListWrap>
                {!props.preloader &&
                <PaginatorComponent
                    total={props.totalAmountOfNews}
                    limit={props.limit}
                    getPosts={props.getNews}
                />
                }
            </>
            }
            {(props.news.length === 0  && !props.preloader) &&
            <>
                <EmptyComponent/>
            </>
            }
        </NewsBlockWrap>
    )
};


type SingleNewsProps = {
    post:NewsEntityType,
    path:string
};


const SingleNews: React.FC<SingleNewsProps> = ({post, path}) => {
    return (
        <SingleNewsWrap>
            <SingleNewsImageBackground>
                <SingleNewsImageWrap image={IMAGES+post.image}>
                {/*<SingleNewsImageWrap image={post.image}>*/}
                    <SingleNewsDate>{moment(post.dateOfPublication).format('DD.MM.YY')}</SingleNewsDate>
                </SingleNewsImageWrap>
            </SingleNewsImageBackground>

            <SingleNewsTextWrap>
                <div>
                    <SingleNewsHeader>{post.title}</SingleNewsHeader>
                    <SingleNewsDescription dangerouslySetInnerHTML={{ __html: post.description }}/>
                </div>
                <SingleNewsButtons>
                    <Paragraph style={{fontWeight:'bold'}}>{post.author}</Paragraph>
                    <NavLink to={`${path}/${post.id}`}>
                        <SimpleBlueButton> <span>{NewsTxt.txt4}</span></SimpleBlueButton>
                    </NavLink>
                </SingleNewsButtons>
            </SingleNewsTextWrap>
        </SingleNewsWrap>
    )
};

const NewsSkeleton = () => {
    return (
        <SingleNewsWrap>
            <SingleNewsImageBackground>
            </SingleNewsImageBackground>
            <SingleNewsTextWrap>
                <Skeleton active />
            </SingleNewsTextWrap>
        </SingleNewsWrap>
    )
};