import React, {useEffect, useState} from "react";
import {Pagination} from "antd";

type PaginatorComponentType = {
    total:number,
    limit:null,
    getPosts:(offset:number, limit:number) => void,
}

export const PaginatorComponent: React.FC<PaginatorComponentType> = (props) => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let location = parseInt(window.location.href.split('#')[1]);
        if(location){setCurrentPage(location)}
    });

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
        window.location.href = `#${page}`
    };
    return(
        <div style={{ display:'flex', justifyContent:'center', margin:'20px'}}>
        <Pagination
            current={currentPage}
            defaultCurrent={1}
            total={props.total}
            itemRender={itemRender}
            defaultPageSize={props.limit}
            onChange={onPaginatorChange}
        />
        </div>
    );
};