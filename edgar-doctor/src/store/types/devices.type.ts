import type { DeviceTypeType } from 'types/app/dashboard/devices/DeviceTypeType';

export interface DeviceStoreType {
	id: string;
	ip_address: string;
	city: string;
	region: string;
	country: string;
	date: number;
	device_type: DeviceTypeType;
	browser: string;
	trusted_device: boolean;
}
