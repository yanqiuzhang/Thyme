import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import SaveTimeRecording from "../components/SaveTimeRecording";

jest.mock('axios')

describe('< SaveTimeRecording/>', () => {
  it('should post times to backend when clicked', () => {
    const axiosSpy = jest.spyOn(axios, 'post');
    shallow(
      <SaveTimeRecording/>
    )
    expect(axiosSpy).toBeCalled();
  })
})