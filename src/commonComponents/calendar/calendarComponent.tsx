import React, {useEffect, useState} from "react";
import {
    ButtonsBlock,
    CalendarBigWhiteText,
    CalendarBlock, CalendarContent,
    CalendarModuleSelection,
    CalendarSelected, CalendarSmallWhiteText, CalendarToday,
    CalendarWrap,
    DateBlock, DayBlock,
    LinksBlock, SelectionsBlock, SelectWrap, WeekBlock
} from './calendarStyles';
import {Calendar} from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import moment from 'moment'
import 'moment/locale/ru'
import {SemesterEntityType} from "../../redux/reducers/semestersReducer";
import { Select } from 'antd';
import {SimpleBlueButton, SimpleBlueButtonSmall} from "../commomStyles";
import {NavLink} from "react-router-dom";

const { Option } = Select;
moment.locale('ru');



const min = moment().add(13,'days');
const max = moment().add(25,'days');

type CalendarComponentType = {
    data:SemesterEntityType
}

export const CalendarComponent:React.FC<CalendarComponentType> = ({data}) => {
    const [selectedDate, setSelectedDate] = useState(moment());
    const [modules, setModules] = useState([]);

    useEffect(() => {
        console.log(selectedDate)
      if(data.firstModule && modules.length === 0) setModules([data.firstModule, data.secondModule, data.session]);
    })

    const isEqualsDate = (d1, d2) => {
       return  (d1.format('DD-MM-YYYY') === d2.format('DD-MM-YYYY'));
    }

    const dateCellRender = (date) => {
        let result = null;

        // modules.forEach(module => {
        //     if(module){
        //         if((date >= module.weekOfModuleStart && date <= module.weekOfModuleEnd) && !isEqualsDate(date,selectedDate)) {
        //         result = <CalendarModuleSelection today={isEqualsDate(date, moment())}/>;
        //         }
        //     }else if(isEqualsDate(date,selectedDate)){
        //         result = <CalendarSelected today={isEqualsDate(date,moment())}/>
        //     }else if(isEqualsDate(date,moment())){
        //         result = <CalendarToday/>
        //     }
        // })

        if((date >= min && date <= max) && !isEqualsDate(date,selectedDate)) {
            result = <CalendarModuleSelection today={isEqualsDate(date, moment())}/>;
        }
        if(isEqualsDate(date,selectedDate)){
            result = <CalendarSelected today={isEqualsDate(date,moment())}/>
        }else if(isEqualsDate(date,moment())) {
            result = <CalendarToday/>
        }

        return result;
    }


    return (
        <CalendarWrap>
            <CalendarContent>
                <DateBlock>
                    <DayBlock>
                        <CalendarBigWhiteText>{moment().format('DD')}</CalendarBigWhiteText>
                        <CalendarSmallWhiteText>{moment().format('MMMM')}</CalendarSmallWhiteText>
                    </DayBlock>
                    <WeekBlock>
                        <CalendarBigWhiteText>1</CalendarBigWhiteText>
                        <CalendarSmallWhiteText>текущая неделя</CalendarSmallWhiteText>
                    </WeekBlock>
                </DateBlock>
                <CalendarBlock>
                    <Calendar
                        onChange={(date) => setSelectedDate(date)}
                        dateCellRender={dateCellRender}
                        fullscreen={false}
                        locale={locale}
                    />
                </CalendarBlock>
                <LinksBlock>
                    <SelectionsBlock>
                        <SelectWrap>
                            <Select
                                placeholder={'Курс'}
                            >
                                <Option value={1}>1й</Option>
                                <Option value={2}>2й</Option>
                                <Option value={3}>3й</Option>
                                <Option value={4}>4й</Option>
                                <Option value={5}>5й</Option>
                            </Select>
                        </SelectWrap>

                        <SelectWrap>
                            <Select
                                placeholder={'Специальность'}
                            >
                                <Option value={1}>АИ</Option>
                                <Option value={2}>АТ</Option>
                                <Option value={3}>АС</Option>
                                <Option value={4}>АМ</Option>
                                <Option value={5}>АК</Option>
                            </Select>
                        </SelectWrap>

                        <SelectWrap>
                            <Select
                                placeholder={'Группа'}
                            >
                                <Option value={1}>161</Option>
                                <Option value={2}>162</Option>
                                <Option value={3}>163</Option>
                                <Option value={4}>164</Option>
                                <Option value={5}>165</Option>
                            </Select>
                        </SelectWrap>
                    </SelectionsBlock>

                    <a href={'#'}>
                        <ButtonsBlock>
                            <SimpleBlueButtonSmall><span style={{fontSize:'14px'}}>Расписание занятий</span></SimpleBlueButtonSmall>
                        </ButtonsBlock>
                    </a>

                    <a href={'#'}>
                        <ButtonsBlock>
                            <SimpleBlueButtonSmall><span style={{fontSize:'14px'}}>Расписание экзаменов</span></SimpleBlueButtonSmall>
                        </ButtonsBlock>
                    </a>

                    <a href={'#'}>
                        <ButtonsBlock>
                            <SimpleBlueButtonSmall><span style={{fontSize:'14px'}}>Рейтинговые списки</span></SimpleBlueButtonSmall>
                        </ButtonsBlock>
                    </a>

                    <a href={'#'}>
                        <ButtonsBlock>
                            <SimpleBlueButtonSmall><span style={{fontSize:'14px'}}>Преподаватели</span></SimpleBlueButtonSmall>
                        </ButtonsBlock>
                    </a>


                    <ButtonsBlock onClick={() => window.location.href = "/map"}>
                        <SimpleBlueButtonSmall><span style={{fontSize:'14px'}}>Карта ОНПУ</span></SimpleBlueButtonSmall>
                    </ButtonsBlock>

                </LinksBlock>
            </CalendarContent>
        </CalendarWrap>
    )
}