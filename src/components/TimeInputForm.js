import React from "react";
import { Input } from "semantic-ui-react";
import '../index.css';

const TimeInputForm = props => {
	return (
		<>
			<label name="Start Time" className="time">Start Time</label>
			<Input
				placeholder="00:00"
				onChange={props.changeValue}
				name="begin"
			/>
			<label name="End Time" className="time">End Time</label>
			<Input
				placeholder="00:00"
				onChange={props.changeValue}
				name="end"
			/>
		</>
	);
};

export default TimeInputForm;
