import React from 'react';
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Link } from 'react-router-dom';


const Landing = () => (
    <Formik
       initialValues={{ username: "", 
       password: "" }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log("Logging in", values);
           setSubmitting(false);
         }, 500);
       }}
 
   validationSchema={Yup.object().shape({
     username: Yup.string()
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
       
        <form onSubmit={handleSubmit} className="form-horizontal">
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
            <div className="form-group">
               <label className="control-label col-sm-2" for="email">Email:</label>
               <div className="col-sm-10">
                   <input type="email" className="form-control" 
                   name="username"
                   placeholder="Enter email"
                   value={values.username}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   className={errors.username && touched.username && "error"}/>
               </div>
            </div>
              <div className="form-group">
               <label className="control-label col-sm-2" name="password">Password</label>
                 <div className="col-sm-10">
                   <input type="password"
                    className="form-control"
                    placeholder="enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}/>
                 </div>
              </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                      <label><input type="checkbox"/>Remender me</label>
                  </div>
              </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
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