import { backendApi } from 'services/apiService';

import type { ThirdPartyCredentials } from 'types/dashboard/2fa/thirdPartyCredentialsType';
import type { Enabled2FAMethods, Method2FA } from 'types/dashboard/2fa/enabled2FAMethods';
import {
	Enabled2FAMethodsStoreType,
	GeneratedBackupCodesStoreType,
	ThirdPartyCredentialsStoreType,
} from 'store/types/2fa.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		get2faEnabledMethods: builder.query<Enabled2FAMethods, void>({
			query: () => ``,
			transformResponse: (response: Enabled2FAMethodsStoreType) => ({
				enabledMethods: response.methods,
			}),
		}),

		get2fa3rdPartyCredentials: builder.query<ThirdPartyCredentials, void>({
			query: () => ``,
			transformResponse: (response: ThirdPartyCredentialsStoreType) => ({
				url: response.url,
				secret: response.secret,
			}),
		}),

		enable2faWithEmail: builder.mutation<void, void>({
			query: () => ({
				url: '/dashboard/double_auth/',
				method: 'POST',
				body: {
					method_2fa: 'EMAIL',
				},
			}),
			invalidatesTags: ['patient2faMethod'],
		}),

		enable2faWith3rdParty: builder.mutation<void, string>({
			query: (code) => ({
				url: '/dashboard/double_auth/',
				method: 'POST',
				body: {
					method_2fa: 'AUTHENTIFICATOR',
					code,
				},
			}),
			invalidatesTags: ['patient2faMethod'],
		}),

		enable2faWithMobileApp: builder.mutation<void, string>({
			query: (deviceId) => ({
				url: '/dashboard/double_auth/',
				method: 'POST',
				body: {
					method_2fa: 'MOBILE',
					trusted_device_id: deviceId,
				},
			}),
			invalidatesTags: ['patient2faMethod'],
		}),

		generateBackupCodes: builder.mutation<string[], void>({
			query: () => ({
				url: '/auth/creation_backup_code',
				method: 'POST',
			}),
			invalidatesTags: ['patient2faBackupCodes'],
			transformResponse: (double_auth: GeneratedBackupCodesStoreType) => double_auth.code,
		}),

		disable2faMethod: builder.mutation<void, Method2FA>({
			query: (method) => ({
				url: `/dashboard/2fa/${method}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patient2faMethod'],
		}),
	}),
});

export const {
	useGet2faEnabledMethodsQuery,
	useLazyGet2faEnabledMethodsQuery,
	useGet2fa3rdPartyCredentialsQuery,
	useLazyGet2fa3rdPartyCredentialsQuery,
	useEnable2faWithEmailMutation,
	useEnable2faWith3rdPartyMutation,
	useEnable2faWithMobileAppMutation,
	useGenerateBackupCodesMutation,
	useDisable2faMethodMutation,
} = extendedApi;
