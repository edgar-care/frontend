export interface ThirdPartyCredentialsStoreType {
	url: string;
	secret: string;
}

export interface GeneratedBackupCodesStoreType {
	id: string;
	code: string[];
}

type Method2FA = 'MOBILE' | 'EMAIL' | 'AUTHENTICATOR';

export interface Enabled2FAMethodsStoreType {
	methods: Method2FA[];
}
