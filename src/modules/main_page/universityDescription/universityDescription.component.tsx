import React from 'react'
import { H2White } from "../../../commonComponents/commomStyles"
import { MainPageTexts } from "../../../texts/mainPageTxt"
import { 
    MainAvailabilityDescription, 
    SecondBigMask, 
    SecondLittleMask, 
    ThirdBlock, 
    ThirdBlockContent 
} from "../MainPageStyles"

export const MainPageUniversityDescription = () => {
    return (
        <ThirdBlock>

            <SecondLittleMask />
            <SecondBigMask />

            <ThirdBlockContent className={'revealator-slideleft revealator-once'}>
                <H2White>{MainPageTexts.txt15}</H2White>
                <MainAvailabilityDescription style={{ textAlign: 'left' }}>{MainPageTexts.txt16}</MainAvailabilityDescription>
            </ThirdBlockContent>

        </ThirdBlock>
    )
}