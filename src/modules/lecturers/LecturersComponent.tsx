import React from 'react'
import {SimpleBody} from "../../commonComponents/commomStyles";
import {Footer} from "../../commonComponents/footer/Footer";

import {lecturersMock} from "../../mockData/lecturers";
import {
    LecturerInfoParagraph,
    LecturerItemContent,
    LecturerListItemImage,
    LecturerItemInfo, LecturerItemTitle,
    LecturerListItemWrap,
    LecturersListWrap
} from "./LecturersStyles";
import {LecturerType} from "./lecturers.types";
import {Link} from "react-router-dom";

export const Lecturers = () => {
    // const {data, loading, error} = useQuery<LecturersListType>(GET_LECTURERS_LIST);
    const data:Array<LecturerType> = lecturersMock;
    return (
        <>
            <SimpleBody>
                <LecturersListWrap>
                    {data.map((lecturer:LecturerType) => {
                        return <LecturerListItemWrap>
                            <LecturerListItemImage src={lecturer.image}/>
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
                        </LecturerListItemWrap>
                    })}
                </LecturersListWrap>
            </SimpleBody>
            <Footer/>
        </>
    );
};