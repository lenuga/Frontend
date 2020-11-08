import React, { Component } from "react";
import CreateStudentButton from "./student/CreateStudentButton";
import Students from "./student/Students";



class studentDashboard extends Component {
  
  render() {
    return (
      <div className="students">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Student</h1>
              <br />
              <CreateStudentButton /><br/>
              <br />
             <Students/>
             <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default studentDashboard;