import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createNewLogin} from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Regi({ history }) {

    // constructor()
    // {
    //    super(); 

    //     this.state = {
    //         username: "",
    //         password: "",
    //         confirmpassword: "",
    //         errors: {}
    //     };
    // }

    const initialValues = {
        username: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    };
   
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        // setStatus();
        // accountService.register(fields)
        //     .then(() => {
        //         alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
        //         history.push('login');
        //     })
        //     .catch(error => {
        //         setSubmitting(false);
        //         alertService.error(error);
        //     });
    }

    


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className="register">
                    <div className="container">
                    <h3 className="card-header">Register</h3>
                    <div className="card-body">
                        
                        <div className="form-group">
                            <label>Username</label>
                            <Field name="username" type="email" className={'form-control' + (errors.username && touched.username? ' is-invalid' : '')} />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
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
                            <Link to="/" className="btn btn-link">Cancel</Link>
                        </div>
                    </div>
                    </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

Register.propTypes = {
    createNewLogin: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateProps = state => ({
  errors: state.errors 
});

export default connect(
    mapStateToProps, 
    {createNewLogin}
    )(Regi); 