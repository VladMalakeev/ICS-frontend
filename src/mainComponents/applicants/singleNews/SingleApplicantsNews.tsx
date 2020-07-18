import React, {useEffect} from 'react'
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {Footer} from "../../../commonComponents/footer/Footer";
import {SingleNewsComponent} from "../../../commonComponents/news/single/singleNewsComponent";
import {SingleNewsPropsType} from "./SingleApplicantsNewsContainer";
import {PUBLICS} from "../../../commonComponents/enums";

export const SingleApplicantsNews:React.FC<SingleNewsPropsType> = (props) => {
    useEffect(() => {
        props.getNewsById(props.match.params.id, PUBLICS.APPLICANTS);
    },[]);

    return (<>
        <SimpleBody>
            <SingleNewsComponent {...props}/>
        </SimpleBody>
        <Footer/>
    </>);
};