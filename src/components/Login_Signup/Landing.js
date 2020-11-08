import React from 'react';
import "./LoginPage.css";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Link } from 'react-router-dom';


  const Landing = () => (
   <Formik
      initialValues={{ username: "", 
      password: "",
      confirmPassword: '',
      acceptTerms: false }}
      onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    
  validationSchema={Yup.object().shape({
    studentId: Yup.string()
      .required(" Should be 8 chars.")
      .min(8, "User Name is too short - should be 8 chars minimum."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
  })}
>

  {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;

  return (
    <form onSubmit={handleSubmit}>
    <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          defaultChecked
        />
        <label htmlFor="tab-1" className="tab"> Sign In </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab"> Sign Up </label>



        {/* Sign in page start */}
        
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="username" className="label">
                User Name
              </label>
              <input
                id="user"
                name="username"
                type="email"
                placeholder="Enter email"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username && touched.username && "error"}
              />
              {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
              )}
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
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
              
                  <button type="submit" disabled={isSubmitting} className="button btn btn-primary">
                   {isSubmitting && <span defaultValue="Sign In"  className="spinner-border spinner-border-sm mr-1"></span>}
                     {/* <input  className="button" defaultValue="Sign In" />   */}
                  </button>
               {/* <Link to="/signup" className="btn btn-link">Register</Link> */}
            </div>
            <div className="hr" />
             <div className="foot-lnk">
              <Link to="">Forgot Password?</Link>
             </div>
            </div>
          </div>
          


         </div>
         </div>
         </form>
      );
    }}
  </Formik>
);

export default Landing;



