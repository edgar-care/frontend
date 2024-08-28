import { backendApi } from 'services/apiService';

import type { ThirdPartyCredentials } from 'types/dashboard/2fa/thirdPartyCredentialsType';
import { Enabled2FAMethodsStoreType, ThirdPartyCredentialsStoreType } from 'store/types/2fa.type';
import { Method2FAType } from 'types/dashboard/2fa/Method2FAType';
import { DeviceType } from 'types/dashboard/devices/DeviceType';
import { DeviceStoreType } from 'store/types/devices.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		get2faEnabledMethods: builder.query<Method2FAType, void>({
			query: () => '/dashboard/2fa',
			transformResponse: (response: { double_auth: Enabled2FAMethodsStoreType }) => ({
				enabledMethods: response.double_auth.methods,
				isBackupCodeGenerated: response.double_auth.secret !== '',
			}),
			providesTags: ['patient2faMethod'],
		}),

		generate2fa3rdPartyCredentials: builder.mutation<ThirdPartyCredentials, void>({
			query: () => ({
				url: '/2fa/method/third_party/generate',
				method: 'POST',
			}),
			transformResponse: (response: ThirdPartyCredentialsStoreType) => ({
				url: response.otpauth_url,
				secret: response.base32,
			}),
		}),

		enable2faWithEmail: builder.mutation<void, void>({
			query: () => ({
				url: '/2fa/method/email',
				method: 'POST',
				body: {
					method_2fa: 'EMAIL',
				},
			}),
			invalidatesTags: ['patient2faMethod'],
		}),

		enable2faWith3rdParty: builder.mutation<void, string>({
			query: (code) => ({
				url: '/2fa/method/third_party',
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
				url: '/2fa/method/mobile',
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
			transformResponse: (response: { double_auth: string[] }) => response.double_auth,
		}),

		// ===== TRUSTED DEVICES =====
		getTrustedDevices: builder.query<DeviceType[], void>({
			query: () => '/dashboard/2fa/devices',
			transformResponse: (response: { devices: DeviceStoreType[] }) =>
				response.devices.map((device) => ({
					id: device.id,
					type: 'DESKTOP',
					city: device.city,
					region: device.region,
					country: device.country,
					lastConnectedTime: device.date,
				})),
			providesTags: ['patient2faTrustedDevices'],
		}),

		getTrustedDeviceById: builder.query<DeviceType, string>({
			query: (id) => `/dashboard/2fa/device/${id}`,
			transformResponse: (response: { double_auth: DeviceStoreType }) => ({
				id: response.double_auth.id,
				type: 'DESKTOP',
				city: response.double_auth.city,
				region: response.double_auth.region,
				country: response.double_auth.country,
				lastConnectedTime: response.double_auth.date,
			}),
			providesTags: ['patient2faTrustedDevices'],
		}),

		addTrustedDevice: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/2fa/device/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['patient2faTrustedDevices'],
		}),

		removeTrustedDevice: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/2fa/device/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['patient2faTrustedDevices'],
		}),
	}),
});

export const {
	useGet2faEnabledMethodsQuery,
	useLazyGet2faEnabledMethodsQuery,
	useGenerate2fa3rdPartyCredentialsMutation,
	useEnable2faWithEmailMutation,
	useEnable2faWith3rdPartyMutation,
	useEnable2faWithMobileAppMutation,
	useGenerateBackupCodesMutation,
	useGetTrustedDevicesQuery,
	useLazyGetTrustedDevicesQuery,
	useGetTrustedDeviceByIdQuery,
	useLazyGetTrustedDeviceByIdQuery,
	useAddTrustedDeviceMutation,
	useRemoveTrustedDeviceMutation,
} = extendedApi;
