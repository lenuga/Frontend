import React, { Component } from "react";
import CreateHodButton from "./hod/CreateHodButton";
import Hods from "./hod/Hods";


class hodDashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Hod</h1>
              <br />
              <CreateHodButton /><br/>
              <br />
             <Hods/>
             <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hodDashboard;