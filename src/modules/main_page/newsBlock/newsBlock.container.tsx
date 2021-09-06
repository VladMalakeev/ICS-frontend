import React from "react";
import { useQuery } from "@apollo/client"
import { GET_NEWS_FOR_MAIN_PAGE } from "../../news/news.gql"
import { NewsListType } from "../../news/news.types"
import { MainPageNewsBlock } from "./newsBlock.component";

export const MainPageNewsBlockContainer = () => {
    const {data, error} = useQuery<NewsListType>(GET_NEWS_FOR_MAIN_PAGE);

    if(error) console.log(error);

    if(data?.news.length) return (
        <MainPageNewsBlock news={data?.news}/>
    )
    return null;

}