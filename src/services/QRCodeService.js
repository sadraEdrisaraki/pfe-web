import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_ENDPOINT;
const qrCodeAPI = BACKEND_URL + "api/QrCodes";

const getAll = () => {
	const request = axios.get(qrCodeAPI, {headers: {"Authorization" : 'Bearer '+ localStorage.getItem("token")}});
	return request.then((response) => response.data);
};

const create = (newObject) => {
	const request = axios.post(qrCodeAPI, newObject, {headers: {"Authorization" : 'Bearer ' +localStorage.getItem("token")}});
	return request.then((response) => response.data);
};

export default { getAll, create };
