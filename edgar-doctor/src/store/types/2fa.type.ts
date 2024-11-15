export interface ThirdPartyCredentialsStoreType {
	base32: string;
	otpauth_url: string;
}

type Method2FA = 'MOBILE' | 'EMAIL' | 'AUTHENTIFICATOR';

export interface Enabled2FAMethodsStoreType {
	id: string;
	methods: Method2FA[];
	secret: string;
	code: string;
}
