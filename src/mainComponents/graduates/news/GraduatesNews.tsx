import React, {useEffect} from 'react'
import {GraduatesNewsPropsType} from "./GraduatesNewsContainer";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {NewsComponent} from "../../../commonComponents/news/newsComponent";
import {PaginatorComponent} from "../../../commonComponents/paginator/PaginatorComponent";
import {Footer} from "../../../commonComponents/footer/Footer";

export const GraduatesNews:React.FC<GraduatesNewsPropsType> = (props) => {
    useEffect(() => {
        props.getGraduatesNews(0, props.limit);
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            <SimpleBody>
                <NewsComponent news={props.news}  path={props.match.path}/>
                <PaginatorComponent
                    total={props.totalAmountOfNews}
                    limit={props.limit}
                    getPosts={props.getGraduatesNews}
                />
            </SimpleBody>
            <Footer/>
        </>
    );
};