import React, { Component } from "react";
import { createDean, getDean } from "../../actions/DeanActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UpdateDean extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      deanId: "",
      title: "",
      deanName: "",
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
      deanId,
      title,
      deanName,
      tpNo,
      mail,
    } = nextProps.dean;

    this.setState({
      id,
      deanId,
      title,
      deanName,
      tpNo,
      mail
    });
  }
  //life cycle hooks
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDean(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateDean = {
      id: this.state.id,
      deanId: this.state.deanId,
      title: this.state.title,
      deanName: this.state.deanName,
      mail: this.state.mail,
      tpNo: this.state.tpNo
    };
    this.props.createDean(updateDean, this.props.history);
  }

  render() {
    const {errors} = this.state;
    return (
      
        <div className="dean">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Dean</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Dean Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="dean Id"
                      name="deanId"
                      value={this.state.deanId}
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
                      <lable>Dean Name:</lable>
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="Dean Name"
                        name="deanName"
                        value={this.state.deanName}
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

UpdateDean.propTypes = {
  getDean: PropTypes.func.isRequired,
  createDean: PropTypes.func.isRequired,
  dean: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dean: state.dean.dean,
  errors: state.errors
});

export default connect(mapStateToProps, { getDean, createDean })
(UpdateDean);
