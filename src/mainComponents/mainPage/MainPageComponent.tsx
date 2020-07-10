import React from 'react'
import {
    AbilityItemContent,
    ItemDescription,
    ItemHeader,
    AbilityItemNumber,
    AbilityItemTextWrap,
    AbilityItemWrap,
    AbilityItemWrapReverse,
    FirstBigMask,
    FirstContentBlock,
    FirstBlock,
    FirstLittleMask,
    MainH1,
    MainH2Black,
    MainH2White,
    ParagraphWhite,
    SecondBlock,
    SecondBlockContent,
    ThirdBlock,
    SecondBigMask,
    SecondLittleMask,
    ThirdBlockContent,
    FourthBlock,
    FourthBlockItemWrap,
    FourthBlockItem,
    FourthBlockContent,
    ItemDescriptionCentered,
    FifthBlock,
    MainContentBlock,
    CarouselBlock, FifthBlockContent, SixthBlock, SixthBlockMask, SixthBlockContent, SeventhBlock, SeventhBlockContent
} from "./MainPageStyles";
import {MainPageTexts} from '../../texts/mainPageTxt'
import {SimpleButton} from "../../commonComponents/commomStyles";
import {NavLink} from "react-router-dom";
import idea from '../../svg/idea'
import cloud from '../../svg/cloud'
import tool from '../../svg/edit-tool'
import {Carousel} from "antd";

export const MainPage = () => {
    return (
        <>
            <FirstBlock>

                <FirstBigMask/>
                <FirstLittleMask/>

                <FirstContentBlock>
                    <MainH1>{MainPageTexts.txt1}</MainH1>
                    <ParagraphWhite style={{marginBottom:'40px'}}>{MainPageTexts.txt2}</ParagraphWhite>
                    <NavLink to='/departments'><SimpleButton>{MainPageTexts.txt3}</SimpleButton></NavLink>
                </FirstContentBlock>

            </FirstBlock>

            <SecondBlock>

                <SecondBlockContent>
                    <MainH2Black>{MainPageTexts.txt4}</MainH2Black>

                    <AbilityItemWrap>
                        <AbilityItemContent>
                            <AbilityItemNumber>1</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt5}</ItemHeader>
                                <ItemDescription>{MainPageTexts.txt6}</ItemDescription>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrap>

                    <AbilityItemWrapReverse>
                        <AbilityItemContent>
                            <AbilityItemNumber>2</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt7}</ItemHeader>
                                <ItemDescription>{MainPageTexts.txt8}</ItemDescription>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrapReverse>


                    <AbilityItemWrap>
                        <AbilityItemContent>
                            <AbilityItemNumber>3</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt9}</ItemHeader>
                                <ItemDescription>{MainPageTexts.txt10}</ItemDescription>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrap>

                    <AbilityItemWrapReverse>
                        <AbilityItemContent>
                            <AbilityItemNumber>4</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt11}</ItemHeader>
                                <ItemDescription>{MainPageTexts.txt12}</ItemDescription>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrapReverse>

                    <AbilityItemWrap>
                        <AbilityItemContent>
                            <AbilityItemNumber>5</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt13}</ItemHeader>
                                <ItemDescription>{MainPageTexts.txt14}</ItemDescription>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrap>

                </SecondBlockContent>

            </SecondBlock>

            <ThirdBlock>

                <SecondLittleMask/>
                <SecondBigMask/>

                <ThirdBlockContent>
                    <MainH2White>{MainPageTexts.txt15}</MainH2White>
                    <ParagraphWhite style={{textAlign:'left'}}>{MainPageTexts.txt16}</ParagraphWhite>
                </ThirdBlockContent>

            </ThirdBlock>

            <FourthBlock>
                <FourthBlockContent>
                    <MainH2Black>{MainPageTexts.txt17}</MainH2Black>
                    <FourthBlockItemWrap>

                        <FourthBlockItem>
                            {idea}
                            <ItemHeader>{MainPageTexts.txt18}</ItemHeader>
                            <ItemDescriptionCentered>{MainPageTexts.txt19}</ItemDescriptionCentered>
                        </FourthBlockItem>

                        <FourthBlockItem>
                            {tool}
                            <ItemHeader>{MainPageTexts.txt20}</ItemHeader>
                            <ItemDescriptionCentered>{MainPageTexts.txt21}</ItemDescriptionCentered>
                        </FourthBlockItem>

                        <FourthBlockItem>
                            {cloud}
                            <ItemHeader>{MainPageTexts.txt22}</ItemHeader>
                            <ItemDescriptionCentered>{MainPageTexts.txt23}</ItemDescriptionCentered>
                        </FourthBlockItem>

                    </FourthBlockItemWrap>
                </FourthBlockContent>
            </FourthBlock>

            <FifthBlock>
                <FifthBlockContent>
                    <MainH2Black style={{textAlign:'center'}}>{MainPageTexts.txt24}</MainH2Black>
                    <Carousel>
                        <CarouselBlock>
                            <h3>1</h3>
                        </CarouselBlock>

                        <CarouselBlock>
                            <h3>2</h3>
                        </CarouselBlock>

                        <CarouselBlock>
                            <h3>3</h3>
                        </CarouselBlock>

                        <CarouselBlock>
                            <h3>4</h3>
                        </CarouselBlock>
                    </Carousel>
                </FifthBlockContent>
            </FifthBlock>

            <SixthBlock>
                <SixthBlockMask>
                    <SixthBlockContent>
                        <MainH2White>{MainPageTexts.txt25}</MainH2White>
                        <ParagraphWhite style={{textAlign:'right', marginBottom:'40px'}}>{MainPageTexts.txt26}</ParagraphWhite>
                        <NavLink to='/students/management'><SimpleButton>{MainPageTexts.txt27}</SimpleButton></NavLink>
                    </SixthBlockContent>
                </SixthBlockMask>
            </SixthBlock>

            <SeventhBlock>
                <SeventhBlockContent>

                </SeventhBlockContent>
            </SeventhBlock>
        </>
    );
};