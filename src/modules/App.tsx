import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Lecturers} from "./lecturers/LecturersComponent";
import {NotFound} from "../commonComponents/404/404";
import {Header} from "../commonComponents/header/Header";
import {BulletinBoard} from "./bulletinBoard/BulletinBoardComponent";
import {Map} from "./map/MapComponent"
import './App.css'
import {Body} from '../commonComponents/commomStyles';
import {MainPageComponent} from "./main_page/MainPageComponent";
import {SingleStudentsNews} from "./news/singleNews/SingleStudentsNews";
import {DepartmentsListComponent} from "./departments/DepartmentsListComponent";
import {SingleDepartmentComponent} from "./departments/singleDepartment/SingleDepartmentComponent";
import {hot} from "react-hot-loader/root";
import SingleLecturerComponent from "./lecturers/singleLecturer/SingleLecturerComponent";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Body>
            <Switch>
                <Route exact path='/' component={MainPageComponent}/>
                {/*<Route path='/students/news/:id' component={SingleStudentsNewsContainer}/>*/}
                <Route exact path='/lecturers' component={Lecturers}/>
                <Route exact path='/lecturer/:id' component={SingleLecturerComponent}/>
                <Route exact path='/departments' component={DepartmentsListComponent}/>
                <Route exact path='/departments/:id' component={SingleDepartmentComponent}/>
                {/*<Route exact path='/bulletin-board' component={BulletinBoard}/>*/}
                {/*<Route exact path='/students/management' component={StudentManagement}/>*/}
                <Route exact path='/map' component={Map}/>
                <Route component={NotFound}/>
            </Switch>
          </Body>
      </BrowserRouter>
  );
}

export default hot(App);
