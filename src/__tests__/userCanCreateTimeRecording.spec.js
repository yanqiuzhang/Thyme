import React from "react";
import { shallow, mount } from "enzyme";
import axios from "axios";
import SaveTimeRecording from "../components/SaveTimeRecording";
import { equal } from "assert";
import { FormGroup } from 'semantic-ui-react';

jest.mock("axios");

describe("<SaveTimeRecording />", () => {
	// it("should post times to backend", () => {
	// 	const axiosSpy = jest.spyOn(axios, "post");
	// 	shallow(<SaveTimeRecording />);
	// 	expect(axiosSpy).toBeCalled();
	// });
	xit("renders time input form", () =>  {
		const describedComponent = shallow(<SaveTimeRecording />)
		console.log(describedComponent.debug())
		expect(describedComponent.find("FormGroup")).toHaveLength(1)
	})

	it("calls postTimesheets when button is clicked", () => {
		const describedComponent = mount(<SaveTimeRecording />)
		// const instance = describedComponent.instance()
		const postTimeSheetSpy = jest.spyOn(SaveTimeRecording.prototype,"postTimesheets")
		console.log(postTimeSheetSpy)
		console.log(describedComponent.debug())
		describedComponent.find("button").simulate("click", {
			target: {
				value: "Create"
			}
		})
		expect(postTimeSheetSpy).toBeCalled()
	}

	)
});
