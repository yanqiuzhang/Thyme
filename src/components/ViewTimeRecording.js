import React, { Component } from 'react'
// import { getData } from '../modules/getData';

class ViewTimeRecording extends Component {
	// state = {
	// 	timesheets: null,
	// 	begin: '',
	// 	end: '',
	// 	errorMessage: '',
	//  data: false
	// }

	// async postTimesheets() {
	// 	const response = await getData(this.state.begin, this.state.end);
	// 	if (response.data === ture) {
	// 		this.setState({
	// 			timesheets: response.data
	// 		})
	// 	} else {
	// 		this.setState({
	// 			errorMessage: 'error'
	// 		})
	// 	}
	// }

	render() {
		let timesheets = this.props.timesheets
		let fetchData;

		if (timesheets != null) {
			debugger
			fetchData = (
				<div>
					{timesheets.map((item, index) => {
						return (
							<div key={index.id}>
								<h1>{item.begin}</h1>
								<h2>{item.end}</h2>
							</div>
						);
					})}
				</div>
			)
		}

		return (
			<div>
				{fetchData}
			</div>
		)
	}
}

export default ViewTimeRecording