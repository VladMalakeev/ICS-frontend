import React, {useEffect} from 'react'
import {
    SinglePageBlock,
    SinglePageWrap, SinglePostAuthorBlock, SinglePostDescriptionBlock, SinglePostImage,
    SinglePostImageWrap, SinglePostInfoText, SinglePostTitle
} from "../../../commonComponents/singlePage/singlePageStyles";
import {NewsImage, NewsWrap} from "../../../commonComponents/news/single/singleNewsStyles";
import {Skeleton} from "antd";
import {EmptySinglePost} from "../../../commonComponents/Empty";
import {ListItemHeader} from "../../../commonComponents/listPage/listPageStyles";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {Footer} from "../../../commonComponents/footer/Footer";
import {useQuery} from "@apollo/client";
import {GET_DEPARTMENT} from "../department.gql";
import {DepartmentType, SingleDepartmentComponentType} from "../department.types";
import EmptyImage from "../../../images/image.png"

//TODO:remove mock
import departments from "../../../mockData/departmets";
import {fullImagePath} from "../../../utils/functions";


export const SingleDepartmentComponent = ({match}:SingleDepartmentComponentType) => {
    // const {data, loading, error} = useQuery<DepartmentType>(GET_DEPARTMENT, {variables:{id:id}});
    //TODO:remove mock
    const data: DepartmentType | undefined = departments.find(department => department.id === match.params.id);
    const loading = false;
    const error = false;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
        <SimpleBody>
            {!loading && data &&
                <SinglePageWrap>
                    <SinglePageBlock>
                        <SinglePostImageWrap>
                            <SinglePostImage src={data.image ? fullImagePath(data.image): EmptyImage}/>
                        </SinglePostImageWrap>

                        <SinglePostTitle>{data.name}</SinglePostTitle>
                        <SinglePostDescriptionBlock dangerouslySetInnerHTML={{ __html: data.description }}/>
                    </SinglePageBlock>
                </SinglePageWrap>
            }
            {loading && <EmptyDepartment/>}
            {!data && <EmptySinglePost/>}
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