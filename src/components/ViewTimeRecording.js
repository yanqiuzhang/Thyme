import React, { Component } from 'react'
import { getData } from '../modules/getData';
import ViewTimeForm from './ViewTimeForm'

class ViewTimeRecording extends Component {
	state = {
		timesheets: null,
		begin: '',
		end: '',
		customer: '',
		project: '',
		activity: '',
		errorMessage: '',
	}

	componentDidMount() {
		this.getTimesheets()
	}

	async getTimesheets() {
		const response = await getData();
		if (response.status === 200) {
			this.setState({
				timesheets: response.data,
				// timesheets: response.data.project.filter(val => {
				// 	return val.project === 70;
				// })
			})
		} else {
			console.log("response error")
		}
	}


	render() {
		let timesheets = this.state.timesheets
		let fetchData
		if (timesheets != null) {
			fetchData = (
				<div>
					<ViewTimeForm
					timesheets={this.state.timesheets}
					/>
				</div>
			)
		} else {
			console.log("error")
		}

		console.log(fetchData)
		return (
			<div>
				{fetchData}
			</div>
		)
	}
}

export default ViewTimeRecording


