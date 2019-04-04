import React, { Component } from "react";
import SaveTimeRecording from "./components/SaveTimeRecording";
import { Menubar } from "./components/Menubar";

class App extends Component {
	render() {
		return (
			<>
				<Menubar />
				<SaveTimeRecording />
			</>
		);
	}
}
export default App;
