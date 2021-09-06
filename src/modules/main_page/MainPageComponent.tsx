import React, {useEffect, useState} from 'react'
import {Footer} from "../../commonComponents/footer/Footer";
import { MainPageAboutSpecialty } from './aboutSpecialty/aboutSpecialty.component';
import { MainPageFirstBlock } from './firstBlock/firstBlock.component';
import { MainPageNewsBlockContainer } from './newsBlock/newsBlock.container';
import { MainPageStudentsControll } from './studentsControll/studentsControll.component';
import { MainPageUniversityDescription } from './universityDescription/universityDescription.component';
import { MainPageUniversityStructure } from './universityStructure/universityStructure.component';
import { MainPageVideoBlockContainer } from './videoBlock/videoBlock.container';


export const MainPageComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    },[]);

  
    return (
        <>
            <MainPageFirstBlock/>
            <MainPageVideoBlockContainer/>
            <MainPageAboutSpecialty/>
            <MainPageUniversityDescription/>  
            <MainPageUniversityStructure/>
            <MainPageNewsBlockContainer/>
            <MainPageStudentsControll/>        
            <Footer/>
        </>
    );
};