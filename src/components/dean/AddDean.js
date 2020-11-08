import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect  } from 'react-redux';
import {createDean} from "../../actions/DeanActions"; 


class AddDean extends Component {
  constructor() {
    super();
    
  
    this.state = {
      deanId: "",
      title: "",
      deanName: "",
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
    const newDean = {
      deanId: this.state.deanId,
      title: this.state.title,
      deanName: this.state.deanName,
      mail: this.state.mail,
      tpNo: this.state.tpNo,
    };
    this.props.createDean(newDean, this.props.history);
  }
  
  

  render() {
    const {errors} = this.state;
    return (
      <div>
        <div className="dean">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create New dean</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <lable>Dean Id:</lable>
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Dean Id"
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

