'use client';

import { ChakraProvider, VStack } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';

import theme from 'theme';
import 'theme/index.css';

const ChakraProviders = ({ children }: { children: JSX.Element }): JSX.Element => (
	<CacheProvider>
		<ChakraProvider theme={theme} resetCSS>
			<VStack px={{ base: '0px', xl: '64px' }} bg="blue.50" minH="100vh">
				{children}
			</VStack>
		</ChakraProvider>
	</CacheProvider>
);

export default ChakraProviders;
