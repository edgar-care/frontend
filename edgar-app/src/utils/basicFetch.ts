import { API_URL } from 'config/constants';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { FetchMethod } from 'types/FetchMethod';

const basicFetch = async (
	endpoint: string,
	method: FetchMethod,
	body?: BodyInit,
	router?: AppRouterInstance,
	authRedirectionUrl = '/dashboard/connection/login',
): Promise<Response> => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/${endpoint}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${API_URL}`,
			'access-control-allow-credentials': 'true',
			Authorization: token ? `Bearer ${token}` : '',
		},
		body,
	});

	if (router && response.status === 401) router.push(authRedirectionUrl);

	return response;
};

export default basicFetch;
