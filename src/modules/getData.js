const getData = () => {
	const apiUrl = "https://demo-stable.kimai.org/api/";
	const path = apiUrl + "timesheets";
	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten",
		// "Access-Control-Allow-Origin": "*",
		// Accept: "application/json",
		// "Content-Type": "application/json"
	};
	return new Promise((resolve, ) => {
		axios.get(path,
			{
				headers: headers,
				mode: "cors"
			})

			.then(response => {
				resolve(response);
			});
	});
};

export { getData };