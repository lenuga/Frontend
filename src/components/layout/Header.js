import React, { Component } from "react";
import CreateLecturerButton from "../lecturer/CreateLecturerButton";
import {Link} from 'react-router-dom';
import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {logout} from "../../actions/securityActions";

class Header extends Component {

  // logout(){
  //   this.props.logout;
  //   window.location.href = "/";
  // }

  render() {
    // const { validToken, user } = this.props.security;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-4">
        <div className="container">
          {/* <Link className="navbar-brand" to="/signin" >
           Login|SignUp
          </Link> */}
          Admin 
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
              <CreateLecturerButton/>
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Lecturer
                </Link>
              </li>
            </ul>

            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="register.html">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul> */}

          </div>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/studentdashboard">
                  Student
                </Link>
              </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/staffdashboard">
                  Staff
                </Link>
              </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/hoddashboard">
                  Hod
                </Link>
              </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/deandashboard">
                  Dean
                </Link>
              </li>
            </ul>
            </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
  security: state.securty
});

export default connect(mapStateToprops, {logout})(Header);