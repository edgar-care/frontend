import { type Dispatch, type SetStateAction } from 'react';

import type { MessageResponse, MessageResponseWithData } from 'types/MessageResponse';
import type { AvailableMethod, Login2FADevice } from 'types/app/login-2fa/Login2FAResponse';

import Auth from 'libs/auth';

import emailValidityChecker from 'utils/emailValidityChecker';

const onSubmitLogin = async (
	email: string,
	password: string,
	setEmailError: Dispatch<SetStateAction<boolean>>,
	setPasswordError: Dispatch<SetStateAction<boolean>>,
	auth: Auth,
	setAvailableMethods: Dispatch<SetStateAction<AvailableMethod[]>>,
	setDeviceInfos: Dispatch<SetStateAction<Login2FADevice | undefined>>,
): Promise<MessageResponse | MessageResponseWithData> => {
	if (!emailValidityChecker(email)) {
		setEmailError(true);
		return { title: 'Adresse mail invalide', status: 'error' };
	}
	if (password.length < 8 || !password) {
		setPasswordError(true);
		return { title: 'Mot de passe invalide', status: 'error' };
	}

	const response = await auth.login(email, password);
	if ('methods' in response && 'deviceInfos' in response) {
		setAvailableMethods(response.methods);
		setDeviceInfos(response.deviceInfos);
		return {
			title: '2FA required',
			status: 'info',
			data: { methods: response.methods, deviceInfo: response.deviceInfos },
		};
	}
	if (response.status === 'success') return { title: 'Connexion réussie', status: 'success' };
	return { title: 'Identifiants incorrects', status: 'error' };
};

export default onSubmitLogin;
