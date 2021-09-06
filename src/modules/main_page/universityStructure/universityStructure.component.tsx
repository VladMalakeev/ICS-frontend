import React from 'react'
import { H2Black, ParagraphCentered } from "../../../commonComponents/commomStyles"
import { MainPageTexts } from "../../../texts/mainPageTxt"
import { 
    FourthBlock, 
    FourthBlockContent, 
    FourthBlockItem, 
    FourthBlockItemWrap, 
    IconWrap, 
    ItemHeader 
} from "../MainPageStyles"

import idea from '../../../svg/idea'
import cloud from '../../../svg/cloud'
import tool from '../../../svg/edit-tool'

export const MainPageUniversityStructure = () => {
    return (
        <FourthBlock>
            <FourthBlockContent>
                <H2Black>{MainPageTexts.txt17}</H2Black>
                <FourthBlockItemWrap>

                    <FourthBlockItem className={'revealator-zoomin revealator-once revealator-delay2'}>
                        <IconWrap>
                            {idea}
                            <ItemHeader>{MainPageTexts.txt18}</ItemHeader>
                        </IconWrap>
                        <ParagraphCentered>{MainPageTexts.txt19}</ParagraphCentered>
                    </FourthBlockItem>

                    <FourthBlockItem className={'revealator-zoomin revealator-once revealator-delay4'}>
                        <IconWrap>
                            {tool}
                            <ItemHeader>{MainPageTexts.txt20}</ItemHeader>
                        </IconWrap>
                        <ParagraphCentered>{MainPageTexts.txt21}</ParagraphCentered>
                    </FourthBlockItem>

                    <FourthBlockItem className={'revealator-zoomin revealator-once revealator-delay6'}>
                        <IconWrap>
                            {cloud}
                            <ItemHeader>{MainPageTexts.txt22}</ItemHeader>
                        </IconWrap>
                        <ParagraphCentered>{MainPageTexts.txt23}</ParagraphCentered>
                    </FourthBlockItem>

                </FourthBlockItemWrap>
            </FourthBlockContent>
        </FourthBlock>
    )
}