import React, {useEffect} from 'react'
import {
    SinglePageBlock,
    SinglePageWrap, SinglePostAuthorBlock, SinglePostDescriptionBlock, SinglePostImage,
    SinglePostImageWrap, SinglePostInfoText, SinglePostTitle
} from "../../../commonComponents/singlePage/singlePageStyles";
import {DepartmentPropsType} from "./singleDepartmentContainer";
import {NewsImage, NewsWrap} from "../../../commonComponents/news/single/singleNewsStyles";
import {Skeleton} from "antd";
import {EmptySinglePost} from "../../../commonComponents/Empty";
import {IMAGES} from "../../../api/DataAccessLayer";
import {ListItemHeader} from "../../../commonComponents/listPage/listPageStyles";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {Footer} from "../../../commonComponents/footer/Footer";


export const SingleDepartmentComponent:React.FC<DepartmentPropsType> = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.getDepartmentById(props.match.params.id);
    },[]);

    return (
        <>
        <SimpleBody>
        <SinglePageWrap>
            {(props.isExist && !props.preloader) &&
                <SinglePageBlock>
                    <SinglePostImageWrap>
                        <SinglePostImage src={IMAGES+props.department.image}/>
                    </SinglePostImageWrap>

                    <SinglePostTitle>{props.department.specialty.name} ({props.department.specialty.specialtyCode})</SinglePostTitle>
                    <SinglePostDescriptionBlock dangerouslySetInnerHTML={{ __html: props.department.description }}/>
                    <SinglePostDescriptionBlock dangerouslySetInnerHTML={{ __html: props.department.basicDiscipline }}/>
                    <SinglePostDescriptionBlock dangerouslySetInnerHTML={{ __html: props.department.recommendedKnowledge }}/>
                    <SinglePostAuthorBlock>
                        <SinglePostInfoText>Заведующий кафедры: {props.department.headOfDepartment}</SinglePostInfoText>
                        <SinglePostInfoText>email: {props.department.email}</SinglePostInfoText>
                    </SinglePostAuthorBlock>
                </SinglePageBlock>
            }
            {(!props.isExist && props.preloader) && <EmptyDepartment/>}
            {props.isExist === false && <EmptySinglePost/>}
        </SinglePageWrap>
        </SimpleBody>
            <Footer/>
        </>
    );
};

const EmptyDepartment = () => {
    return (
        <SinglePageBlock>
            <NewsImage style={{background:'#ababab47'}}/>
            <Skeleton active />
            <Skeleton active />
        </SinglePageBlock>
    )
};