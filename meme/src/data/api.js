import axios from "axios";

const URL = "http://3.248.183.204:4000";

const API = axios.create({
	baseURL: URL,
	timeout: 10000,
	headers: {
		"content-type": "application/json",
	},
});

export default API;
