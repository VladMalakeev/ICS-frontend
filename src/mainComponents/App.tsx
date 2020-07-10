import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainPage} from "./mainPage/MainPageComponent";
import {StudentNews} from "./students/news/StudentNewsComponent";
import {GraduatesNews} from "./graduates/news/GraduatesNews";
import {Lecturers} from "./lecturers/LecturersComponent";
import {ApplicantsNewsComponent} from "./applicants/news/ApplicantsNewsComponent";
import {Departments} from "./departments/DepartmentsComponent";
import {NotFound} from "../commonComponents/404";
import {Header} from "../commonComponents/header/Header";
import {BulletinBoard} from "./bulletinBoard/BulletinBoardComponent";
import './App.css'
import {Body} from '../commonComponents/commomStyles';
import {StudentManagement} from "./students/management/StudentNewsComponent";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Body>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/students' component={StudentNews}/>
                <Route exact path='/graduates' component={GraduatesNews}/>
                <Route exact path='/applicants' component={ApplicantsNewsComponent}/>
                <Route exact path='/lecturers' component={Lecturers}/>
                <Route exact path='/departments' component={Departments}/>
                <Route exact path='/bulletin-board' component={BulletinBoard}/>
                <Route exact path='/students/management' component={StudentManagement}/>
                <Route component={NotFound}/>
            </Switch>
          </Body>
      </BrowserRouter>
  );
}

export default App;
