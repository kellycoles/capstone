import React, { Component } from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./MaintenanceLog.css"


class MaintenanceLog extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default MaintenanceLog;