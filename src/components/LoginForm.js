import React from 'react';
import thymeLogo from '../image/logo.png'
import '../style/style.css';

const LoginForm = (props) => {
	return (
		<div className="form_div">
				<img src={thymeLogo} alt="logo" className="thyme_logo" />
				<form>
					<div>
						<input id="username" type="name" placeholder="Username" onChange={props.inputChangeHandler} className="user_input"></input>
					</div>
					<div>
						<input id="password" type="password" placeholder="Password" onChange={props.inputChangeHandler} className="user_input"></input>
					</div>
					<button id="submit" onClick={(e) => props.clickLogin(e)} type="submit" className="sign_in">Sign in</button>
				</form>
		</div>
	)
}

export default LoginForm;