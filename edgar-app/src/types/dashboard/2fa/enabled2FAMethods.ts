export type Method2FA = 'MOBILE' | 'EMAIL' | 'AUTHENTICATOR';

export type Enabled2FAMethods = {
	enabledMethods: Method2FA[];
};
