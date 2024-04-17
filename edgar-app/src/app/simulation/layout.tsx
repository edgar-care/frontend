'use client';

import { useTimeout, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import LoadingScreen from 'components/loader/LoadingScreen';

const SimulationLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useTimeout(() => {
		setIsLoading(false);
	}, 750);

	return (
		<>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<VStack p={{ base: '0px', sm: '16px', lg: '32px' }} w="100%" h="100vh">
					{children}
				</VStack>
			)}
		</>
	);
};

export default SimulationLayout;
