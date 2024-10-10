import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';

export type DeviceType = {
	id: string;
	city: string;
	region: string;
	country: string;
	lastConnectedTime: number;
	deviceType: DeviceTypeType;
	browserType: string;
};
