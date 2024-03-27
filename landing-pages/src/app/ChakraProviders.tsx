'use client';

import { useState } from 'react';
import { ChakraProvider, useTimeout, VStack } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';

import LoadingScreen from 'components/loader/LoadingScreen';

import theme from 'theme';
import 'theme/index.css';

const ChakraProviders = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);

	useTimeout(() => setIsLoading(false), 650);

	return (
		<CacheProvider>
			<ChakraProvider theme={theme} resetCSS>
				{isLoading ? (
					<LoadingScreen />
				) : (
					<VStack px={{ base: '0px', xl: '64px' }} bg="blue.50" minH="100vh">
						{children}
					</VStack>
				)}
			</ChakraProvider>
		</CacheProvider>
	);
};

export default ChakraProviders;
