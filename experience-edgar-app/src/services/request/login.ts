import { backendApi } from 'services/apiService';

import type { Login2faDTO } from 'store/types/login.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		sendLogin2faEmail: builder.mutation<void, string>({
			query: (email) => ({
				url: '/auth/sending_email',
				method: 'POST',
				body: {
					email,
				},
			}),
		}),

		loginWithEmail: builder.mutation<string, Login2faDTO>({
			query: (params) => ({
				url: '/auth/p/email_2fa',
				method: 'POST',
				body: {
					email: params.email,
					password: params.password,
					token_2fa: params.code,
				},
			}),
			transformResponse: (response: { token: string }) => response.token,
		}),

		loginWithAuthenticator: builder.mutation<string, Login2faDTO>({
			query: (params) => ({
				url: '/auth/p/third_party_2fa',
				method: 'POST',
				body: {
					email: params.email,
					password: params.password,
					token_2fa: params.code,
				},
			}),
			transformResponse: (response: { token: string }) => response.token,
		}),

		loginWithMobile: builder.mutation<string, Login2faDTO>({
			query: (params) => ({
				url: '/auth/p/mobile_2fa',
				method: 'POST',
				body: {
					email: params.email,
					password: params.password,
					token_2fa: params.code,
				},
			}),
			transformResponse: (response: { token: string }) => response.token,
		}),

		loginWithBackupCodes: builder.mutation<string, Login2faDTO>({
			query: (params) => ({
				url: '/auth/p/backup_code_2fa',
				method: 'POST',
				body: {
					email: params.email,
					password: params.password,
					backup_code: params.code,
				},
			}),
			transformResponse: (response: { token: string }) => response.token,
		}),
	}),
});

export const {
	useSendLogin2faEmailMutation,
	useLoginWithEmailMutation,
	useLoginWithAuthenticatorMutation,
	useLoginWithMobileMutation,
	useLoginWithBackupCodesMutation,
} = extendedApi;
