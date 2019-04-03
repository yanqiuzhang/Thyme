import axios from 'axios'

const apiUrl = 'https://demo.kimai.org/api/'

const authenticate = async (username, password) => {
    console.log('login here')
    const path = apiUrl + 'version';
    let headers = {
      "X-AUTH-USER": "susan_super",
      "X-AUTH-TOKEN": "api_kitten"
    };
    try {
      const response = axios.post(path, {username: username, password: password},
      {
        headers: headers
      });
      const {authenticate} = await response;
			console.log(authenticate);
      return {authenticated: true}
    } catch (error) {
      console.error(error);
    }

};

export { authenticate }