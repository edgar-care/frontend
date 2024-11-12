export type AvailableMethod = 'EMAIL' | 'MOBILE' | 'AUTHENTIFICATOR';

export type Login2FADevice = {
	browser: string;
	location: string;
	os: string;
};

export type Login2FAResponse = {
	methods: AvailableMethod[];
	deviceInfos: Login2FADevice;
};
