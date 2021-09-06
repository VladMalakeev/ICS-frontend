import React, {FC} from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import { H2Black } from "../../../commonComponents/commomStyles";
import { MainPageTexts } from "../../../texts/mainPageTxt";
import { NewsListType, NewsType } from "../../news/news.types";
import { CarouselBlock, CarouselButtonWrap, CarouselWrap, FifthBlock, FifthBlockContent, NewsBlock, NewsBlockWrap, NewsTitle, NewsWrap } from "../MainPageStyles";

export const MainPageNewsBlock: FC<NewsListType> = ({news}) => {
   
    let slider: CarouselRef | null = null;

    const showNewsSlider = (newsList:Array<NewsType>) => {
        let news = [...newsList];
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
                            <NewsBlockWrap key={tmpArrayForSlide[k]?.id} className={'revealator-zoomout revealator-once'} to={`/applicants/news/${tmpArrayForSlide[k]?.id}`}>
                                <NewsBlock image={tmpArrayForSlide[k]?.image}>
                                    <NewsTitle>{tmpArrayForSlide[k]?.name}</NewsTitle>
                                </NewsBlock>
                            </NewsBlockWrap>
                        )
                    }
                }
                slideElements.push(<NewsWrap key={tmpArrayForSlide[j]?.id}>{slideRow}</NewsWrap>)
            }
            result.push(<CarouselBlock key={tmpArray[i]?.id}>{slideElements}</CarouselBlock>);
        }
        return result;
    };


    return (
            <FifthBlock>
                <FifthBlockContent>
                    <H2Black style={{textAlign: 'center'}}>{MainPageTexts.txt24}</H2Black>
                   <CarouselWrap>
                       <CarouselButtonWrap onClick={() => {slider?.prev()}}>
                           <LeftOutlined />
                       </CarouselButtonWrap>
                       <div style={{width:'90%'}} >
                        <Carousel dots={false} ref={ref => {slider = ref}}>
                            {showNewsSlider(news)}
                        </Carousel>
                       </div>
                       <CarouselButtonWrap>
                           <RightOutlined onClick={() => {slider?.next()}} />
                       </CarouselButtonWrap>
                   </CarouselWrap>
                </FifthBlockContent>
            </FifthBlock>
            
    )
}