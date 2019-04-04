import axios from 'axios'

const apiUrl = 'https://demo.kimai.org/api/'

const authenticate = async (username, password) => {
	console.log('login here')
	const path = apiUrl + 'version';
	let headers = {
		"X-AUTH-USER": "susan_super",
		"X-AUTH-TOKEN": "api_kitten"
	}

	try {
		await axios.get(path,
			{
				headers: headers,
				mode: 'cors'
			});
		sessionStorage.setItem('current_user', JSON.stringify({ username: username, password: password }));
		return { authenticated: true }
	} catch (error) {
		return { authenticated: false }
	}
};

export { authenticate }