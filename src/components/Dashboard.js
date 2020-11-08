import React, { Component } from "react";
import CreateLecturerButton from "./lecturer/CreateLecturerButton";
import Leturers from "./lecturer/Leturers";
// import { connect } from "react-redux";
// import { getLecturers } from "../actions/LecturerActions";
// import PropTypes from "prop-types";


class Dashboard extends Component {
  // componentWillMount() {
  //   this.props.getLecturers();
  // }
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Lecturer</h1>
              <br />
              <CreateLecturerButton /><br/>
              <br />
             <Leturers/>
             <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard;