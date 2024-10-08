import { backendApi } from 'services/apiService';

import { type ResetPasswordDTO } from 'store/types/account.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		missingPassword: builder.mutation<void, ResetPasswordDTO>({
			query: (params) => ({
				url: '/auth/missing-password',
				method: 'POST',
				body: {
					email: params.email,
				},
			}),
			invalidatesTags: ['patientAccount'],
		}),
	}),
});

export const { useMissingPasswordMutation } = extendedApi;
