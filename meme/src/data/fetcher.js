import api from './api';
// executes the fetch request by executing axios request created in api.js

const fetcher = (url, params) => api.get(url, params).then(res => res.data);

export default fetcher;
