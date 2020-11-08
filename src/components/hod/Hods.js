import React, { Component } from "react";
import { connect } from "react-redux";
import { getHods,deleteHod } from "../../actions/HodActions";
import PropTypes from "prop-types";
import  { Link } from 'react-router-dom';


class Hods extends Component {
  componentDidMount() {
    this.props.getHods();
  }
  onDeleteClick = id => {
    this.props.deleteHod(id);
  };

  render() {
    const { hods } = this.props.hod;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="p-3 mb-2 bg-secondary text-white">
                  <th> Hod Id</th>
                  <th>Title</th>
                  <th> HOD Name</th>
                  <th> Mail</th>
                  <th> Tp.No</th>
                  <th> Actions</th>
                </tr>
              </thead>
                {hods.map(hod => (
                  <tr>
                    <td> {hod.hodId} </td>
                    <td> {hod.title}</td>
                    <td> {hod.hodName} </td>
                    <td> {hod.mail}</td>
                    <td> {hod.tpNo}</td>
                    <td>
                    <Link to={`/updateHod/${hod.hodId}`} className="btn btn-warning"> Update </Link>
                      {/* <button className="btn btn-warning "> <Link to={`/updateHod/${hod.HodId}`}> Update </Link></button>  */}
                      <button style={{marginLeft: "10px"}}  onClick={this.onDeleteClick.bind(this, hod.hodId)} className="btn btn-danger">Delete </button>
                     
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
Hods.propTypes = {
  hod: PropTypes.object.isRequired,
  getHods: PropTypes.func.isRequired,
  deleteHod: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hod: state.hod
});

export default connect(
  mapStateToProps,
   { getHods ,deleteHod})(Hods);




