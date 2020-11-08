import React, { Component } from "react";
import CreateDeanButton from "./dean/CreateDeanButton";
import Deans from "./dean/Deans";


class deanDashboard extends Component {
  
  render() {
    return (
      <div className="dean">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Dean</h1>
              <br />
              <CreateDeanButton /><br/>
              <br />
             <Deans/>
             <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default deanDashboard;