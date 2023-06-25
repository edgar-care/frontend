'use client';

import { ChakraProvider, VStack } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';

import theme from 'theme';
import 'theme/index.css';

import AuthProvider from './AuthProvider';
import ChatProvider from './ChatProvider';
import PatientProvider from './PatientProvider';

// TODO: remove ChatProvider & PatientProvider when the simulation flow is refactored
const ChakraProviders = ({ children }: { children: JSX.Element }): JSX.Element => (
	<CacheProvider>
		<ChakraProvider theme={theme} resetCSS>
			<AuthProvider>
				<ChatProvider>
					<PatientProvider>
						<VStack px={{ base: '0px', xl: '64px' }} bg="blue.50" minH="100vh">
							{children}
						</VStack>
					</PatientProvider>
				</ChatProvider>
			</AuthProvider>
		</ChakraProvider>
	</CacheProvider>
);

export default ChakraProviders;
