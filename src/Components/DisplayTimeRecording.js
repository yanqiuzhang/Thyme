import React, { Component } from "react";
import {saveData} from "../Modules/Timesheet";
import { TimeInputForm } from "./TimeInputForm";

class DisplayTimeRecording extends Component {
  state = {
    begin: '',
    end: ''
  }
  async postTimesheets() {
    let response = await saveData(this.state.begin, this.state.end);
    this.setState({begin: response.begin, end: response.end})
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <TimeInputForm
          changeValue={this.onChange.bind(this)}
          begin={this.state.begin} 
          end={this.state.end} 
         />
        <button onClick={this.postTimesheets.bind(this)}>Create</button>
      </>
    );
  }
}

export { DisplayTimeRecording };
