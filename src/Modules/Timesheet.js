import axios from "axios";

const PostTimesheets = async (begin, end) => {
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
        begin: begin,
        end: end,
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

export {PostTimesheets}
