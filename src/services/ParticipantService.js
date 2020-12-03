import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;
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