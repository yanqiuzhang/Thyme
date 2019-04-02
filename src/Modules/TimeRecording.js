import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  async postTimesheets(timesheets) {
    let apiUrl = "";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    if (process.env.NODE_ENV === "development") {
      apiUrl = proxyUrl + "http://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    } else {
      apiUrl = "https://demo.kimai.org/api/";
      console.log(process.env.NODE_ENV);
    }
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = axios.post(
        apiUrl + "timesheets",
        {
          begin: "2019-04-02T13:28:17.113Z",
          end: "2019-04-02T13:28:17.113Z",
          customer: 0,
          project: 0,
          activity: 0,
          description: "string",
          fixedRate: "Unknown Type: float",
          hourlyRate: "Unknown Type: float"
        },
        {
          headers: headers
        }
      );
      const timesheet = await response;
      console.log(timesheet);
      return timesheet;
    } catch (error) {
      console.error(error);
    }
  }
  render () {
    return (
      <>
      <button onClick={() => this.postTimesheets()}>postTimesheets</button>
      </>
    )
  }

}

export {TimeRecording}
