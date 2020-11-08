import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents,deleteStudent } from "../../actions/StudentActions";
import PropTypes from "prop-types";
import  { Link } from 'react-router-dom';


class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  onDeleteClick = id => {
    this.props.deleteStudent(id);
  };

  render() {
    const { students } = this.props.student;
    //console.log(students);
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="p-3 mb-2 bg-secondary text-white">
                  <th> Student Id</th>
                  <th>Title</th>
                  <th> First Name</th>
                  <th> Last Name</th>
                  <th> Mail</th>
                  <th> Address</th>
                  <th> Tp.No</th>
                  <th> DOB</th>
                  <th> Gender</th>
                  <th> Year</th>
                  <th> Semester</th>
                  <th> Actions</th>
                </tr>
              </thead>
                {students.map(student => (
                  <tr>
                    <td> {student.studentId} </td>
                    <td> {student.title}</td>
                    <td> {student.firstName} </td>
                    <td> {student.lastName} </td>
                    <td> {student.mail}</td>
                    <td> {student.address}</td>
                    <td> {student.tpNo}</td>
                    <td> {student.dob} </td>
                    <td> {student.gender} </td>
                    <td> {student.year} </td>
                    <td> {student.semester} </td>
                    <td>
                    <Link to={`/updatestudent/${student.studentId}`} className="btn btn-warning"> Update </Link>
                      {/* <button className="btn btn-warning "> <Link to={`/updateStudent/${student.studentid}`}> Update </Link></button>  */}
                      <button style={{marginLeft: "10px"}}  onClick={this.onDeleteClick.bind(this, student.studentId)} className="btn btn-danger">Delete </button>
                      {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-success">View </button> */}
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
Students.propTypes = {
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
   { getStudents ,deleteStudent})(Students);




