import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_ENDPOINT;
const registerAPI = BACKEND_URL + "api/Participants/register";
const loginAPI = BACKEND_URL + "api/Participants/login";

const login = (newObject) => {
	const request = axios.post(loginAPI, newObject);
	return request.then((response) => response.data);
};

const register = (newObject) => {
	const request = axios.post(registerAPI, newObject);
	return request.then((response) => response);
};

export default { login, register };
