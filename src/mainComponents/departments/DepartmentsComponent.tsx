import React, {useEffect} from 'react'
import {DepartmentsPropsType} from "./DepartmentsContainer";
import {
    BlockWrap,
    ListElementImageBackground, ListElementTextWrap,
    ListElementWrap, ListItemButtons, ListItemDate, ListItemDescription, ListItemHeader, ListItemImageWrap,
    ListWrap
} from "../../commonComponents/listPage/listPageStyles";
import {EmptyComponent} from "../../commonComponents/Empty";
import {ListElementSkeleton} from "../../commonComponents/listPage/listComponents";
import {DepartmentsListType} from "../../redux/reducers/departmentsReducer";
import {IMAGES} from "../../api/DataAccessLayer";
import {Paragraph, SimpleBlueButton, SimpleBody} from "../../commonComponents/commomStyles";
import {NavLink} from "react-router-dom";
import {NewsTxt} from "../../texts/newsTxt";
import {Footer} from "../../commonComponents/footer/Footer";
import {DepartmentsListElementWrap} from "./DetartmentsStyles";

export const DepartmentsComponent: React.FC<DepartmentsPropsType> = (props) => {
    useEffect(() => {
        props.getDepartments();
    },[]);

    return (
        <>
            <SimpleBody>
                <BlockWrap>
                    {(props.departments.length > 0 || props.preloader) &&
                    <>
                        <ListWrap>
                            {!props.preloader &&
                            <>
                                {props.departments.map(element => <SingleDepartment post={element}
                                                                                    path={props.match.path}/>)}
                            </>
                            }

                            {props.preloader &&
                            <>
                                <ListElementSkeleton/>
                                <ListElementSkeleton/>
                                <ListElementSkeleton/>
                            </>
                            }

                        </ListWrap>
                    </>
                    }

                    {(props.departments.length === 0 && !props.preloader) &&
                    <>
                        <EmptyComponent/>
                    </>
                    }
                </BlockWrap>
            </SimpleBody>
            <Footer/>
        </>
    );
};


type SingleDepartmentType = {
    post: DepartmentsListType,
    path: string
}

const SingleDepartment:React.FC<SingleDepartmentType> = ({post, path}) => {
    return (
        <DepartmentsListElementWrap>
            <ListElementImageBackground>
                <ListItemImageWrap image={IMAGES + post.image}/>
            </ListElementImageBackground>
            <ListElementTextWrap>
                <div>
                    <ListItemHeader>{post.specialty.name} ({post.specialty.specialtyCode})</ListItemHeader>
                    <Paragraph style={{fontWeight:'bold'}}>Номер специальности: {post.specialty.specialtyNumberCode}</Paragraph>
                    <ListItemDescription dangerouslySetInnerHTML={{__html: post.description}}/>
                </div>
                <ListItemButtons>
                    <Paragraph style={{fontWeight: 'bold'}}></Paragraph>
                    <NavLink to={`${path}/${post.id}`}>
                        <SimpleBlueButton> <span>{NewsTxt.txt4}</span></SimpleBlueButton>
                    </NavLink>
                </ListItemButtons>
            </ListElementTextWrap>
        </DepartmentsListElementWrap>
    )
};