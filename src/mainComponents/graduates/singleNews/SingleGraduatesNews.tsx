import React, {useEffect} from 'react'
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {SingleNewsComponent} from "../../../commonComponents/news/single/singleNewsComponent";
import {Footer} from "../../../commonComponents/footer/Footer";
import {SingleNewsPropsType} from "./SingleGraduatesNewsContainer";


export const SingleGraduatesNews:React.FC<SingleNewsPropsType> = (props) => {
    useEffect(() => {
        props.getNewsById(props.match.params.id,3);
    });

    return (<>
        <SimpleBody>
            <SingleNewsComponent data={props}/>
        </SimpleBody>
        <Footer/>
    </>);
};