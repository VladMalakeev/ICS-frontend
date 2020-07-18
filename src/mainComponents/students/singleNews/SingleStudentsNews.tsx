import React, {useEffect} from 'react'
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {SingleNewsComponent} from "../../../commonComponents/news/single/singleNewsComponent";
import {Footer} from "../../../commonComponents/footer/Footer";
import {SingleNewsPropsType} from "./SingleStudentsNewsContainer";
import {PUBLICS} from "../../../commonComponents/enums";

export const SingleStudentsNews:React.FC<SingleNewsPropsType> = (props) => {
    useEffect(() => {
        props.getNewsById(props.match.params.id, PUBLICS.STUDENTS);
    },[]);

    return (<>
        <SimpleBody>
            <SingleNewsComponent {...props}/>
        </SimpleBody>
        <Footer/>
    </>);
};