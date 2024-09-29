import { backendApi } from 'services/apiService';

import { type MissingPasswordDTO, type ResetPasswordDTO } from 'store/types/account.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		missingPassword: builder.mutation<void, MissingPasswordDTO>({
			query: (params) => ({
				url: '/auth/missing-password',
				method: 'POST',
				body: {
					email: params.email,
				},
			}),
			invalidatesTags: ['patientAccount'],
		}),
		resetPassword: builder.mutation<void, ResetPasswordDTO>({
			query: (params) => ({
				url: `/auth/reset-password?uuid=${params.uuid}`,
				method: 'POST',
				body: {
					new_password: params.password,
				},
			}),
			invalidatesTags: ['patientAccount'],
		}),
	}),
});

export const { useMissingPasswordMutation, useResetPasswordMutation } = extendedApi;
