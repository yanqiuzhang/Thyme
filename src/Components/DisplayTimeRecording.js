import React, { Component } from "react";
import {saveData} from "../Modules/Timesheet";
import { TimeInputForm } from "./TimeInputForm";

class DisplayTimeRecording extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      begin: '',
      end: ''
    }
  }
  async PostTimesheets() {
    await saveData(this.state.begin, this.state.end);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.taget.value
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
        <DisplayTimeRecording/>

        <button onClick={() => this.PostTimesheets.bind(this)}>Create</button>
      </>
    );
  }
}

export { DisplayTimeRecording };
