import React from "react";
import { Link } from "react-router-dom";

const CreateStudentButton = () => {
  return (
    <React.Fragment>
      <Link to="/addstudent" className="btn btn-primary">
        Add a Student
      </Link>
    </React.Fragment>
  );
};

export default CreateStudentButton;