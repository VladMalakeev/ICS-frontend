import React, {useEffect, useState} from 'react'
import {
    BlockWrap,
    ListElementImageBackground, ListElementTextWrap,
    ListElementWrap, ListItemButtons, ListItemDate, ListItemDescription, ListItemHeader, ListItemImageWrap,
    ListWrap
} from "../../commonComponents/listPage/listPageStyles";
import {EmptyComponent} from "../../commonComponents/Empty";
import {ListElementSkeleton} from "../../commonComponents/listPage/listComponents";
import {Paragraph, SimpleBlueButton, SimpleBody} from "../../commonComponents/commomStyles";
import {NavLink} from "react-router-dom";
import {NewsTxt} from "../../texts/newsTxt";
import {Footer} from "../../commonComponents/footer/Footer";
import departments from "../../mockData/departmets"
import {DepartmentType} from "./department.types";



const IMAGES = process.env.REACT_APP_IMAGES;

export const DepartmentsComponent = () => {

    const [loading, setLoading] = useState<Boolean>(true);

    //TODO: fetch departments
   // const {data, loading, error} = useQuery<DepartmentsListType>(GET_DEPARTMENT_LIST);

    useEffect(() => {
        setTimeout(() => setLoading(false),1000)
    }, [])
const data:Array<DepartmentType> = departments

    return (
        <>
            <SimpleBody>
                 <BlockWrap>
                    {(data.length > 0 || loading) &&
                    <>
                        <ListWrap>
                            {!loading &&
                            <>
                                {/*{data.map((element:DepartmentType) => <SingleDepartment department={element}/>)}*/}
                            </>
                            }

                            {loading &&
                            <>
                                <ListElementSkeleton/>
                                <ListElementSkeleton/>
                                <ListElementSkeleton/>
                            </>
                            }

                        </ListWrap>
                    </>
                    }

                    {(data.length === 0 && !loading) &&
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

//
// const SingleDepartment = ({department}:{department:DepartmentType}) => {
//     return (
//         <DepartmentsListElementWrap>
//             <ListElementImageBackground>
//                 <ListItemImageWrap image={IMAGES + department.image}/>
//             </ListElementImageBackground>
//             <ListElementTextWrap>
//                 <div>
//                     <ListItemHeader>{department.name}</ListItemHeader>
//                     {/*<Paragraph style={{fontWeight:'bold'}}>Номер специальности: {department.specialty.specialtyNumberCode}</Paragraph>*/}
//                     <ListItemDescription dangerouslySetInnerHTML={{__html: department.description}}/>
//                 </div>
//                 <ListItemButtons>
//                     <Paragraph style={{fontWeight: 'bold'}}></Paragraph>
//                     <NavLink to={department.id}>
//                         <SimpleBlueButton> <span>{NewsTxt.txt4}</span></SimpleBlueButton>
//                     </NavLink>
//                 </ListItemButtons>
//             </ListElementTextWrap>
//         </DepartmentsListElementWrap>
//     )
// };