import React, { Component } from "react";
import { DisplayTimeRecording } from "./Components/DisplayTimeRecording";
import {Menubar} from "./Components/Menubar";

class App extends Component {
	render() {
		return (
		<>
			<DisplayTimeRecording />
			<Menubar />
		</>
		)
	}
}
export default App;
