import React, { Component } from "react";
import './Form.css';
//import SimpleReactCalendar from 'simple-react-calendar';   

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            studentId: '',
            email: '',
            year: 'select',
            semester: 'select',
            departmentName: 'select',
            startDate: '',
            endDate: '',
            courseId: 'select',
            courseName: 'select',
            file: '',
            formErrors: {}
        };

        this.initialState = this.state;
    }

    handleFormValidation() {
        const {studentId, email, year, semester, departmentName, startDate, endDate, courseId,
            courseName, file } = this.state;
        let formErrors = {};
        let formIsValid = true;

        
        //Index No 
        if (!studentId) {
            formIsValid = false;
            formErrors["studentIdErr"] = "Redister No is required.";
        }
        //Email    
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            formIsValid = false;
            formErrors["emailErr"] = "Invalid email id.";
        }
        //Year   
        if (year === '' || year === "select") {
            formIsValid = false;
            formErrors["yearErr"] = "Select year.";
        }
        //Semester
        if (semester === '' || semester === "select") {
            formIsValid = false;
            formErrors["semesterErr"] = "Select semester.";
        }
        //Department
        if (departmentName === '' || departmentName === "select") {
            formIsValid = false;
            formErrors["departmentNameErr"] = "Select departmentName.";
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.handleFormValidation()) {
            alert('You have been successfully registered.')
            this.setState(this.initialState)
        }
    }

    render() {

        const {  studentIdErr, emailErr, yearErr, semesterErr,
            departmentNameErr, startDateErr, endDateErr, courseIdErr, courseNameErr, fileErr } = this.state.formErrors;

        return (
            <div className="medicalform">
                <div className="formDiv">
                    <h3 style={{ textAlign: "center" }} >Sabaragamuwa University of Sri Lanka, Faculty of Applied Sciences
                <br /> Medical form  {new Date().getFullYear()} </ h3>
                    <hr />
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            {/* Register number */}
                            <div>
                                <label htmlFor="studentId">Register No</label>
                                <input type="text" name="studentId"
                                    value={this.state.studentId}
                                    onChange={this.handleChange}
                                    placeholder="Registration No"
                                    className={studentIdErr ? ' showError' : ''} />
                                {studentIdErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{studentIdErr}</div>
                                }
                            </div>
                            {/* Email  */}
                            <div>
                                <label htmlFor="email">Email </label>
                                <input type="mail" name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Your email id"
                                    className={emailErr ? ' showError' : ''} />
                                {emailErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                                }
                            </div>
                            
                            {/* Year */}
                            <div>
                                <label htmlFor="year">year</label>
                                <select name="year"
                                    value={this.state.year}
                                    onChange={this.handleChange}
                                    className={yearErr ? ' showError' : ''} >
                                    <option value="select">--Select--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                {yearErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{yearErr}</div>
                                }
                            </div>
                            {/* Semester */}
                            <div>
                                <label htmlFor="semester">Semester</label>
                                <select name="semester"
                                    value={this.state.semester}
                                    onChange={this.handleChange}
                                    className={semesterErr ? ' showError' : ''} >
                                    <option value="select">--Select--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                {semesterErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{semesterErr}</div>
                                }
                            </div>
                            {/* Department */}
                            <div>
                                <label htmlFor="departmentName">Department</label>
                                <select name="departmentName"
                                    value={this.state.departmentName}
                                    onChange={this.handleChange}
                                    className={departmentNameErr ? ' showError' : ''} >
                                    <option value="select">--Select--</option>
                                    <option value="CIS">Computing and Information Systems</option>
                                    <option value="FIS">Food Science and Technology</option>
                                    <option value="NR">Natural Resources</option>
                                    <option value="PST">Physical Science and Technologies</option>
                                    <option value="SMP|SSM">Sports Science and Management and physical Education</option>
                                </select>
                                {departmentNameErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{departmentNameErr}</div>
                                }
                            </div>
                            {/* Date From */}
                            <div>
                                <label htmlFor="startDate"> Start Date </label>
                                <input type="date" name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleChange}
                                    className={startDateErr ? ' showError' : ''} />
                                {startDateErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{startDateErr}</div>
                                }
                                {/* Date To */}
                                <label htmlFor="endDate">End Date</label>
                                <input type="date" name="endDate"
                                    value={this.state.endDate}
                                    onChange={this.handleChange}
                                    className={endDateErr ? ' showError' : ''} />
                                {endDateErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{endDateErr}</div>
                                }
                            </div>
                            {/* Course Id */}
                            <div>
                                <label htmlFor="courseId">Course Id</label>
                            </div>
                            {/* Course Name */}
                            <div>
                                <label htmlFor="courseName">Course Name</label>
                            </div>
                            <br />
                            <input type="submit" value="Submit" />
                            <input type="reset" value="Reset" />
                        </form>
                    </div>
                </div >
            </div>
        );
    }
}

export default Form;