import React from "react";
import {EmptyBlock, EmptyWrap, H2} from "./commomStyles";

export const EmptyComponent = () => {
    return (
        <EmptyWrap>
            <div><EmptyBlock description={false}/></div>
            <H2 style={{color:"#00000052",textAlign:'center'}}>Здесь еще нет данных!</H2>
        </EmptyWrap>
    )
};

export const EmptySinglePost = () => {
    return (
        <EmptyWrap>
            <div><EmptyBlock description={false}/></div>
            <H2 style={{color:"#00000052", textAlign:'center'}}>Такая запись не существует или была удалена!</H2>
        </EmptyWrap>
    )
};