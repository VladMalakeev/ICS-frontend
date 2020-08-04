import axios from 'axios'
import {NewsEntityType} from "../redux/reducers/newsReducer";
import {DepartmentsListType} from "../redux/reducers/departmentsReducer";
import {DepartmentType} from "../redux/reducers/singleDepartmentsReducer";
import {SemesterEntityType} from "../redux/reducers/semestersReducer";

export const DOMAIN = process.env.REACT_APP_DOMAIN;
export const IMAGES = DOMAIN+'api/Images/';
//export const IMAGES = '';

const instance = axios.create({
    baseURL: DOMAIN,
});

type NewsApiType = {
    getStudentsNews: (offset:number, limit:number) => any,
    getGraduatesNews: (offset:number, limit:number) => any,
    getApplicantsNews: (offset:number, limit:number) => any,
    getNewsById: (id:number, publics:string) => any
}

type NewsListType = {
    limit:number
    amountOfNews:number
    totalAmountOfNews:number,
    news:Array<NewsEntityType>
}

export const NewsApi:NewsApiType = {
    getStudentsNews(offset:number, limit:number){
        return instance.get(
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
    getNewsById(id:number, publics:string){
        return instance.get<NewsEntityType>(
            `api/News/${id}`,
            {params:{publics}}).then(res => res.data)
    },
};

type DepartmentsApiType = {
    getDepartments: () => any,
    getDepartmentsById: (id:number) => any
}

export const DepartmentsApi:DepartmentsApiType = {
    getDepartments(){
        return instance.get<Array<DepartmentsListType>>('api/Departaments').then(res => res.data)
    },
    getDepartmentsById(id){
        return instance.get<DepartmentType>(`api/Departaments/${id}`).then(res => res.data)
    },
};

type SemestersApiType = {
    getSemesterData: () => any
}

export const SemestersApi:SemestersApiType = {
    getSemesterData(){
        return instance.get(
            'api/Semesters/GetSemesterData'
        ).then(res => res.data)
    }
};