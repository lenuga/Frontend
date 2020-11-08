import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Medicalform from "./components/form/Medicalform";
//import NotFoundPage from './components/pages/NotFoundPage';
import Footer from "./components/pages/Footer";
import { Provider } from "react-redux";
import store from "./store";
import AddLecturer from "./components/lecturer/AddLecturer";
import AddHod from "./components/hod/AddHod";
import AddStudent from "./components/student/AddStudent";
import AddStaff from "./components/staff/AddStaff";
import AddDean from "./components/dean/AddDean";
import Dashboard from "./components/Dashboard";
import hodDashboard from "./components/hodDashboard";
import studentDashboard from "./components/studentDashboard";
import staffDashboard from "./components/staffDashboard";
import deanDashboard from "./components/deanDashboard";
import Header from "./components/layout/Header";
import UpdateLecturer from './components/lecturer/UpdateLecturer';
import UpdateHod from './components/hod/UpdateHod';
import UpdateStaff from './components/staff/UpdateStaff';
import UpdateStudent from './components/student/UpdateStudent';
import UpdateDean from './components/dean/UpdateDean';
import jwt_decode from "jwt-decode";
import setJWTToken from './securityUtilis/setJWTToken';        
import Landing from "./components/layout/Landing";
import Register from "./components/layout/Register"; 
import {  SET_CURRENT_LOGIN } from "./actions/types";
import {logout} from "./actions/securityActions";

const jwtToken = localStorage.jwtToken;

if(jwtToken){
  setJWTToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_LOGIN,
    payload: decoded_jwtToken
});

const currentTime = Date.now() / 1000;
if(decoded_jwtToken.exp < currentTime){
  //handel logout
   store.dispatch(logout())   //redux store
  window.location.href = "/";  //vanila java scripts 
 }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            

{/* Public route */}
<Route exact path="/" component={Landing}/>


{/*  */}
            <Route exact path="/header" component={Header} />
            <Route exact path="/register" component={Register}/>
            <Route path="/hoddashboard" component={hodDashboard}/>
            <Route excat path="/dashboard" component={Dashboard} />
            <Route excat path="/studentdashboard" component={studentDashboard} />
            <Route excat path="/staffdashboard" component={staffDashboard} />
            <Route excat path="/deandashboard" component={deanDashboard} />
            <Route exact path="/addlecturer" component={AddLecturer} />
            <Route  path="/addhod" component={AddHod} />
            <Route  path="/adddean" component={AddDean} />
            <Route  path="/addstaff" component={AddStaff} />
            <Route path="/addstudent" component={AddStudent} />
            <Route path="/medicalform" component={Medicalform} />
            {/* <Route path="/adminmain" component={AdminMain} /> */}
            <Route exact path="/updateLecturer/:id" component={UpdateLecturer} />
            <Route exact path="/updateHod/:id" component={UpdateHod} />
            <Route exact path="/updatestudent/:id" component={UpdateStudent} />
            <Route exact path="/updatestaff/:id" component={UpdateStaff} />
            <Route exact path="/updatedean/:id" component={UpdateDean} />
          </div>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;
