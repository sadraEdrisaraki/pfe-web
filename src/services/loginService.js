import axios from "axios";

const { HOSTNAME, PORT } = require("../utils/config");

const baseUrl = HOSTNAME + PORT;

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { create };
