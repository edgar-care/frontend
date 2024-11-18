'use client';

import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import AuthContext from 'contexts/auth';

import Auth from 'libs/auth';

import type { AvailableMethod, Login2FADevice } from 'types/app/login-2fa/Login2FAResponse';

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [auth] = useState<Auth>(new Auth());
	const [availableMethods, setAvailableMethods] = useState<AvailableMethod[]>([]);
	const [deviceInfos, setDeviceInfos] = useState<Login2FADevice | undefined>(undefined);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const toast = useToast({ duration: 2000, isClosable: true });

	if (!auth)
		toast({
			title: 'Une erreur est survenue',
			status: 'error',
		});

	return (
		<AuthContext.Provider
			value={{
				auth,
				availableMethods,
				deviceInfos,
				setAvailableMethods,
				setDeviceInfos,
				email,
				setEmail,
				password,
				setPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
