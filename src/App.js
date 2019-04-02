import React, { Component } from 'react';
import {DisplayTimeRecording} from './Components/DisplayTimeRecording';
import {TimeInputForm} from './Components/TimeInputForm';

class App extends Component {
  render() {
    return (
      <>
        <TimeInputForm/>
        <DisplayTimeRecording/>
      </>
    )
  }
}

export default App;
