import {
	type BaseQueryFn,
	createApi,
	type FetchArgs,
	fetchBaseQuery,
	type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { type SerializedError } from '@reduxjs/toolkit';
import { EventEmitter } from 'events';

import { API_URL } from 'config/constants';

const apiBase = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: (headers) => {
		const token = localStorage.getItem('token');
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export const eventEmitter = new EventEmitter();

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
	const result = await apiBase(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		eventEmitter.emit('logout');
		localStorage.removeItem('token');
	}

	return result;
};

type FetchBaseQueryErrorType = { status: number; data: { message: string } };
export const isFetchBaseQueryErrorType = (err: FetchBaseQueryError | SerializedError): err is FetchBaseQueryErrorType =>
	'status' in err;

export const backendApi = createApi({
	tagTypes: [
		'Example',
		'doctorSlots',
		'doctorAppointments',
		'patients',
		'doctor2faMethod',
		'doctor2faBackupCodes',
		'doctor2faTrustedDevices',
		'doctorAccount',
	],
	reducerPath: 'backendApi',
	baseQuery,
	endpoints: () => ({}),
});
