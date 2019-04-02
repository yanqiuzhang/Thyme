import React, { Component } from "react";
import postTimesheets from "../Modules/Timesheet"

class DisplayTimeRecording extends Component {
  render () {
    return (
      <>
      <button onClick={() => this.postTimesheets()}>postTimesheets</button>
      </>
    )
  }

}

export {DisplayTimeRecording}