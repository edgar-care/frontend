import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';
import type { DeviceBrowserType } from 'types/dashboard/devices/DeviceBrowserType';

export type DeviceType = {
	id: string;
	city: string;
	region: string;
	country: string;
	lastConnectedTime: number;
	deviceType: DeviceTypeType;
	browserType: DeviceBrowserType;
};
