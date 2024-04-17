'use client';

import { useState } from 'react';
import { ChakraProvider, useTimeout, VStack } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { Provider } from 'react-redux';

import LoadingScreen from 'components/loader/LoadingScreen';

import theme from 'theme';
import 'theme/index.css';

import { store } from 'store/store';

import AuthProvider from './AuthProvider';
import ChatProvider from './ChatProvider';
import PatientProvider from './PatientProvider';

// TODO: remove ChatProvider & PatientProvider when the simulation flow is refactored
const Providers = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);

	useTimeout(() => setIsLoading(false), 650);

	return (
		<CacheProvider>
			<ChakraProvider theme={theme} resetCSS>
				<Provider store={store}>
					<AuthProvider>
						<ChatProvider>
							<PatientProvider>
								<VStack id="root" bg="blue.100" minH="100vh" h="auto">
									{isLoading ? <LoadingScreen /> : <>{children}</>}
								</VStack>
							</PatientProvider>
						</ChatProvider>
					</AuthProvider>
				</Provider>
			</ChakraProvider>
		</CacheProvider>
	);
};

export default Providers;
