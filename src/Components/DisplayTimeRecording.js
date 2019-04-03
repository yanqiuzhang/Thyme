import React, { Component } from "react";
import {saveData} from "../Modules/Timesheet";

class DisplayTimeRecording extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      begin: '',
      end: ''
    }
  }
  async saveData() {
    await saveData();
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
         />
        <button onClick={() => this.saveData()}>Create</button>
      </>
    );
  }
}

export { DisplayTimeRecording };
