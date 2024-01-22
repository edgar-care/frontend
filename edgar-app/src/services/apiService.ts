import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

import { API_URL } from 'config/constants';

const apiBase = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: (headers) => {
		// @ts-ignore
		// const { token } = (getState() as RootState).auth;
		const token = localStorage.getItem('token');
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
	tagTypes: ['Example', 'patientAppointments', 'doctorAppointments', 'patientMedicalFolder', 'patientDocuments', 'patientSimulation'],
	reducerPath: 'backendApi',
	baseQuery: apiBase,
	endpoints: () => ({}),
});
