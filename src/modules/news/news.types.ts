export type NewsType = {
    id:string,
    name:string,
    descriptionShort?:string,
    descriptionFull?:string,
    author?:string,
    image?:string
};

export type NewsListType = {
    news:Array<NewsType>
}