import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect  } from 'react-redux';
import {createCourse} from "../../actions/CourseActions"; 


class AddCourse extends Component {
  constructor() {
    super();
    
  
    this.state = {
      courseId: "",
      courseName: "",
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
    const newCourse = {
      courseId: this.state.courseId,
      courseName: this.state.courseName,
    };
    this.props.createCourse(newCourse, this.props.history);
  }
  
  

  render() {
    const {errors} = this.state;
    return (
      <div>
        <div className="course">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create New Course</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Course Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Course Id"
                      name="courseId"
                      value={this.state.courseId}
                      onChange={this.onChange}
                    />
                  </div>
                    <div className="form-group">
                          <lable>Course Name:</lable>
                        <input
                           type="text"
                           className="form-control form-control-lg "
                           placeholder="Course Name"
                           name="courseName"
                           value={this.state.courseName}
                           onChange={this.onChange}
                      />
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

AddDean.propTypes = {
   createDean: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
   const mapStateToProps = state =>({
     errors: state.errors
   });
  
  export default connect(
    mapStateToProps,
    { createDean}
  ) (AddDean);

