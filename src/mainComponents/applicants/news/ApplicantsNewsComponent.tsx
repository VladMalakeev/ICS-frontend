import React, {useEffect} from 'react'
import {Footer} from "../../../commonComponents/footer/Footer";
import { SimpleBody} from "../../../commonComponents/commomStyles";
import {NewsComponent} from "../../../commonComponents/news/newsComponent";
import {NewsPropsType} from "./ApplicantsNewsContainer";

export const ApplicantsNewsComponent: React.FC<NewsPropsType> = (props) => {
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
