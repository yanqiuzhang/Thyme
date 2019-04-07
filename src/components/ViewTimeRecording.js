import React, { Component } from 'react'

class ViewTimeRecording extends Component {
	render() {
		let fetchData;

		if (this.props.timesheets != null) {
			debugger
			fetchData = (
				<div>
					{this.props.timesheets.map(item => {
						return (
							<div key={item.id}>
								<h1>{item.data.end}</h1>
								<h2>{item.data.begin}</h2>
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