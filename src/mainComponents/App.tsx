import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Lecturers} from "./lecturers/LecturersComponent";
import {NotFound} from "../commonComponents/404/404";
import {Header} from "../commonComponents/header/Header";
import {BulletinBoard} from "./bulletinBoard/BulletinBoardComponent";
import {Map} from "./map/MapComponent"
import './App.css'
import {Body} from '../commonComponents/commomStyles';
import {StudentManagement} from "./students/management/StudentNewsComponent";
import {ApplicantsNewsContainer} from "./applicants/news/ApplicantsNewsContainer";
import {MainPageContainer} from "./mainPage/MainPageContainer";
import {StudentsNewsContainer} from "./students/news/StudentNewsContainer";
import {GraduatesNewsContainer} from "./graduates/news/GraduatesNewsContainer";
import {SingleApplicantsNewsContainer} from "./applicants/singleNews/SingleApplicantsNewsContainer";
import {SingleGraduatesNewsContainer} from "./graduates/singleNews/SingleGraduatesNewsContainer";
import {SingleStudentsNewsContainer} from "./students/singleNews/SingleStudentsNewsContainer";
import {DepartmentsContainer} from "./departments/DepartmentsContainer";
import {SingleDepartmentContainer} from "./departments/singleDepartment/singleDepartmentContainer";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Body>
            <Switch>
                <Route exact path='/' component={MainPageContainer}/>
                <Route exact path='/students/news' component={StudentsNewsContainer}/>
                <Route path='/students/news/:id' component={SingleStudentsNewsContainer}/>
                <Route exact path='/graduates/news' component={GraduatesNewsContainer}/>
                <Route path='/graduates/news/:id' component={SingleGraduatesNewsContainer}/>
                <Route exact path='/applicants/news' component={ApplicantsNewsContainer}/>
                <Route path='/applicants/news/:id' component={SingleApplicantsNewsContainer}/>
                <Route exact path='/lecturers' component={Lecturers}/>
                <Route exact path='/departments' component={DepartmentsContainer}/>
                <Route exact path='/departments/:id' component={SingleDepartmentContainer}/>
                <Route exact path='/bulletin-board' component={BulletinBoard}/>
                <Route exact path='/students/management' component={StudentManagement}/>
                <Route exact path='/map' component={Map}/>
                <Route component={NotFound}/>
            </Switch>
          </Body>
      </BrowserRouter>
  );
}

export default App;
