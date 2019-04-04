import axios from "axios";
import moment from 'moment';

const saveData = async (begin, end) => {
	const apiUrl = "https://demo-stable.kimai.org/api/";
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";

	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten",
		"Access-Control-Allow-Origin": "*",
		'Accept': 'application/json',
    'Content-Type': 'application/json',
	};
	try {
		const response = await axios.post(
			proxyUrl + apiUrl + "timesheets",
			{
				begin: moment(begin, "hh:mm").format('YYYY-MM-DD hh:mm'),
				end: moment(end, "hh:mm").format('YYYY-MM-DD hh:mm'),
				customer: 1,
				project: 1,
				activity: 1,
				description: "string",
				fixedRate: "1.0",
				hourlyRate: "1.0"
			},
			{
				headers: headers,
				mode: "cors"
			}
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export { saveData };
