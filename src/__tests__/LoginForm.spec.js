import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from '../components/LoginForm'

describe('<LoginForm />', () => {
	it('renders two input fields', () => {
		const describedComponent = shallow(<LoginForm />);
		const usernameInput = <input id="username" type="name" placeholder="Username" className="user_input"></input>
		const passwordInput = <input id="password" type="password" placeholder="Password" className="user_input"></input>
    expect(describedComponent.contains(usernameInput)).toEqual(true);
    expect(describedComponent.contains(passwordInput)).toEqual(true);
	})
})