import React, { Component } from "react";
import { saveTime } from "../modules/saveTimeSheet";
import TimeInputForm from "./TimeInputForm";
import { Form, Button, Grid, Dropdown } from "semantic-ui-react";

class SaveTimeRecording extends Component {
	constructor(props) {
		super(props);
		this.postTimesheets = this.postTimesheets.bind(this);
		this.state = {
			begin: "",
			end: "",
			customer: "",
			project: "",
			activity: "",
			rate: "",
			timeSaved: false
		};
	}

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

	handleCustomerChange(option) {
		this.setState({ customer: option });
	}

	handleProjectChange(option) {
		this.setState({ project: option });
	}

	handleActivityChange(option) {
		this.setState({ activity: option });
	}

	render() {
		let saveButton;

		const customers = [
			{ text: "Hammes-Kilback", option: "1" },
			{ text: "Sawayn-Farrel", option: "2" },
			{ text: "Scahefer and sons", option: "3" },
			{ text: "Treutel Ltd", option: "4" }
		];
		const projects = [
			{ text: "Advanced content-based functionalities", option: "149" },
			{ text: "Ameliorated global internetsolution", option: "136" },
			{ text: "Compatible 5thgeneration customerloyalty", option: "140" },
			{ text: "De-engineered encompassing emulation", option: "134" },
			{ text: "", option: "5" },
			{ text: "", option: "6" },
			{ text: "", option: "7" }
		];
		const activities = [
			{ text: "", option: "1" },
			{ text: "", option: "2" },
			{ text: "", option: "3" },
			{ text: "", option: "4" },
			{ text: "", option: "5" },
			{ text: "", option: "6" },
			{ text: "", option: "7" }
		];

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
							<Dropdown
								options={customers}
								id="customer"
								selection
								placeholder
								onChange={(e, { option }) => this.handleCustomerChange(option)}
							/>
							<Dropdown
								options={projects}
								id="projects"
								selection
								placeholder
								onChange={(e, { option }) => this.handleProjectChange(option)}
							/>
							<Dropdown
								options={activities}
								id="activity"
								selection
								placeholder
								onChange={(e, { option }) => this.handleActivityChange(option)}
							/>
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
