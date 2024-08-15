import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';

export type DeviceType = {
	id: string;
	name: string;
	location: string;
	lastConnectedTime: number;
	type: DeviceTypeType;
};
