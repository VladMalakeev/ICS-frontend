import React from "react";
import {Pagination} from "antd";

type PaginatorComponentType = {
    totalAmountOfNews:number,
    limit:null,
    getPosts:(offset:number, limit:number) => void
}

export const PaginatorComponent = (props) => {
    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Назад</a>;
        }
        if (type === 'next') {
            return <a>Далее</a>;
        }
        return originalElement;
    };

    const onPaginatorChange = (page, pageSize) => {
        props.getPosts((page-1)*pageSize, pageSize);
        window.scrollTo(0, 0);
    };
    return(
        <div style={{ display:'flex', justifyContent:'center', margin:'20px'}}>
        <Pagination
            defaultCurrent={1}
            total={props.total}
            itemRender={itemRender}
            defaultPageSize={props.limit}
            onChange={onPaginatorChange}
        />
        </div>
    );
};