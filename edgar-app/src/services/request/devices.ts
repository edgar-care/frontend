import { backendApi } from 'services/apiService';

import type { DeviceType } from 'types/dashboard/devices/DeviceType';

import type { DeviceStoreType } from 'store/types/devices.type';

const extendedApi = backendApi.injectEndpoints({
	endpoints: (builder) => ({
		getConnectedDevices: builder.query<DeviceType[], void>({
			query: () => 'dashboard/devices',
			transformResponse: (response: { devices: DeviceStoreType[] }) =>
				response.devices.map((device) => ({
					id: device.id,
					city: device.city,
					region: device.region,
					country: device.country,
					lastConnectedTime: device.date,
					type: 'DESKTOP',
				})),
		}),

		getConnectedDeviceById: builder.query<DeviceType, string>({
			query: (id) => `dashboard/device/${id}`,
			transformResponse: (response: { double_auth: DeviceStoreType }) => ({
				id: response.double_auth.id,
				city: response.double_auth.city,
				region: response.double_auth.region,
				country: response.double_auth.country,
				lastConnectedTime: response.double_auth.date,
				type: 'DESKTOP',
			}),
		}),
	}),
});

export const {
	useGetConnectedDevicesQuery,
	useLazyGetConnectedDevicesQuery,
	useGetConnectedDeviceByIdQuery,
	useLazyGetConnectedDeviceByIdQuery,
} = extendedApi;
