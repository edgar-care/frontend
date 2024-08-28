import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';
import type { DeviceBrowserType } from 'types/dashboard/devices/DeviceBrowserType';

export interface DeviceStoreType {
	id: string;
	ip_address: string;
	city: string;
	region: string;
	country: string;
	date: number;
	device_type: DeviceTypeType;
	browser: DeviceBrowserType;
	trusted_device: boolean;
}
