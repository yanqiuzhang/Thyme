import React, { Component } from "react";
import { saveData } from "../Modules/Timesheet";
import { TimeInputForm } from "./TimeInputForm";
import { Form, Button, Grid } from "semantic-ui-react";

class DisplayTimeRecording extends Component {
	state = {
		begin: "",
		end: "",
	};

	async postTimesheets() {
		let response = await saveData(this.state.begin, this.state.end);
		// this.setState({ begin: response.begin, end: response.end });
		// what are we supposed to do with the response?
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let saveButton;

		if (this.state.saveData === false) {
			saveButton = (
				<Button onClick={this.postTimesheets.bind(this)}>Create</Button>
			);
		} else if (this.state.saveData === true) {
			saveButton = <p>Your time was saved</p>;
		}
		return (
			<Grid textAlign="center" columns={4}>
				<Grid>
					<Form.Group widths="equal">
						<TimeInputForm
							changeValue={this.onChange.bind(this)}
							begin={this.state.begin}
							end={this.state.end}
						/>
						<Button
							positive
							name="Create"
							onClick={this.postTimesheets.bind(this)}
						>
							Create
						</Button>
					</Form.Group>
				</Grid>
			</Grid>
		);
	}
}

export { DisplayTimeRecording };
