import React, { Component } from 'react'
import Menubar from './components/Menubar'
import LoginForm from './components/LoginForm'
import { authenticate } from './Modules/Auth';

class App extends Component {
	constructor() {
		super();
		this.state = {
			renderLoginForm: 'false',
			authenticated: false,
      username: '',
      password: '',
		}

		this.onLogin = this.onLogin.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	async onLogin(e) {
		e.preventDefault();
		let resp = await authenticate(this.state.username, this.state.password)
		if (resp.authenticated === true) {
			this.setState({ authenticated: true });
		} else {
			this.setState({ message: resp.message, renderLoginForm: false })
		}
	}

	onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

	render() {
		let renderLogin;
    if (this.state.authenticated === true) {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm
              loginHandler={this.onLogin}
              inputChangeHandler={this.onChange}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <button id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</button>
            <p>{this.state.message}</p>
          </>
        )
			}
		}
		return (
			<div>
				<Menubar />
				<LoginForm />
			</div>
		)
	}
}

export default App;
