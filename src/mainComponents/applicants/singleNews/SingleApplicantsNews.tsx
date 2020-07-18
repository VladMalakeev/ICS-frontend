import React, {useEffect} from 'react'
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {Footer} from "../../../commonComponents/footer/Footer";
import {SingleNewsComponent} from "../../../commonComponents/news/single/singleNewsComponent";
import {SingleNewsPropsType} from "./SingleApplicantsNewsContainer";

export const SingleApplicantsNews:React.FC<SingleNewsPropsType> = (props) => {
    useEffect(() => {
        props.getNewsById(props.match.params.id,1);
    });

    return (<>
        <SimpleBody>
            <SingleNewsComponent data={props}/>
        </SimpleBody>
        <Footer/>
    </>);
};