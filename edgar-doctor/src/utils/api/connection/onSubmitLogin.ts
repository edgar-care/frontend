import { Dispatch, SetStateAction } from 'react';

import { type MessageResponse } from 'types/MessageResponse';

import Auth from 'libs/auth';

import emailValidityChecker from 'utils/emailValidityChecker';

const onSubmitLogin = async (
	email: string,
	password: string,
	setEmailError: Dispatch<SetStateAction<boolean>>,
	setPasswordError: Dispatch<SetStateAction<boolean>>,
	auth: Auth,
): Promise<MessageResponse> => {
	if (!emailValidityChecker(email)) {
		setEmailError(true);
		return { title: 'Adresse mail invalide', status: 'error' };
	}
	if (password.length < 8 || !password) {
		setPasswordError(true);
		return { title: 'Mot de passe invalide', status: 'error' };
	}

	const response = await auth.login(email, password);
	if (response.status === 'success') return { title: 'Connexion réussie', status: 'success' };
	return { title: 'Identifiants incorrects', status: 'error' };
};

export default onSubmitLogin;
