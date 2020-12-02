import axios from "axios";

const baseUrl = 'http://localhost:3000';
// TODO Rajouter API

const login = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const register = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default {login, register };