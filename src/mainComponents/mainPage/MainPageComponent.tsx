import React, {useEffect} from 'react'
import {
    AbilityItemContent,
    ItemHeader,
    AbilityItemNumber,
    AbilityItemTextWrap,
    AbilityItemWrap,
    AbilityItemWrapReverse,
    FirstBigMask,
    FirstContentBlock,
    FirstBlock,
    FirstLittleMask,
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
    FifthBlock,
    CarouselBlock,
    FifthBlockContent,
    SixthBlock,
    SixthBlockMask,
    SixthBlockContent, NewsBlock, NewsTitle, NewsWrap, NewsBlockWrap
} from "./MainPageStyles";
import {MainPageTexts} from '../../texts/mainPageTxt'
import {H1, H2Black, H2White, Paragraph, ParagraphCentered, SimpleButton} from "../../commonComponents/commomStyles";
import {NavLink} from "react-router-dom";
import idea from '../../svg/idea'
import cloud from '../../svg/cloud'
import tool from '../../svg/edit-tool'
import {Carousel} from "antd";
import {Footer} from "../../commonComponents/footer/Footer";
import {NewsPropsType} from "./MainPageContainer";

export const MainPage: React.FC<NewsPropsType> = (props) => {
    useEffect(() => {
        props.getApplicantsNews(0,18)
    },[]);

    const showNewsSlider = (newsList) => {
        let news = [].concat(newsList);
        let columns = 0;
        let rows = 2;
        let newsInSlide = 0;
        let totalSlidesCount = 0;
        let result = [];
        if(window.innerWidth > 1292){
            columns = 3;
            newsInSlide = 6;
        }else {
            columns = 2;
            newsInSlide = 4;
        }
        totalSlidesCount = Math.ceil(news.length/newsInSlide);
        for(let i = 0; i < totalSlidesCount; i++){
            let tmpArray = news.splice(0, newsInSlide);
            let slideElements = [];
            for (let j = 0; j < rows; j++){
                let tmpArrayForSlide = tmpArray.splice(0, columns);
                let slideRow = [];
                for(let k = 0; k < columns; k++){
                    if(tmpArrayForSlide[k]) {
                        slideRow.push(
                            <NewsBlockWrap to={`/applicants/news/${tmpArrayForSlide[k].id}`}>
                                <NewsBlock image={tmpArrayForSlide[k].image}>
                                    <NewsTitle>{tmpArrayForSlide[k].title}</NewsTitle>
                                </NewsBlock>
                            </NewsBlockWrap>
                        )
                    }
                }
                slideElements.push(<NewsWrap>{slideRow}</NewsWrap>)
            }
            result.push(<CarouselBlock>{slideElements}</CarouselBlock>);
        }
        return result;
    };

    return (
        <>
            <FirstBlock>

                <FirstBigMask/>
                <FirstLittleMask/>

                <FirstContentBlock>
                    <H1>{MainPageTexts.txt1}</H1>
                    <ParagraphWhite style={{marginBottom:'40px'}}>{MainPageTexts.txt2}</ParagraphWhite>
                    <NavLink to='/departments'><SimpleButton>{MainPageTexts.txt3}</SimpleButton></NavLink>
                </FirstContentBlock>

            </FirstBlock>

            <SecondBlock>

                <SecondBlockContent>
                    <H2Black>{MainPageTexts.txt4}</H2Black>

                    <AbilityItemWrap>
                        <AbilityItemContent>
                            <AbilityItemNumber>1</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt5}</ItemHeader>
                                <Paragraph>{MainPageTexts.txt6}</Paragraph>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrap>

                    <AbilityItemWrapReverse>
                        <AbilityItemContent>
                            <AbilityItemNumber>2</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt7}</ItemHeader>
                                <Paragraph>{MainPageTexts.txt8}</Paragraph>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrapReverse>


                    <AbilityItemWrap>
                        <AbilityItemContent>
                            <AbilityItemNumber>3</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt9}</ItemHeader>
                                <Paragraph>{MainPageTexts.txt10}</Paragraph>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrap>

                    <AbilityItemWrapReverse>
                        <AbilityItemContent>
                            <AbilityItemNumber>4</AbilityItemNumber>
                            <AbilityItemTextWrap>
                                <ItemHeader>{MainPageTexts.txt11}</ItemHeader>
                                <Paragraph>{MainPageTexts.txt12}</Paragraph>
                            </AbilityItemTextWrap>
                        </AbilityItemContent>
                    </AbilityItemWrapReverse>

                    <AbilityItemWrap>
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

            <ThirdBlock>

                <SecondLittleMask/>
                <SecondBigMask/>

                <ThirdBlockContent>
                    <H2White>{MainPageTexts.txt15}</H2White>
                    <ParagraphWhite style={{textAlign:'left'}}>{MainPageTexts.txt16}</ParagraphWhite>
                </ThirdBlockContent>

            </ThirdBlock>

            <FourthBlock>
                <FourthBlockContent>
                    <H2Black>{MainPageTexts.txt17}</H2Black>
                    <FourthBlockItemWrap>

                        <FourthBlockItem>
                            {idea}
                            <ItemHeader>{MainPageTexts.txt18}</ItemHeader>
                            <ParagraphCentered>{MainPageTexts.txt19}</ParagraphCentered>
                        </FourthBlockItem>

                        <FourthBlockItem>
                            {tool}
                            <ItemHeader>{MainPageTexts.txt20}</ItemHeader>
                            <ParagraphCentered>{MainPageTexts.txt21}</ParagraphCentered>
                        </FourthBlockItem>

                        <FourthBlockItem>
                            {cloud}
                            <ItemHeader>{MainPageTexts.txt22}</ItemHeader>
                            <ParagraphCentered>{MainPageTexts.txt23}</ParagraphCentered>
                        </FourthBlockItem>

                    </FourthBlockItemWrap>
                </FourthBlockContent>
            </FourthBlock>

            {props.news.length > 0 &&
            <FifthBlock>
                <FifthBlockContent>
                    <H2Black style={{textAlign: 'center'}}>{MainPageTexts.txt24}</H2Black>
                    <Carousel>
                        {showNewsSlider(props.news)}
                    </Carousel>
                </FifthBlockContent>
            </FifthBlock>
            }

            <SixthBlock>
                <SixthBlockMask>
                    <SixthBlockContent>
                        <H2White>{MainPageTexts.txt25}</H2White>
                        <ParagraphWhite style={{textAlign:'right', marginBottom:'40px'}}>{MainPageTexts.txt26}</ParagraphWhite>
                        <NavLink to='/students/management'><SimpleButton>{MainPageTexts.txt27}</SimpleButton></NavLink>
                    </SixthBlockContent>
                </SixthBlockMask>
            </SixthBlock>

            <Footer/>
        </>
    );
};