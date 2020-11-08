import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          defaultChecked
        />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        {/* Login page start */}

        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">
                Username
              </label>
              <input id="user" 
              type="text" 
              className="input"
              name="studentId" 
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
                
              />
            </div>
            <div className="group">
              <input
                id="check"
                type="checkbox"
                className="check"
                defaultChecked
              />
              <label htmlFor="check">
                <span className="icon" /> Keep me Signed in
              </label>
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign In" />
            </div>
            <div className="hr" />
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>

          {/* Sign Up */}

          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="user" className="label">Username</label>
              <input id="user" type="email" name="username" placeholder="Enter your email" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input
                id="pass"
                name="password"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Repeat Password</label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign Up" />
            </div>
            <div className="hr" />
               <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>|<label htmlFor="tab-1">Sign In</label>
               </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}
export default LoginPage;