import React, {useEffect} from 'react'
import {StudentNewsPropsType} from "./StudentNewsContainer";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {NewsComponent} from "../../../commonComponents/news/newsComponent";
import {Footer} from "../../../commonComponents/footer/Footer";

export const StudentNews:React.FC<StudentNewsPropsType> = (props) => {
    useEffect(() => {
        props.getNews(0, props.limit);
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            <SimpleBody>
                <NewsComponent {...props}/>
            </SimpleBody>
            <Footer/>
        </>
    );
};