import React, { Component } from "react";
import "../index.css";
import moment from "moment-timezone";

class ViewTimeForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const timesheets = this.props.timesheets;
		const projectName = this.props.projectName;
		const items = [
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
				name: "PROJECT"
			},
			{
				name: "ACTIVITY"
			}
		];

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
				<div className="timesheet">
					{timesheets.map((item, index) => {
						return (
							<div key={index} className="dataDiv">
								<label className="itemData">
									{moment(item.begin)
										.tz("Europe/Stockholm")
										.format("YYYY-MM-DD HH:mm A")}{" "}
								</label>
								<label className="itemData">
									{moment(item.end)
										.tz("Europe/Stockholm")
										.format("YYYY-MM-DD HH:mm A")}{" "}
								</label>
								<label className="itemData">{item.duration}</label>
								<label className="itemActivity">{item.activity}</label>
							</div>
						);
					})}
				</div>
				<div>
					{projectName.map((item, index) => {
						return (
							<div key={index} className="dataDiv">
								<label className="itemProject">{item.name}</label>
							</div>
						);
					})}
					</div>
				</div>
			</div>
		);
	}
}

export default ViewTimeForm;
