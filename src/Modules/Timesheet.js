import axios from "axios";

const saveData = async (begin, end) => {
	const apiUrl = "https://demo.kimai.org/api/";

	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten"
	};
	try {
		const response = await axios.post(
			apiUrl + "timesheets",
			{
				begin: begin,
				end: end,
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
		console.log(response);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export { saveData };
