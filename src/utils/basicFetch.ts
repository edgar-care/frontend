import { FetchMethod } from 'types/FetchMethod';

import { API_URL } from 'config/constants';

const basicFetch = async (endpoint: string, method: FetchMethod, body?: BodyInit): Promise<Response> => {
	const token = localStorage.getItem('token');

	return fetch(`${API_URL}/${endpoint}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${API_URL}`,
			'access-control-allow-credentials': 'true',
			Authorization: token ? `Bearer ${token}` : '',
		},
		body,
	});
};

export default basicFetch;
