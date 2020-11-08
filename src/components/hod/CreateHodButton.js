import React from "react";
import { Link } from "react-router-dom";

const CreateHodButton = () => {
  return (
    <React.Fragment>
      <Link to="/addhod" className="btn btn-primary">
        Add HOD
      </Link>
    </React.Fragment>
  );
};

export default CreateHodButton;