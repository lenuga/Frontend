import React from "react";
import { Link } from "react-router-dom";

const CreateDeanButton = () => {
  return (
    <React.Fragment>
      <Link to="/adddean" className="btn btn-primary">
        Add a Dean
      </Link>
    </React.Fragment>
  );
};

export default CreateDeanButton;