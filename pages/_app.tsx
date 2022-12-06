import type { AppProps } from 'next/app';
import { Center, ChakraProvider, useToast } from '@chakra-ui/react';
import Head from 'next/head';

import theme from 'theme';
import 'theme/index.css';
import { useEffect, useState } from 'react';
import { ChaoticOrbit } from '@uiball/loaders';
import AuthContext from '../src/contexts/auth';
import Auth from '../src/libs/auth';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [auth, setAuth] = useState<Auth | undefined>(undefined);

	const toast = useToast({ duration: 2000, isClosable: true });

	useEffect(() => {
		if (!auth) {
			try {
				setAuth(new Auth());
			} catch (e) {
				toast({
					title: 'Erreur interne au serveur',
					status: 'error',
				});
			}
		}
	}, []);

	if (!auth) {
		return (
			<Center>
				<ChaoticOrbit color="pink.500" />
			</Center>
		);
	}

	return (
		<>
			<Head>
				<title>edgar.care</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/assets/edgar.care-logo-tabs.svg" />
			</Head>
			<ChakraProvider theme={theme} resetCSS>
				<AuthContext.Provider value={auth}>
					<Component {...pageProps} />
				</AuthContext.Provider>
			</ChakraProvider>
		</>
	);
};

export default App;
