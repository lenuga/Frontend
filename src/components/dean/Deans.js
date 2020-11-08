import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeans,deleteDean } from "../../actions/DeanActions";
import PropTypes from "prop-types";
import  { Link } from 'react-router-dom';


class Deans extends Component {
  componentDidMount() {
    this.props.getDeans();
  }
  onDeleteClick = id => {
    this.props.deleteDean(id);
  };

  render() {
    const { deans } = this.props.dean;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="p-3 mb-2 bg-secondary text-white">
                  <th> Dean Id</th>
                  <th> Title</th>
                  <th> Dean Name</th>
                  <th> Mail</th>
                  <th> Tp.No</th>
                  <th> Actions</th>
                </tr>
              </thead>
              
                {deans.map(dean => (
                  <tr>
                    <td> {dean.deanId} </td>
                    <td> {dean.title}</td>
                    <td> {dean.deanName} </td>
                    <td> {dean.mail}</td>
                    <td> {dean.tpNo}</td>
                    <td>
                    <Link to={`/updateDean/${dean.deanId}`} className="btn btn-warning"> Update </Link>
                      {/* <button className="btn btn-warning "> <Link to={`/updateDean/${dean.deanid}`}> Update </Link></button>  */}
                      <button style={{marginLeft: "10px"}}  onClick={this.onDeleteClick.bind(this, dean.deanId)} className="btn btn-danger">Delete </button>
                      {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewDean(dean.id)} className="btn btn-success">View </button> */}
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
Deans.propTypes = {
  dean: PropTypes.object.isRequired,
  getDeans: PropTypes.func.isRequired,
  deleteDean: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dean: state.dean
});

export default connect(
  mapStateToProps,
   { getDeans ,deleteDean})(Deans);




