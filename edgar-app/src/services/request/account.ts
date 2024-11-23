import { backendApi } from 'services/apiService';

import { type MissingPasswordDTO, type ResetPasswordDTO, type UpdatePasswordDTO } from 'store/types/account.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		missingPassword: builder.mutation<void, MissingPasswordDTO>({
			query: (params) => ({
				url: '/auth/p/missing-password',
				method: 'POST',
				body: {
					email: params.email,
				},
			}),
		}),
		resetPassword: builder.mutation<void, ResetPasswordDTO>({
			query: (params) => ({
				url: `/auth/p/reset-password?uuid=${params.uuid}`,
				method: 'POST',
				body: {
					new_password: params.password,
				},
			}),
		}),
		updatePassword: builder.mutation<void, UpdatePasswordDTO>({
			query: (params) => ({
				url: '/auth/update_password',
				method: 'POST',
				body: {
					old_password: params.oldPassword,
					new_password: params.newPassword,
				},
			}),
		}),
	}),
});

export const { useMissingPasswordMutation, useResetPasswordMutation, useUpdatePasswordMutation } = extendedApi;
