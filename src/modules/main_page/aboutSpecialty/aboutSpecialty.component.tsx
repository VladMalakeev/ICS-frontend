import React from 'react'
import { H2Black, Paragraph } from "../../../commonComponents/commomStyles"
import { MainPageTexts } from "../../../texts/mainPageTxt"
import { 
    AbilityItemContent, 
    AbilityItemNumber, 
    AbilityItemTextWrap, 
    AbilityItemWrap, 
    AbilityItemWrapReverse, 
    ItemHeader, 
    SecondBlock, 
    SecondBlockContent 
} from "../MainPageStyles"

export const MainPageAboutSpecialty = () => {
    return (
        <SecondBlock>

            <SecondBlockContent>
                <H2Black style={{ textAlign: 'center' }}>{MainPageTexts.txt4}</H2Black>

                <AbilityItemWrap className={'revealator-fade revealator-once'}>
                    <AbilityItemContent>
                        <AbilityItemNumber>1</AbilityItemNumber>
                        <AbilityItemTextWrap>
                            <ItemHeader>{MainPageTexts.txt5}</ItemHeader>
                            <Paragraph>{MainPageTexts.txt6}</Paragraph>
                        </AbilityItemTextWrap>
                    </AbilityItemContent>
                </AbilityItemWrap>

                <AbilityItemWrapReverse className={'revealator-fade revealator-once'}>
                    <AbilityItemContent>
                        <AbilityItemNumber>2</AbilityItemNumber>
                        <AbilityItemTextWrap>
                            <ItemHeader>{MainPageTexts.txt7}</ItemHeader>
                            <Paragraph>{MainPageTexts.txt8}</Paragraph>
                        </AbilityItemTextWrap>
                    </AbilityItemContent>
                </AbilityItemWrapReverse>


                <AbilityItemWrap className={'revealator-fade revealator-once'}>
                    <AbilityItemContent>
                        <AbilityItemNumber>3</AbilityItemNumber>
                        <AbilityItemTextWrap>
                            <ItemHeader>{MainPageTexts.txt9}</ItemHeader>
                            <Paragraph>{MainPageTexts.txt10}</Paragraph>
                        </AbilityItemTextWrap>
                    </AbilityItemContent>
                </AbilityItemWrap>

                <AbilityItemWrapReverse className={'revealator-fade revealator-once'}>
                    <AbilityItemContent>
                        <AbilityItemNumber>4</AbilityItemNumber>
                        <AbilityItemTextWrap>
                            <ItemHeader>{MainPageTexts.txt11}</ItemHeader>
                            <Paragraph>{MainPageTexts.txt12}</Paragraph>
                        </AbilityItemTextWrap>
                    </AbilityItemContent>
                </AbilityItemWrapReverse>

                <AbilityItemWrap className={'revealator-fade revealator-once'}>
                    <AbilityItemContent>
                        <AbilityItemNumber>5</AbilityItemNumber>
                        <AbilityItemTextWrap>
                            <ItemHeader>{MainPageTexts.txt13}</ItemHeader>
                            <Paragraph>{MainPageTexts.txt14}</Paragraph>
                        </AbilityItemTextWrap>
                    </AbilityItemContent>
                </AbilityItemWrap>

            </SecondBlockContent>

        </SecondBlock>
    )
}