import React, { Component } from 'react'
// import { getData } from '../modules/getData';

class ViewTimeRecording extends Component {
	// state = {
	// 	timesheets: [],
	// 	begin: '',
	// 	end: '',
	// 	errorMessage: '',
	// 	response: false
	// }

	// async postTimesheets() {
	// 	const response = await getData(this.state.begin, this.state.end);
	// 	if (response === true) {
	// 		this.setState({
	// 			timesheets: response
	// 		})
	// 	} else {
	// 		this.setState({
	// 			errorMessage: 'error'
	// 		})
	// 	}
	// }

	render() {

		let timesheets = this.props.timesheets
		let dataIndex


		if (timesheets != null) {
			debugger
      dataIndex = (
        <div>
          {timesheets.map(item => {
            return <div key={item.id}>{item.start}</div>
          })}
        </div>
      )
		}

		return (
      <div>
        {dataIndex}
      </div>
    )
	}
}

export default ViewTimeRecording