import React, { Component } from "react";
import { saveTime } from "../modules/saveTimeSheet";
import TimeInputForm from "./TimeInputForm";
import { Segment, Button, Grid, Dropdown } from "semantic-ui-react";
import {
	fetchCustomers,
	fetchProjects,
	fetchActivities
} from "../modules/timeData";

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
			timeSaved: false,
			activities: [],
			projects: [],
			customers: [],
			description: "",
			showProjectsDropdown: true,
			showActivitiesDropdown: true
		};
	}

	async componentDidMount() {
		const customers = await fetchCustomers();
		const projects = await fetchProjects();
		const activities = await fetchActivities();
		this.setState({
			activities: activities,
			projects: projects,
			customers: customers
		});
	}

	async postTimesheets() {
		const response = await saveTime(
			this.state.begin,
			this.state.end,
			this.state.customer,
			this.state.project,
			this.state.activity,
			this.state.description
		);
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
		this.setState({ customer: option }, async () => {
			const filteredProjects = await this.state.projects.filter(val => {
				return val.customer === option;
			});
			this.setState({ showProjectsDropdown: true, projects: filteredProjects });
		});
	}

	handleProjectChange(option) {
		this.setState({ project: option }, async () => {
			const filteredActivities = await this.state.activities.filter(val => {
				return val.project === option;
			});
			this.setState({
				showActivitiesDropdown: true,
				activities: filteredActivities
			});
		});
	}

	handleActivityChange(option) {
		this.setState({ activity: option });
	}

	render() {
		let saveButton;
		let projectsDropdown;
		let activitiesDropdown;
		const customers = this.state.customers.map(val => {
			return { text: val.name, value: val.id };
		});
		const projects = this.state.projects.map(val => {
			return { text: val.name, value: val.id };
		});
		const activities = this.state.activities.map(val => {
			return { text: val.name, value: val.id };
		});

		if (this.state.showProjectsDropdown === true) {
			projectsDropdown = (
				<Dropdown
					options={projects}
					placeholder="Project"
					id="projects"
					selection
					onChange={(e, { value }) => this.handleProjectChange(value)}
				/>
			);
		}
		if (this.state.showActivitiesDropdown === true) {
			activitiesDropdown = (
				<Dropdown
					options={activities}
					placeholder="Activity"
					id="activity"
					selection
					onChange={(e, { value }) => this.handleActivityChange(value)}
				/>
			);
		}

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
					<p name="error-message">{this.state.errorMessage}</p>
				</>
			);
		} else {
			saveButton = <p name="save-message">Your time was saved</p>;
		}
		return (
			<>
				<Grid
					columns="equal"
					textAlign="center"
					style={{
						background: "#DDDD",
						paddingTop: "2%",
						paddingBottom: "2%",
						textAlign: "center",
						width: "1300px"
					}}
				>
					<Grid.Column>
						<Segment>
							<Dropdown
								style={{
									marginLeft: "10px"
								}}
								options={customers}
								placeholder="Customer"
								id="customer"
								selection
								onChange={(e, { value }) => this.handleCustomerChange(value)}
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>{projectsDropdown}</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>{activitiesDropdown}</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>
							<TimeInputForm
								style={{
									aligncontent: "left"
								}}
								changeValue={this.onChange.bind(this)}
								begin={this.state.begin}
								end={this.state.end}
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>{saveButton}</Segment>
					</Grid.Column>
				</Grid>
			</>
		);
	}
}

export default SaveTimeRecording;
