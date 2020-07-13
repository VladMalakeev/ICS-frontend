import React, {useEffect} from 'react'
import {Footer} from "../../../commonComponents/footer/Footer";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {NewsComponent} from "../../../commonComponents/news/newsComponent";
import {NewsPropsType} from "./ApplicantsNewsContainer";
import {PaginatorComponent} from "../../../commonComponents/paginator/PaginatorComponent";

export const ApplicantsNewsComponent: React.FC<NewsPropsType> = (props) => {
    useEffect(() => {
        props.getApplicantsNews(0, props.limit);
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            <SimpleBody>
            <NewsComponent news={props.news}  path={props.match.path}/>
            <PaginatorComponent
                total={props.totalAmountOfNews}
                limit={props.limit}
                getPosts={props.getApplicantsNews}
            />
            </SimpleBody>
            <Footer/>
        </>
    );
};