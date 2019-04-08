import axios from 'axios';

const getData = async () => {
	const apiUrl = "https://demo.kimai.org/api/";
	const path = apiUrl + 'timesheets';

	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten",
		"Access-Control-Allow-Origin": "*",
		Accept: "application/json",
		"Content-Type": "application/json"
	};
	try {
		const response = await axios.get(path,
			{
				headers: headers,
				mode: "cors"
			}
		);
		console.log(response);
		return response;
	} catch (error) {
		return error
	}
};

export { getData };
