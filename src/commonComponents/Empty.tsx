import React from "react";
import {EmptyBlock, EmptyWrap, H2} from "./commomStyles";

export const EmptyComponent = () => {
    return (
        <EmptyWrap>
            <div><EmptyBlock description={false}/></div>
            <H2 style={{color:"#00000052"}}>Здесь еще нет данных!</H2>
        </EmptyWrap>
    )
};