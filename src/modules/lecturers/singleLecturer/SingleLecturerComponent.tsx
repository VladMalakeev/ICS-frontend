import React from "react";
import {SimpleBody} from "../../../commonComponents/commomStyles";
import {Footer} from "../../../commonComponents/footer/Footer";
import {
    LecturerInfoParagraph,
    LecturerItemContent,
    LecturerItemInfo,
    LecturerItemTitle,
    LecturerSinglePageImage,
    LecturerWrap,
    LecturerContentWrap, LecturersDataWrap
} from "../LecturersStyles";
import {Link} from "react-router-dom";
import {LecturerType} from "../lecturers.types";
import {lecturersMock} from "../../../mockData/lecturers";

const SingleLecturerComponent = ({match}:any) => {
    // const {data, loading, error} = useQuery<LecturersListType>(GET_LECTURER_BY_ID, {variables:{id:match.params.id}});
    const lecturer:LecturerType = lecturersMock[match.params.id - 1];
    return (
        <>
            <SimpleBody>
                <LecturersDataWrap>
                    <LecturerWrap>
                        <LecturerContentWrap>
                            <LecturerSinglePageImage src={lecturer.image}/>
                            <LecturerItemContent>
                                <LecturerItemTitle>
                                    <Link to={`/lecturer/${lecturer.id}`}>{lecturer.lastName} {lecturer.firstName} {lecturer.middleName}</Link>
                                </LecturerItemTitle>
                                <LecturerItemInfo>
                                    <LecturerInfoParagraph>
                                        <Link to={`/departments/${lecturer.department.id}`}>{lecturer.department.name}</Link>
                                    </LecturerInfoParagraph>
                                    <LecturerInfoParagraph>{lecturer.position.name}</LecturerInfoParagraph>
                                    <LecturerInfoParagraph><b>Телефон:</b> {lecturer.phoneNumber}</LecturerInfoParagraph>
                                    <LecturerInfoParagraph><b>E-mail:</b> {lecturer.email}</LecturerInfoParagraph>
                                </LecturerItemInfo>
                            </LecturerItemContent>
                        </LecturerContentWrap>

                        <LecturerContentWrap>
                            <LecturerItemInfo>Консультации...</LecturerItemInfo>
                        </LecturerContentWrap>
                    </LecturerWrap>
                </LecturersDataWrap>
            </SimpleBody>
            <Footer/>
        </>
    )
}

export default SingleLecturerComponent;