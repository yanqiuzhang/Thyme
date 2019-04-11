import React, { Component } from "react";
import "../index.css";
import moment from "moment-timezone";

class ViewTimeForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const timesheets = this.props.timesheets;

		return (
			<div className="viewDiv" >
				<div style={{width: '1200px'}}>
					<label className="itemTitle">START TIME</label>
					<label className="itemTitle" style={{marginLeft: '40px'}}>END TIME</label>
					<label className="itemTitle" style={{marginLeft: '71px'}}>PROJECT</label>
					<label className="itemTitle" style={{marginLeft: '103px'}}>ACTIVITY</label>
					<label className="itemTitle" style={{marginLeft: '70px', marginRight: '11px'}}>DURATION</label>
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
								<label className="itemProject">{item.project}</label>
								<label className="itemActivity">{item.activity}</label>
								<label className="itemDuration">{moment.utc(item.duration*1000).format('HH:mm:ss')}</label>
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
