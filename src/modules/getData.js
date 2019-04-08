import axios from "axios";

const getData = async () => {
	const apiUrl = "https://demo.kimai.org/api/";
	const path = apiUrl + "timesheets";

	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten",
	};
	try {
		const response = await axios.get(path, {
			headers: headers,
			mode: "cors"
		});
		return response;
	} catch (error) {
		return error;
	}
};

export { getData };
