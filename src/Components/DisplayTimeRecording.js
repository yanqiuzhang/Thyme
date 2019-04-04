import React, { Component } from "react";
import { saveData } from "../Modules/Timesheet";
import { TimeInputForm } from "./TimeInputForm";
import { Form, Button, Input } from "semantic-ui-react"

class DisplayTimeRecording extends Component {
	state = {
		begin: "",
		end: ""
	};
	async postTimesheets() {
		let response = await saveData(this.state.begin, this.state.end);
		this.setState({ begin: response.begin, end: response.end });
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let saveButton
		if (this.state.saveData === false) {
			saveButton = (
					<Button onClick={this.postTimesheets.bind(this)}>Create</Button>
			);
		} else if (this.state.saveData === true) {
			saveButton = (
					<p>Your time was saved</p>
			);
		}
		return (
			<Form>
				<Form.Group widths='equal'>
				<Input placeholder='Search...'>
				<TimeInputForm
					changeValue={this.onChange.bind(this)}
					begin={this.state.begin}
					end={this.state.end}
				/>
				</Input>
				<button name="Create" onClick={this.postTimesheets.bind(this)}>Create</button>
				</Form.Group>
			</Form>
		);
	}
}

export { DisplayTimeRecording };





{/* <Form>
<Form.Group widths='equal'>
	<Form.Input
		fluid
		id='form-subcomponent-shorthand-input-first-name'
		label='First name'
		placeholder='First name'
	/>
	<Form.Input
		fluid
		id='form-subcomponent-shorthand-input-last-name'
		label='Last name'
		placeholder='Last name'
	/>
) */}