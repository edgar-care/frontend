import type { DeviceBrowserType } from 'types/dashboard/devices/DeviceBrowserType';

const deviceBrowserTypeName: Record<DeviceBrowserType, string> = {
	CHROME: 'Google Chrome',
	EDGE: 'Microsoft Edge',
	FIREFOX: 'Mozilla Firefox',
	OPERA: 'Opera',
	SAFARI: 'Safari',
	OTHER: 'Autre',
};

export default deviceBrowserTypeName;
