import { backendApi } from 'services/apiService';

import { type MissingPasswordDTO, type ResetPasswordDTO, type RegisterTypeDTO } from 'store/types/account.type';

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
		}),
		resetPassword: builder.mutation<void, ResetPasswordDTO>({
			query: (params) => ({
				url: `/auth/reset-password?uuid=${params.uuid}`,
				method: 'POST',
				body: {
					new_password: params.password,
				},
			}),
		}),
		register: builder.mutation<void, RegisterTypeDTO>({
			query: (params) => ({
				url: '/auth/d/register',
				method: 'POST',
				body: {
					email: params.email,
					password: params.password,
					name: params.name,
					firstname: params.firstname,
					adress: {
						street: params.address.street,
						zip_code: params.address.zip_code,
						country: params.address.country,
						city: params.address.city,
					},
				},
			}),
		}),
	}),
});

export const { useMissingPasswordMutation, useResetPasswordMutation, useRegisterMutation } = extendedApi;
