import React, { Component } from 'react'
import Menubar from './components/Menubar'
import LoginForm from './components/LoginForm'
// import { authenticate } from './Modules/Auth';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// renderLoginForm: 'false',
			// authenticated: false,
			username: '',
			password: '',
		}

		// this.onLogin = this.onLogin.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	// async onLogin(e) {
	// 	e.preventDefault();
	// 	let resp = await authenticate(this.state.username, this.state.password)
	// 	if (resp.authenticated === true) {
	// 		this.setState({ authenticated: true });
	// 	} else {
	// 		this.setState({ message: resp.message, renderLoginForm: false })
	// 	}
	// }

	onChange(event) {
		this.setState({
			username: event.target.value,
			password: event.target.value,
			[event.target.id]: event.target.value,
		})
	}

	onClick(e) {
    e.preventDefault();
    console.log('You have signed in successfully!');
  }

	render() {
		// let renderLogin;
		// if (this.state.authenticated === true) {
		// 	if (this.state.renderLoginForm === true) {
		// 		renderLogin = (
		// 			<>
		// 				<LoginForm
		// 					loginHandler={this.onLogin}
		// 					inputChangeHandler={this.onChange}
		// 				/>
		// 			</>
		// 		)
		// 	} else {
		// 		renderLogin = (
		// 			<>
		// 				<button id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</button>
		// 				<p>{this.state.message}</p>
		// 			</>
		// 		)
		// 	}
		// }
		return (
			<div style={{ overflow: 'hidden' }}>
				<div style={{ float: 'left', width: '400px' }}>
					<Menubar />
				</div>
				<div style={{ float: 'right', width: '600px' }}>
					<LoginForm
						inputChangeHandler={this.onChange}
						inputClickHandler={this.onClick}
					/>
				</div>
			</div>
		)
	}
}

export default App;
