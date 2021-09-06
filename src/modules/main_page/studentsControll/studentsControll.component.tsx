import React from 'react'
import { NavLink } from "react-router-dom"
import { SimpleButton } from "../../../commonComponents/commomStyles"
import { MainPageTexts } from "../../../texts/mainPageTxt"
import { MainManagementDescription, MainManagementTitle, SixthBlock, SixthBlockContent, SixthBlockMask } from "../MainPageStyles"

export const MainPageStudentsControll = () => {
    return (
        <SixthBlock>
            <SixthBlockMask>
                <SixthBlockContent className={'revealator-slideright revealator-once'}>
                    <MainManagementTitle>{MainPageTexts.txt25}</MainManagementTitle>
                    <MainManagementDescription>{MainPageTexts.txt26}</MainManagementDescription>
                    <NavLink to='/students/management'><SimpleButton>{MainPageTexts.txt27}</SimpleButton></NavLink>
                </SixthBlockContent>
            </SixthBlockMask>
        </SixthBlock>
    )
}