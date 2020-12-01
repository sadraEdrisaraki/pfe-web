import axios from "axios";

const { HOSTNAME, PORT } = require("../utils/config");

const baseUrl = HOSTNAME + PORT;
// TODO Rajouter API

const login = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const register = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { login, register };
