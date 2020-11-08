import React, { Component } from "react";
import { createCourse, getCourse } from "../../actions/CourseActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class UpdateCourse extends Component {
  constructor() {
    super();

    this.state = {
      courseId: "",
      courseName: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    } 
    const {
      courseId,
      courseName,
    } = nextProps.course;

    this.setState({
      courseId,
      courseName,
    });
  }
  //life cycle hooks
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCourse(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateCourse = {
      courseId: this.state.courseId,
      courseName: this.state.courseName,
    };
    this.props.createHod(updateCourse, this.props.history);
  }

  render() {
    const {errors} = this.state;
    return (
      
        <div className="Course">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Courses</h5>
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
                  <div className="form-row">
                    <div className="form-group col ">
                      <lable>Hod Name:</lable>
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="Hod Name"
                        name="hodName"
                        value={this.state.hodName}
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
      
    );
  }
}

UpdateHod.propTypes = {
  getHod: PropTypes.func.isRequired,
  createHod: PropTypes.func.isRequired,
  hod: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  hod: state.hod.hod,
  errors: state.errors
});

export default connect(mapStateToProps, { getHod, createHod })
(UpdateHod);
