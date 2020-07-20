import {ListElementImageBackground, ListElementTextWrap, ListElementWrap} from "./listPageStyles";
import {Skeleton} from "antd";
import {SingleNewsTextWrap} from "../news/newsStyles";
import React from "react";

export const ListElementSkeleton = () => {
    return(
        <ListElementWrap>
            <ListElementImageBackground/>
            <ListElementTextWrap>
                <Skeleton active />
            </ListElementTextWrap>
        </ListElementWrap>
    )
};