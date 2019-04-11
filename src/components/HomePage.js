import React, { Component } from "react";
import LoginLogic from "./LoginLogic";
import SaveTimeRecording from "./SaveTimeRecording";
import ViewTimeRecording from "./ViewTimeRecording";
import { Segment } from "semantic-ui-react";
import Menubar from "./Menubar";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false
		};
	}

	userAuthenticated() {
		this.setState({ authenticated: true });
	}

	isUserAuthenticated() {
		if (this.state.authenticated === true) {
			return (
				<div style={{ background: "#354152" }}>
					<Menubar />
					<Segment basic>
						<SaveTimeRecording />
						<div style={{ paddingTop: "70px", margin: "auto" }}>
							<ViewTimeRecording />
						</div>
					</Segment>
				</div>
			);
		} else {
			return (
				<LoginLogic
					userAuthenticated={this.userAuthenticated.bind(this)}
					authenticated={this.state.authenticated}
				/>
			);
		}
	}

	render() {
		return <>{this.isUserAuthenticated()}</>;
	}
}
export default HomePage;
