import React from "react";
import {Modal} from "antd";
import {Paragraph} from "../commomStyles";

export const ServerError = (error:any) => {
    let code = null;
    if(error.response){
        code = error.response.status;
    }

    if(code === 400)return Error400();
    else if(code === 404) return Error404();
    else if(code >= 500) return Error50x();
    else return Error400();
};

export const Error400 = () => {
    return Modal.warning({
        content:<Paragraph>Произошла ошибка при запросе на сервер, попробуйте позже.</Paragraph>,
        centered:true
    });
};

export const Error404 = () => {
    return Modal.warning({
        content:<Paragraph>Запрашиваемая вами информация не найдена.</Paragraph>,
        centered:true
    });
};

export const Error50x = () => {
    return Modal.error({
        content:<Paragraph>Сервер не отвечает, попробуйте позже.</Paragraph>,
        centered:true
    });
};