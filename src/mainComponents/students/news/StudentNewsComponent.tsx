import React, {useEffect} from 'react'
import {StudentNewsPropsType} from "./StudentNewsContainer";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {NewsComponent} from "../../../commonComponents/news/newsComponent";
import {Footer} from "../../../commonComponents/footer/Footer";
import {CalendarComponent} from "../../../commonComponents/calendar/calendarComponent";
import {NewsDoubleBlockWrap} from "../../../commonComponents/news/newsStyles";

export const StudentNews:React.FC<StudentNewsPropsType> = (props) => {
    useEffect(() => {
        let location = parseInt(window.location.href.split('#')[1]);
        if(location){
            props.getNews((location-1)*props.limit, props.limit);
        }else{
            props.getNews(0, props.limit);
        }
        window.scrollTo(0, 0);

        props.getSemester();
    },[]);

    return (
        <>
            <SimpleBody>
                <NewsDoubleBlockWrap>
                    <NewsComponent {...props}/>
                    <CalendarComponent data={props.semester}/>
                </NewsDoubleBlockWrap>
            </SimpleBody>
            <Footer/>
        </>
    );
};