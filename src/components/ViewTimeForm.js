import React, { Component } from 'react'
import '../index.css';

class ViewTimeForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const timesheets = this.props.timesheets
		const items = [
			{
				name: "PROJECT"
			},
			{
				name: "START TIME"
			},
			{
				name: "END TIME"
			},
			{
				name: "DURATION"
			},
			{
				name: "ACTIVITY"
			},
		]

		return (
			<div className="viewDiv">
				<div>
					{items.map(item => {
						return (
							<div>
								<label className="itemTitle">{item.name}</label>
							</div>
						);
					})}
				</div>
				<div>
					{timesheets.map((item, index) => {
						return (
							<div key={index}>
								<label>{item.begin}</label>
								<label>{item.end}</label>
							</div>
						);
					})}
				</div>
			</div>
		)
	}
}

export default ViewTimeForm;