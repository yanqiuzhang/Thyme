import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { authenticate } from '../Modules/Auth'

class LoginLogic extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			errorMessage: ''
		}
	}

	onChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	async onLogin(e) {
		e.preventDefault();
		const response = await authenticate(this.state.username, this.state.password)
		if (response.authenticated === true) {
			this.props.userAuthenticated()
		} else {
			this.setState({ errorMessage: 'Invalid credentials' })
		}
	}

	render() {
		return (
			<div>
				<LoginForm
					inputChangeHandler={this.onChange.bind(this)}
					clickLogin={this.onLogin.bind(this)}
				/>
				<p id="error_message">
					{this.state.errorMessage}
				</p>
			</div>
		)
	}
}

export default LoginLogic;
