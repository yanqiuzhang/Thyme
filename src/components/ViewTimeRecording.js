import React, { Component } from 'react'
import { getData } from '../modules/getData';
import { getSpecificProjectName } from '../modules/getSpecificProjectName';
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
		projectName: null
	}

	componentDidMount() {
		this.getTimesheets();
		this.getProjectName();
	}

	async getTimesheets() {
		const response = await getData();
		if (response.status === 200) {
			this.setState({
				timesheets: response.data,
			})
		} else {
			console.log("response error")
		}
	}

	async getProjectName() {
		const resp = await getSpecificProjectName();
		if (resp.status === 200) {
			this.setState({
				projectName: resp.data,
			})
		} else {
			console.log("response error")
		}
	}

	render() {
		let timesheets = this.state.timesheets
		let projectName = this.state.projectName
		let fetchData
		if (timesheets != null && projectName != null) {
			fetchData = (
				<div>
					<ViewTimeForm
					timesheets={this.state.timesheets}
					projectName={this.state.projectName}
					/>
				</div>
			)
		} else {
			console.log("error")
		}

		console.log(fetchData)
		return (
			<div>
				<h1 className="timeHistoryTitle">My Activity History</h1>
				{fetchData}
			</div>
		)
	}
}

export default ViewTimeRecording


