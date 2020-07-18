import React, {useEffect, useRef, useState} from 'react'
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
    SixthBlockContent,
    NewsBlock,
    NewsTitle,
    NewsWrap,
    NewsBlockWrap,
    CarouselWrap,
    CarouselButtonWrap,
    MainPageTitle,
    MainPageDescription, IconWrap, MainManagementTitle, MainAvailabilityDescription, MainManagementDescription
} from "./MainPageStyles";
import {MainPageTexts} from '../../texts/mainPageTxt'
import {H2Black, H2White, Paragraph, ParagraphCentered, SimpleButton} from "../../commonComponents/commomStyles";
import {NavLink} from "react-router-dom";
import idea from '../../svg/idea'
import cloud from '../../svg/cloud'
import tool from '../../svg/edit-tool'
import {Carousel} from "antd";
import {Footer} from "../../commonComponents/footer/Footer";
import {NewsPropsType} from "./MainPageContainer";
import {LeftOutlined, RightOutlined} from "@ant-design/icons/lib";

export const MainPage: React.FC<NewsPropsType> = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        props.getApplicantsNews(0,18);

        window.addEventListener('resize', () => setWidth(window.innerWidth))
    },[]);

    let slider:any = useRef();

    const showNewsSlider = (newsList) => {
        let news = [].concat(newsList);
        let columns = 0;
        let rows = 2;
        let newsInSlide = 0;
        let totalSlidesCount = 0;
        let result = [];
        if(window.innerWidth > 1000){
            columns = 3;
            newsInSlide = 6;
        }else if(window.innerWidth > 700) {
            columns = 2;
            newsInSlide = 4;
        }else{
            columns = 1;
            newsInSlide = 2;
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
                            <NewsBlockWrap className={'revealator-zoomout revealator-once'} to={`/applicants/news/${tmpArrayForSlide[k].id}`}>
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
                    <MainPageTitle>{MainPageTexts.txt1}</MainPageTitle>
                    <MainPageDescription>{MainPageTexts.txt2}</MainPageDescription>
                    <NavLink to='/departments'><SimpleButton>{MainPageTexts.txt3}</SimpleButton></NavLink>
                </FirstContentBlock>

            </FirstBlock>

            <SecondBlock>

                <SecondBlockContent>
                    <H2Black style={{textAlign:'center'}}>{MainPageTexts.txt4}</H2Black>

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

            <ThirdBlock>

                <SecondLittleMask/>
                <SecondBigMask/>

                <ThirdBlockContent className={'revealator-slideleft revealator-once'}>
                    <H2White>{MainPageTexts.txt15}</H2White>
                    <MainAvailabilityDescription style={{textAlign:'left'}}>{MainPageTexts.txt16}</MainAvailabilityDescription>
                </ThirdBlockContent>

            </ThirdBlock>

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

            {props.news.length > 0 &&
            <FifthBlock>
                <FifthBlockContent>
                    <H2Black style={{textAlign: 'center'}}>{MainPageTexts.txt24}</H2Black>
                   <CarouselWrap>
                       <CarouselButtonWrap onClick={() => {slider.prev()}}>
                           <LeftOutlined />
                       </CarouselButtonWrap>
                       <div style={{width:'90%'}} >
                        <Carousel dots={false} ref={ref => {slider = ref}}>
                            {showNewsSlider(props.news)}
                        </Carousel>
                       </div>
                       <CarouselButtonWrap>
                           <RightOutlined onClick={() => {slider.next()}} />
                       </CarouselButtonWrap>
                   </CarouselWrap>
                </FifthBlockContent>
            </FifthBlock>
            }

            <SixthBlock>
                <SixthBlockMask>
                    <SixthBlockContent className={'revealator-slideright revealator-once'}>
                        <MainManagementTitle>{MainPageTexts.txt25}</MainManagementTitle>
                        <MainManagementDescription>{MainPageTexts.txt26}</MainManagementDescription>
                        <NavLink to='/students/management'><SimpleButton>{MainPageTexts.txt27}</SimpleButton></NavLink>
                    </SixthBlockContent>
                </SixthBlockMask>
            </SixthBlock>

            <Footer/>
        </>
    );
};