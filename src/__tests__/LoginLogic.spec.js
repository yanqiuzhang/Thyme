import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginLogic from '../components/LoginLogic'
import axios from 'axios';
import { stub, spy } from 'sinon';

describe('<LoginLogic />', () => {
	it('renders two input fields', () => {
		const axiosSpy = jest.spyOn(axios, 'get');
		const onLogin = stub()
		const component = mount(<LoginLogic clickLogin={onLogin} />);

		expect(axiosSpy).toBeCalled();
	})
})
