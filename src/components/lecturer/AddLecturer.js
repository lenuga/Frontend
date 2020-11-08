import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect  } from 'react-redux';
import {createLecturer} from "../../actions/LecturerActions"; 
import classnames from "classnames";


class AddLecturer extends Component {
  constructor() {
    super();
    
  
    this.state = {
      lecturerId: "",
      title: "",
      lecturerName: "",
      tpNo: "",
      mail: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

 //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newLecturer = {
      lecturerId: this.state.lecturerId,
      title: this.state.title,
      lecturerName: this.state.lecturerName,
      mail: this.state.mail,
      tpNo: this.state.tpNo,
    };
    this.props.createLecturer(newLecturer, this.props.history);
  }
  
  

  render() {
    const {errors} = this.state;
    return (
      <div>
        <div className="lecturer">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create New Lecturer</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Lectuer Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Lecturer Id"
                      name="lecturerId"
                      value={this.state.lecturerId}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-3">
                      <label>Title:</label>
                      <select
                        name="title"
                        className="form-control form-control-lg"
                        onChange={this.onChange}
                        value={this.state.title}
                        >
                        <option value="select">--Select--</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </select>
                    </div>
                    <div className="form-group col ">
                      <lable>Lecturer Name:</lable>
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="Lecturer Name"
                        name="lecturerName"
                        value={this.state.lecturerName}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                      <label>Mobile No:</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Mobile No"
                      name="tpNo"
                      value={this.state.tpNo}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                      <label>Email Id:</label>
                    <input
                      type="mail"
                      className="form-control form-control-lg"
                      placeholder="Mail Id"
                      name="mail"
                      value={this.state.mail}
                      onChange={this.onChange}
                    />
                  </div>
                  <input type="submit"  value ="Submit" className="btn btn-success"/>
                  <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddLecturer.propTypes = {
   createLecturer: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
   const mapStateToProps = state =>({
     errors: state.errors
   });
  
  export default connect(
    mapStateToProps,
    { createLecturer}
  ) (AddLecturer);

