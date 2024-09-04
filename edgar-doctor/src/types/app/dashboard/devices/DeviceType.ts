import type { DeviceTypeType } from 'types/app/dashboard/devices/DeviceTypeType';

export type DeviceType = {
	id: string;
	city: string;
	region: string;
	country: string;
	lastConnectedTime: number;
	deviceType: DeviceTypeType;
	browserType: string;
};
