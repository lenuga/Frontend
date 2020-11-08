import React, { Component } from "react";
import { createHod, getHod } from "../../actions/HodActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class UpdateHod extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      hodId: "",
      title: "",
      hodName: "",
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
      hodId,
      title,
      hodName,
      tpNo,
      mail,
    } = nextProps.hod;

    this.setState({
      id,
      hodId,
      title,
      hodName,
      tpNo,
      mail
    });
  }
  //life cycle hooks
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getHod(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateHod = {
      id: this.state.id,
      hodId: this.state.hodId,
      title: this.state.title,
      hodName: this.state.hodName,
      mail: this.state.mail,
      tpNo: this.state.tpNo
    };
    this.props.createHod(updateHod, this.props.history);
  }

  render() {
    const {errors} = this.state;
    return (
      
        <div className="Hod">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Hods</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Hod Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hod Id"
                      name="hodId"
                      value={this.state.hodId}
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
