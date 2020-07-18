import axios from 'axios'
import {NewsEntityType} from "../redux/reducers/newsReducer";

export const DOMAIN = process.env.REACT_APP_DOMAIN;
export const IMAGES = DOMAIN+'/api/Images/';

const instance = axios.create({
    baseURL: DOMAIN,
});

type NewsApiType = {
    getStudentsNews: (offset:number, limit:number) => any,
    getGraduatesNews: (offset:number, limit:number) => any,
    getApplicantsNews: (offset:number, limit:number) => any,
    getNewsById: (id:number, publics:number) => any
}

type NewsListType = {
    limit:number
    amountOfNews:number
    totalAmountOfNews:number,
    news:Array<NewsEntityType>
}

export const NewsApi:NewsApiType = {
    getStudentsNews(offset:number, limit:number){
        return instance.get<NewsListType>(
            'api/News/getStudentsNews',
            {params:{offset,limit}}).then(res => res.data)
    },
    getGraduatesNews(offset:number, limit:number){
        return instance.get<NewsListType>(
            'api/News/getGraduatesNews',
            {params:{offset,limit}}).then(res => res.data)
    },
    getApplicantsNews(offset:number, limit:number){
        return instance.get<NewsListType>(
            'api/News/getApplicantsNews',
            {params:{offset,limit}}).then(res => res.data)
    },
    getNewsById(id:number, publics:number){
        return instance.get<NewsEntityType>(
            `api/News/${id}`,
            {params:{publics}}).then(res => res.data)
    },
};

type DepartmentsApiType = {
    getDepartments: (offset:number, limit:number) => any,
    getDepartmentsById: (id:number) => any
}

export const DepartmentsApi:DepartmentsApiType = {
    getDepartments(offset:number, limit:number){return instance.get('api/Departments', {params:{offset, limit}})},
    getDepartmentsById(id){return instance.get(`api/Departments/${id}`)},
};