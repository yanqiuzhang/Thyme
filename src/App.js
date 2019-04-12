import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import Test from "./components/Test"
import LoginLogic from "./components/LoginLogic"

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' component={HomePage}></Route>
					<Route exact path='/Test' component={Test}></Route>
				</Switch>
			</>
		);
	}
}
export default App;
