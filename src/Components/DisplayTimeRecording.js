import React, { Component } from "react";
import {PostTimesheets} from "../Modules/Timesheet"

class DisplayTimeRecording extends Component {
  componentDidMount(){
    this.PostTimesheets()
  }

  async PostTimesheets() {
    await PostTimesheets();
  }

  render () {
    return (
      <>
      <button onClick={() => this.PostTimesheets()}>post</button>
      </>
    )
  }

}

export {DisplayTimeRecording}