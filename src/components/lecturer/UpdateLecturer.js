import React, { Component } from "react";
import { createLecturer, getLecturer } from "../../actions/LecturerActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class UpdateLecturer extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      lecturerId: "",
      title: "",
      lecturerName: "",
      tpNo: "",
      mail: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    } 
    const {
      id,
      lecturerId,
      title,
      lecturerName,
      tpNo,
      mail,
    } = nextProps.lecturer;

    this.setState({
      id,
      lecturerId,
      title,
      lecturerName,
      tpNo,
      mail
    });
  }
  //life cycle hooks
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getLecturer(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateLecturer = {
      id: this.state.id,
      lecturerId: this.state.lecturerId,
      title: this.state.title,
      lecturerName: this.state.lecturerName,
      mail: this.state.mail,
      tpNo: this.state.tpNo
    };
    this.props.createLecturer(updateLecturer, this.props.history);
  }

  render() {
    const {errors} = this.state;
    return (
      
        <div className="lecturer">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Lecturers</h5>
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

UpdateLecturer.propTypes = {
  getLecturer: PropTypes.func.isRequired,
  createLecturer: PropTypes.func.isRequired,
  lecturer: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lecturer: state.lecturer.lecturer,
  errors: state.errors
});

export default connect(mapStateToProps, { getLecturer, createLecturer })
(UpdateLecturer);
