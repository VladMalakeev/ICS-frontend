import React from 'react'
import { NavLink } from "react-router-dom"
import { SimpleButton } from "../../../commonComponents/commomStyles"
import { MainPageTexts } from "../../../texts/mainPageTxt"
import { 
    FirstBigMask,
    FirstBlock, 
    FirstContentBlock, 
    FirstLittleMask, 
    MainPageDescription, 
    MainPageTitle } from "../MainPageStyles"

export const MainPageFirstBlock = () => {
    return(
        <FirstBlock>

        <FirstBigMask/>
        <FirstLittleMask/>

        <FirstContentBlock>
            <MainPageTitle>{MainPageTexts.txt1}</MainPageTitle>
            <MainPageDescription>{MainPageTexts.txt2}</MainPageDescription>
            <NavLink to='/departments'><SimpleButton>{MainPageTexts.txt3}</SimpleButton></NavLink>
        </FirstContentBlock>

        </FirstBlock>
    )
}