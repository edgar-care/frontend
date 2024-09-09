export type EnabledMethod2FAType = 'MOBILE' | 'EMAIL' | 'AUTHENTIFICATOR';

export type Method2FAType = {
	enabledMethods: EnabledMethod2FAType[];
	isBackupCodeGenerated: boolean;
};
