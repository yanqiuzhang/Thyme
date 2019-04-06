import React from "react";
import { shallow, mount } from "enzyme";
import SaveTimeRecording from "../components/SaveTimeRecording";
import * as saveTimeSheet from "../modules/saveTimeSheet";

describe("<SaveTimeRecording />", () => {

    it("renders time input form", () => {
        const describedComponent = shallow(<SaveTimeRecording />)
        expect(describedComponent.find("FormGroup")).toHaveLength(1)
    })

    it("calls postTimesheets when button is clicked", () => {
        const postTimesheetsSpy = jest.spyOn(SaveTimeRecording.prototype, 'postTimesheets');
        const describedComponent = mount(<SaveTimeRecording />);
        describedComponent.find('button').simulate('click');
        expect(postTimesheetsSpy).toHaveBeenCalled();
    })

    it("calls saveTimeSheet.saveTime from postTimesheets", () => {
        saveTimeSheet.saveTime = jest.fn()
        const describedComponent = mount(<SaveTimeRecording />);
        describedComponent.setState({ begin: '17:00', end: '17:30' })
        describedComponent.instance().postTimesheets()
        expect(saveTimeSheet.saveTime).toBeCalledWith('17:00', '17:30');
    })
});
