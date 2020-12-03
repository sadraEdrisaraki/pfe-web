import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_ENDPOINT;
const createQrCodeAPI = BACKEND_URL + "api/QrCodes";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { getAll, create };
