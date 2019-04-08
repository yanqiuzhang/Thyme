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
    console.log(timesheets)
		return timesheets.map((item, index) => {
			return (
				<div key={index.id}>
					<h1>{item.begin}</h1>
					<h2>{item.end}</h2>
				</div>
			);
		})
	}
}

export default ViewTimeRecording