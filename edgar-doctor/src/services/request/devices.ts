import { backendApi } from 'services/apiService';

import type { DeviceType } from 'types/app/dashboard/devices/DeviceType';

import type { DeviceStoreType } from 'store/types/devices.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getConnectedDevices: builder.query<DeviceType[], void>({
			query: () => 'dashboard/devices',
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
			providesTags: ['doctorDevice'],
		}),

		getConnectedDeviceById: builder.query<DeviceType, string>({
			query: (id) => `dashboard/device/${id}`,
			transformResponse: (response: { double_auth: DeviceStoreType }) => ({
				id: response.double_auth.id,
				deviceType: response.double_auth.device_type,
				browserType: response.double_auth.browser,
				city: response.double_auth.city,
				region: response.double_auth.region,
				country: response.double_auth.country,
				lastConnectedTime: response.double_auth.date * 1000,
			}),
			providesTags: ['doctorDevice'],
		}),

		removeDevice: builder.mutation<void, string>({
			query: (id) => ({
				url: `/dashboard/device/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['doctorDevice'],
		}),
	}),
});

export const {
	useGetConnectedDevicesQuery,
	useLazyGetConnectedDevicesQuery,
	useGetConnectedDeviceByIdQuery,
	useLazyGetConnectedDeviceByIdQuery,
	useRemoveDeviceMutation,
} = extendedApi;
