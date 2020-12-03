import axios from "axios";

//const baseUrl = "http://localhost:3000/api/citizens";
const baseUrl = "https://pfe-web-dev.azurewebsites.net/api/citizens";
//const baseUrl="https://pfe-backend-dev.azurewebsites.net/api/citizens"

const getAll = (newObject) => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { getAll, create };
