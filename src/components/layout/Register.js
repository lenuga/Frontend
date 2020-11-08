import React, { Component } from "react";
import { createNewLogin } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newLogin = {
      usernameusername: this.state.usernameusername,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.createNewLogin(newLogin, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
              <h3 className="card-header">Register</h3>
              <div className="card-body">
              {/* orm start */}
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label>Username</label>
                  <input
                    type="email"
                    className={classnames("form-control", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Email Address "
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                <label>Password</label>
                  <input
                    type="password"
                    className={classnames("form-control", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className={classnames("form-control", {
                      "is-invalid": errors.confirmPassword
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input  type="submit" value="Register" className="btn btn-primary"/>
                <Link to="/" className="btn btn-link">Cancel</Link>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewLogin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createNewLogin }
)(Register);