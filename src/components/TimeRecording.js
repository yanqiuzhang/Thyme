import React, { Component } from 'react'
import SaveTimeRecording from "./SaveTimeRecording";
import ViewTimeRecording from "./ViewTimeRecording";

class TimeRecording extends Component {
	render() {
		return (
			<div style={{ marginLeft: '60px' }}>
				<SaveTimeRecording />
				<div style={{ marginLeft: '20px', paddingTop: "70px", margin: "auto" }}>
					<ViewTimeRecording />
				</div>
			</div>
		)
	}
}

export default TimeRecording