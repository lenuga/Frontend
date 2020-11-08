import React from "react";
import { Link } from "react-router-dom";

const CreateCourseButton = () => {
  return (
    <React.Fragment>
      <Link to="/addcourse" className="btn btn-primary">
        Add a Course
      </Link>
    </React.Fragment>
  );
};

export default CreateCourseButton;