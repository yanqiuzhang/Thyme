import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { DisplayTimeRecording } from "../Components/DisplayTimeRecording";

jest.mock('axios')

describe('< DisplayTimeRecording/>', () => {
  it('should post times to backend when clicked', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    shallow(
      <DisplayTimeRecording/>
    )
    expect(axiosSpy).toBeCalled();
  }) 
})