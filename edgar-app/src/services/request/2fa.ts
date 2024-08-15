import { backendApi } from 'services/apiService';

import type { ThirdPartyCredentials } from 'types/dashboard/2fa/thirdPartyCredentialsType';
import {
	Enabled2FAMethodsStoreType,
	GeneratedBackupCodesStoreType,
	ThirdPartyCredentialsStoreType,
} from 'store/types/2fa.type';
import { Enabled2FAMethods } from 'types/dashboard/2fa/enabled2FAMethods';

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
} = extendedApi;
