import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

import { API_URL } from 'config/constants';

import { RootState } from 'store/store';

const apiBase = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: (headers, { getState }) => {
		// @ts-ignore
		const { token } = (getState() as RootState).auth;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

type FetchBaseQueryErrorType = { status: number; data: { message: string } };
export const isFetchBaseQueryErrorType = (err: FetchBaseQueryError | SerializedError): err is FetchBaseQueryErrorType =>
	'status' in err;

export const backendApi = createApi({
	tagTypes: ['Example'],
	reducerPath: 'backendApi',
	baseQuery: apiBase,
	endpoints: () => ({}),
});
