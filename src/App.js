import React, { Component } from "react";
import Menubar from "./components/Menubar";

class App extends Component {
	render() {
		return (
			<>
				<Menubar style={{zIndex: "10"}} />
			</>
		);
	}
}
export default App;
