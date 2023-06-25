'use client';

import { useState } from 'react';

import AuthContext from 'contexts/auth';

import Auth from 'libs/auth';
import { useToast } from '@chakra-ui/react';

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [auth] = useState<Auth>(new Auth());

	const toast = useToast({ duration: 2000, isClosable: true });

	if (!auth)
		toast({
			title: 'Une erreur est survenue',
			status: 'error',
		});

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
