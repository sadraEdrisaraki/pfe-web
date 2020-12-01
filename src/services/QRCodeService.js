import axios from "axios";

const baseUrl = 'http://localhost:3000';
// TODO Rajouter API

const getAll = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { getAll, create };
