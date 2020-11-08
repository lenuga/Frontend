import React from "react";
import { Link } from "react-router-dom";

const CreateLecturerButton = () => {
  return (
    <React.Fragment>
      <Link to="/addlecturer" className="btn btn-primary">
        Add a Lecturer
      </Link>
    </React.Fragment>
  );
};

export default CreateLecturerButton;