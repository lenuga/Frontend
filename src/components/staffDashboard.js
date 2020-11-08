import React, { Component } from "react";
import CreateStaffButton from "./staff/CreateStaffButton";
import Staffs from "./staff/Staffs";
// import { connect } from "react-redux";
// import { getStaffs } from "../actions/StaffActions";
// import PropTypes from "prop-types";


class staffDashboard extends Component {
  // componentWillMount() {
  //   this.props.getStaffs();
  // }
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Saff</h1>
              <br />
              <CreateStaffButton /><br/>
              <br />
             <Staffs/>
             <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default staffDashboard;