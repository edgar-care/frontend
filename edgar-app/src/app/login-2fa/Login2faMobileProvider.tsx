'use client';

import { useRef, useState } from 'react';

import Login2faMobile from 'libs/login2faMobile';

import Login2faMobileContext from 'contexts/login2faMobile';

const Login2faMobileProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [response, setResponse] = useState<boolean | undefined>(undefined);
	const [code, setCode] = useState<string>('');
	const login2faMobile = useRef<Login2faMobile | null>(null);

	if (!login2faMobile.current) login2faMobile.current = new Login2faMobile(setResponse, setCode);

	return (
		<Login2faMobileContext.Provider value={{ response, code, actions: login2faMobile.current }}>
			{children}
		</Login2faMobileContext.Provider>
	);
};

export default Login2faMobileProvider;
