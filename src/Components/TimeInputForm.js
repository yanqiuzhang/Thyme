import React from "react";
import { Input } from "semantic-ui-react";

const TimeInputForm = props => {
	return (
		<>
			<label name="Start Time">Start Time</label>
			<Input
				placeholder="YYYY-MM-DD 00:00"
				onChange={props.changeValue}
				name="begin"
			/>
			<label name="End Time">End Time</label>
			<Input
				placeholder="YYYY-MM-DD 00:00"
				onChange={props.changeValue}
				name="end"
			/>
		</>
	);
};

export default TimeInputForm;
