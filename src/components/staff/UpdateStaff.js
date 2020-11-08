import React, { Component } from "react";
import { createStaff, getStaff } from "../../actions/StaffActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateStaff extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      staffId: "",
      title: "",
      staffName: "",
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
      staffId,
      title,
      staffName,
      tpNo,
      mail,
    } = nextProps.staff;

    this.setState({
      id,
      staffId,
      title,
      staffName,
      tpNo,
      mail
    });
  }
  //life cycle hooks
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStaff(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateStaff = {
      id: this.state.id,
      staffId: this.state.staffId,
      title: this.state.title,
      staffName: this.state.staffName,
      mail: this.state.mail,
      tpNo: this.state.tpNo
    };
    this.props.createStaff(updateStaff, this.props.history);
  }

  render() {
    const {errors} = this.state;
    return (
      
        <div className="staff">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Staffs</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Lectuer Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Staff Id"
                      name="staffId"
                      value={this.state.staffId}
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
                      <lable>Staff Name:</lable>
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="Staff Name"
                        name="staffName"
                        value={this.state.staffName}
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

UpdateStaff.propTypes = {
  getStaff: PropTypes.func.isRequired,
  createStaff: PropTypes.func.isRequired,
  staff: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  staff: state.staff.staff,
  errors: state.errors
});

export default connect(mapStateToProps, { getStaff, createStaff })
(UpdateStaff);
