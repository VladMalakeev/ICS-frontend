import React, {useEffect} from "react";
import {AuthorBlock, DescriptionBlock, InfoText, NewsBlock, NewsImage, NewsTitle, NewsWrap} from "./singleNewsStyles";
import moment from 'moment'

export const SingleNewsComponent:React.FC<any> = ({data}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return(
        <NewsWrap>
            <NewsBlock>
                <NewsImage image={data.image}/>
                <NewsTitle>{data.title}</NewsTitle>
                <AuthorBlock>
                    <InfoText>Дата публикации: {moment(data.dateOfPublication).format('DD.MM.YYYY')}</InfoText>
                    <InfoText>Автор: {data.author}</InfoText>
                </AuthorBlock>
                <DescriptionBlock>
                    {data.description}
                </DescriptionBlock>
            </NewsBlock>
        </NewsWrap>
    )
};