import React from 'react';
import ListStaff from './ListStaff';
import CreateStaff from './CreateStaff';
import ViewStaff from './ViewStaff';
import StaffHeader from './StaffHeader';
import StaffFooter from './StaffFooter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function StaffPage() {
    return (
        <div>
        <Router>
              <StaffHeader />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStaff}></Route>
                          <Route path = "/staffs" component = {ListStaff}></Route>
                          <Route path = "/add-staff/:id" component = {CreateStaff}></Route>
                          <Route path = "/view-staff/:id" component = {ViewStaff}></Route>
                          {/* <Route path = "/update-staff/:id" component = {UpdateStaffComponent}></Route> */}
                    </Switch>
                </div>
              <StaffFooter />
        </Router>
    </div>
    )
}


export default StaffPage;
