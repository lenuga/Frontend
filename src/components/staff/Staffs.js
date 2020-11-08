import React, { Component } from "react";
import { connect } from "react-redux";
import { getStaffs,deleteStaff } from "../../actions/StaffActions";
import PropTypes from "prop-types";
import  { Link } from 'react-router-dom';


class Staffs extends Component {
  componentDidMount() {
    this.props.getStaffs();
  }
  onDeleteClick = id => {
    this.props.deleteStaff(id);
  };

  render() {
    const { staffs } = this.props.staff;
    console.log(staffs);
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="p-3 mb-2 bg-secondary text-white">
                  <th> Staff Id</th>
                  <th>Title</th>
                  <th> Staff Name</th>
                  <th> Mail</th>
                  <th> Tp.No</th>
                  <th> Actions</th>
                </tr>
              </thead>
                {staffs.map(staff => (
                  <tr>
                    <td> {staff.staffId} </td>
                    <td> {staff.title}</td>
                    <td> {staff.staffName} </td>
                    <td> {staff.mail}</td>
                    <td> {staff.tpNo}</td>
                    <td>
                    <Link to={`/updateStaff/${staff.staffId}`} className="btn btn-warning"> Update </Link>
                      {/* <button className="btn btn-warning "> <Link to={`/updateStaff/${staff.staffid}`}> Update </Link></button>  */}
                      <button style={{marginLeft: "10px"}}  onClick={this.onDeleteClick.bind(this, staff.staffId)} className="btn btn-danger">Delete </button>
                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewStaff(staff.id)} className="btn btn-success">View </button>
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
Staffs.propTypes = {
  staff: PropTypes.object.isRequired,
  getStaffs: PropTypes.func.isRequired,
  deleteStaff: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  staff: state.staff
});

export default connect(
  mapStateToProps,
   { getStaffs ,deleteStaff})(Staffs);




