import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStudent } from "../../actions/StudentActions";

class AddStudent extends Component {
  constructor() {
    super();

    this.state = {
      studentId: "",
      title: "",
      firstName: "",
      lastName: "",
      mail: "",
      address: "",
      dob: "",
      gender: "",
      tpNo: "",
      year: "",
      semester: "",
      errors: {},
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
    const newStudent = {
      studentId: this.state.studentId,
      title: this.state.title,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mail: this.state.mail,
      address: this.state.address,
      dob: this.state.dob,
      gender: this.state.gender,
      tpNo: this.state.tpNo,
      year: this.state.year,
      semester: this.state.semester,
      errors: {},
    };
    this.props.createStudent(newStudent, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="student">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add a New Student</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Student Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Studennt ID"
                      name="studentId"
                      value={this.state.studentId}
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
                      <lable>First Name:</lable>
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group col ">
                      <lable>Last Name:</lable>
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                      />
                    </div>
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
                  </div><div className="form-group">
                      <label>Gender:</label>
                      <select
                        name="gender"
                        className="form-control form-control-lg"
                        onChange={this.onChange}
                        value={this.state.gender}
                      >
                        <option value="select">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Address"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Date of birth:</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="dob"
                        value={this.state.dob}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col">
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
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label>Year:</label>
                      <select
                        name="title"
                        className="form-control form-control-lg"
                        onChange={this.onChange}
                        value={this.state.year}
                      >
                        <option value="select">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="form-group col">
                      <label>Semester:</label>
                      <select
                        name="semester"
                        className="form-control form-control-lg"
                        onChange={this.onChange}
                        value={this.state.semester}
                      >
                        <option value="select">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>

                  </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                 
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                  />
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddStudent.propTypes = {
  createStudent: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createStudent })(AddStudent);
