import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_ENDPOINT;
const qrCodeAPI = BACKEND_URL + "api/QrCodes";
const test = BACKEND_URL + "api/Citizens";

const getAll = () => {
	const request = axios.get(test);
	return request.then((response) => response.data);
};

const create = (newObject) => {
	const request = axios.post(qrCodeAPI, newObject);
	return request.then((response) => response.data);
};

export default { getAll, create };
