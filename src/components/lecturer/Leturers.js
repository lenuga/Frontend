import React, { Component } from "react";
import { connect } from "react-redux";
import { getLecturers,deleteLecturer } from "../../actions/LecturerActions";
import PropTypes from "prop-types";
import  { Link } from 'react-router-dom';


class Lecturers extends Component {
  componentDidMount() {
    this.props.getLecturers();
  }
  onDeleteClick = id => {
    this.props.deleteLecturer(id);
  };

  render() {
    const { lecturers } = this.props.lecturer;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="p-3 mb-2 bg-secondary text-white">
                  <th> Lecturer Id</th>
                  <th>Title</th>
                  <th> Lecturer Name</th>
                  <th> Mail</th>
                  <th> Tp.No</th>
                  <th> Actions</th>
                </tr>
              </thead>
                {lecturers.map(lecturer => (
                  <tr>
                    <td> {lecturer.lecturerId} </td>
                    <td> {lecturer.title}</td>
                    <td> {lecturer.lecturerName} </td>
                    <td> {lecturer.mail}</td>
                    <td> {lecturer.tpNo}</td>
                    <td>
                    <Link to={`/updateLecturer/${lecturer.lecturerId}`} className="btn btn-warning"> Update </Link>
                      {/* <button className="btn btn-warning "> <Link to={`/updateLecturer/${lecturer.lecturerid}`}> Update </Link></button>  */}
                      <button style={{marginLeft: "10px"}}  onClick={this.onDeleteClick.bind(this, lecturer.lecturerId)} className="btn btn-danger">Delete </button>
                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewLecturer(lecturer.id)} className="btn btn-success">View </button>
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
Lecturers.propTypes = {
  lecturer: PropTypes.object.isRequired,
  getLecturers: PropTypes.func.isRequired,
  deleteLecturer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lecturer: state.lecturer
});

export default connect(
  mapStateToProps,
   { getLecturers ,deleteLecturer})(Lecturers);




