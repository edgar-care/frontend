'use client';

import { ChakraProvider, VStack } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { Provider } from 'react-redux';

import theme from 'theme';
import 'theme/index.css';

import { store } from 'store/store';

import AuthProvider from './AuthProvider';

const Providers = ({ children }: { children: JSX.Element }): JSX.Element => (
	<CacheProvider>
		<ChakraProvider theme={theme} resetCSS>
			<Provider store={store}>
				<AuthProvider>
					<VStack bg="blue.100" height="100%">
						{children}
					</VStack>
				</AuthProvider>
			</Provider>
		</ChakraProvider>
	</CacheProvider>
);

export default Providers;
