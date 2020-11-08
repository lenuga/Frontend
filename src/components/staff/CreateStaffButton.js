import React from "react";
import { Link } from "react-router-dom";

const CreateStaffButton = () => {
  return (
    <React.Fragment>
      <Link to="/addstaff" className="btn btn-primary">
        Add a Staff
      </Link>
    </React.Fragment>
  );
};

export default CreateStaffButton;