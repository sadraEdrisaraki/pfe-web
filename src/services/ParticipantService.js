import axios from "axios";

const baseUrl = 'http://localhost:3000';
//const baseUrl = 'https://pfe-backend-dev.azurewebsites.net/api/citizens';
// TODO Rajouter API
const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
}

const login = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const register = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { getAll,login, register };