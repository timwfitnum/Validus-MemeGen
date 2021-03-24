import api from './api';

const fetcher = (url, params) => api.get(url, params).then(res => res.data);

export default fetcher;
