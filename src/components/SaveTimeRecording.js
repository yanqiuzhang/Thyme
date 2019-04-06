import React, { Component } from "react";
import { saveTime } from "../modules/saveTimeSheet";
import TimeInputForm from "./TimeInputForm";
import { Form, Button, Grid } from "semantic-ui-react";

class SaveTimeRecording extends Component {
	constructor(props) {
		super(props);
		this.postTimesheets = this.postTimesheets.bind(this);
	}

	state = {
		begin: "",
		end: "",
		errorMessage: "",
		rate: "",
		customer: "",
		project: "",
		activity: "",
		timeSaved: false
	};

	async postTimesheets() {
		const response = await saveTime(this.state.begin, this.state.end);

		if (response.status === 200) {
			this.setState({
				timeSaved: true
			});
		} else {
			this.setState({
				errorMessage:
					"Your time was not saved, make sure that you use the correct format"
			});
		}
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			timeSaved: false
		});
	}

	render() {
		let saveButton;

		const customers = [
			{ text: "Customer 1", value: "1" },
			{ text: "Customer 2", value: "2" },
			{ text: "Customer 3", value: "3" },
			{ text: "Customer 4", value: "4" }
		]
		const projects = [
			{ text: "Project 1", value: "1" },
			{ text: "Project 2", value: "2" },
			{ text: "Project 3", value: "3" },
			{ text: "Project 4", value: "4" }
		]
		const activities = [
			{ text: "Activity 1", value: "1" },
			{ text: "Activity 2", value: "2" },
			{ text: "Activity 3", value: "3" },
			{ text: "Activity 4", value: "4" }
		]

		if (!this.state.timeSaved) {
			saveButton = (
				<>
					<Button
						style={{ background: "#46b395", marginLeft: "10px" }}
						name="create"
						onClick={this.postTimesheets.bind(this)}
					>
						Create
					</Button>
					<p>{this.state.errorMessage}</p>
				</>
			);
		} else {
			saveButton = <p>Your time was saved</p>;
		}
		return (
			<div id="time-block">
				<Grid textAlign="center" columns={4}>
					<Grid>
						<Form.Group
							width="full"
							style={{
								background: "#DDDD",
								paddingTop: "10%",
								paddingBottom: "10%",
								width: "1740px",
								position: "absolute",
								marginTop: "50%"
							}}
						>
							<TimeInputForm
								style={{
									aligncontent: "left"
								}}
								changeValue={this.onChange.bind(this)}
								begin={this.state.begin}
								end={this.state.end}
							/>
							{saveButton}
						</Form.Group>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default SaveTimeRecording;
