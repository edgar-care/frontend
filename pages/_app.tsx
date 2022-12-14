import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Center, ChakraProvider, Img, useToast, VStack } from '@chakra-ui/react';
import Head from 'next/head';

import { MrMiyagi } from '@uiball/loaders';

import PatientContext from 'contexts/user';
import AuthContext from 'contexts/auth';

import Auth from 'libs/auth';

import { PatientInfos } from 'types/PatientInfos';

import theme from 'theme';
import 'theme/index.css';
import colors from 'theme/foundations/colors';

import jwtDecode from 'jwt-decode';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [auth, setAuth] = useState<Auth | undefined>(undefined);
	const [patientInfos, setPatientInfos] = useState<PatientInfos | undefined>(undefined);
	const [patientLoading, setPatientLoading] = useState(true);

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
		if (patientLoading) {
			try {
				// basicFetch('patient', 'GET').then((response) => {
				// 	if (response.status === 200) response.json().then((data) => setPatientInfos(data));
				// 	setPatientLoading(false);
				// });
				const token = localStorage.getItem('token');

				if (token) setPatientInfos((jwtDecode(token) as { user: PatientInfos }).user);
				setPatientLoading(false);
			} catch (e) {
				setPatientLoading(false);
				toast({
					title: 'Erreur interne au serveur',
					status: 'error',
				});
			}
		}
	}, []);

	if (!auth && patientLoading) {
		return (
			<Center h="100vh" w="100%">
				<VStack spacing="128px">
					<Img src="/assets/edgar.care-logo.svg" w="350px" />
					<MrMiyagi size={64} color={colors.blue[900]} />
				</VStack>
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
					<PatientContext.Provider value={{ infos: patientInfos, setInfos: setPatientInfos }}>
						<Component {...pageProps} />
					</PatientContext.Provider>
				</AuthContext.Provider>
			</ChakraProvider>
		</>
	);
};

export default App;
