import React from 'react';
import "./LoginPage.css";
import { Formik, Field, ErrorMessage } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

  const Signup = () => (
   <Formik
   initialValues={{ 
    username: "", 
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
    username: Yup.string()
      .email()
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'Accept Terms & Conditions is required')
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
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        {/* Sign In page start */}
        
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="studentId" className="label">
                User Name
              </label>
              <input
                id="user"
                name="studentId"
                type="text"
                placeholder="Enter studentId"
                value={values.studentId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.studentId && touched.studentId && "error"}
              />
              {errors.userName && touched.studentId && (
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

            //
            <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="confirmPassword"
            placeholder="Enter your password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword && touched.confirmPassword && "error"}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="input-feedback">{errors.confirmPassword}</div>
          )}
            
            <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Register
                            </button>
                            <Link to="/loginForm" className="btn btn-link">Cancel</Link>
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

export default Signup;



