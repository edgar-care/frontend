import { backendApi } from 'services/apiService';

import type { Enabled2FAMethodsStoreType, ThirdPartyCredentialsStoreType } from 'store/types/2fa.type';
import type { DeviceStoreType } from 'store/types/devices.type';

import type { ThirdPartyCredentials } from 'types/app/dashboard/2fa/thirdPartyCredentialsType';
import type { EnabledMethod2FAType, Method2FAType } from 'types/app/dashboard/2fa/Method2FAType';
import type { DeviceType } from 'types/app/dashboard/devices/DeviceType';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		get2faEnabledMethods: builder.query<Method2FAType, void>({
			query: () => '/dashboard/2fa',
			transformResponse: (response: { double_auth: Enabled2FAMethodsStoreType }) => ({
				enabledMethods: response.double_auth.methods,
				isBackupCodeGenerated: response.double_auth.secret !== '',
			}),
			providesTags: ['doctor2faMethod'],
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
			invalidatesTags: ['doctor2faMethod'],
		}),

		enable2faWith3rdParty: builder.mutation<void, string>({
			query: (code) => ({
				url: '/2fa/method/third_party',
				method: 'POST',
				body: {
					token: code,
				},
			}),
			invalidatesTags: ['doctor2faMethod'],
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
			invalidatesTags: ['doctor2faMethod'],
		}),

		generateBackupCodes: builder.mutation<string[], void>({
			query: () => ({
				url: '/auth/creation_backup_code',
				method: 'POST',
			}),
			invalidatesTags: ['doctor2faBackupCodes', 'doctor2faMethod'],
			transformResponse: (response: { double_auth: string[] }) => response.double_auth,
		}),

		// ===== TRUSTED DEVICES =====
		getTrustedDevices: builder.query<DeviceType[], void>({
			query: () => '/dashboard/2fa/devices',
			transformResponse: (response: { devices?: DeviceStoreType[] }) =>
				response.devices?.map((device) => ({
					id: device.id,
					deviceType: device.device_type,
					browserType: device.browser,
					city: device.city,
					region: device.region,
					country: device.country,
					lastConnectedTime: device.date * 1000,
				})) || [],
			providesTags: ['doctor2faTrustedDevices', 'doctorDevice', 'doctor2faMethod'],
		}),

		getTrustedDeviceById: builder.query<DeviceType, string>({
			query: (id) => `/dashboard/2fa/device/${id}`,
			transformResponse: (response: { double_auth: DeviceStoreType }) => ({
				id: response.double_auth.id,
				deviceType: response.double_auth.device_type,
				browserType: response.double_auth.browser,
				city: response.double_auth.city,
				region: response.double_auth.region,
				country: response.double_auth.country,
				lastConnectedTime: response.double_auth.date * 1000,
			}),
			providesTags: ['doctor2faTrustedDevices', 'doctorDevice', 'doctor2faMethod'],
		}),

		addTrustedDevice: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/2fa/device/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['doctor2faTrustedDevices', 'doctor2faMethod'],
		}),

		removeTrustedDevice: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/2fa/device/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['doctor2faTrustedDevices', 'doctor2faMethod'],
		}),

		disable2faMethod: builder.mutation<void, EnabledMethod2FAType>({
			query: (method) => ({
				url: `/dashboard/2fa/${method}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['doctor2faMethod'],
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
	useDisable2faMethodMutation,
} = extendedApi;
