import React, { Component } from "react";
import LoginLogic from "./LoginLogic";
import Menubar from "./Menubar";
import Footer from "./footer";
import TimeRecording from "./TimeRecording";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false
		};
	}

	componentDidMount() {
		this.setState({
			authenticated: Boolean(localStorage.getItem("authenticated")) || false
		});
	}

	userAuthenticated() {
		this.setState({ authenticated: true });
		localStorage.setItem("authenticated", true);
	}

	isUserAuthenticated() {
		if (this.state.authenticated === true) {
			return (
				<div style={{ background: "#354152" }}>
					<Menubar />
					<TimeRecording />
					<Footer />
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
