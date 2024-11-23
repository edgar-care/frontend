import { backendApi } from 'services/apiService';

import {
	type MissingPasswordDTO,
	type ResetPasswordDTO,
	type RegisterTypeDTO,
	type UpdatePasswordDTO,
} from 'store/types/account.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		missingPassword: builder.mutation<void, MissingPasswordDTO>({
			query: (params) => ({
				url: '/auth/d/missing-password',
				method: 'POST',
				body: {
					email: params.email,
				},
			}),
		}),

		resetPassword: builder.mutation<void, ResetPasswordDTO>({
			query: (params) => ({
				url: `/auth/d/reset-password?uuid=${params.uuid}`,
				method: 'POST',
				body: {
					new_password: params.password,
				},
			}),
		}),

		register: builder.mutation<string, RegisterTypeDTO>({
			query: (params) => ({
				url: '/auth/d/register',
				method: 'POST',
				body: {
					email: params.email,
					password: params.password,
					name: params.name,
					firstname: params.firstname,
					address: {
						street: params.address.street,
						zip_code: params.address.zipCode,
						country: params.address.country,
						city: params.address.city,
					},
				},
			}),
			transformResponse: (response: { token: string }) => response.token,
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

export const { useMissingPasswordMutation, useResetPasswordMutation, useRegisterMutation, useUpdatePasswordMutation } =
	extendedApi;
