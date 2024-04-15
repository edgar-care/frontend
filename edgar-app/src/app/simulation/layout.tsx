'use client';

import { VStack } from '@chakra-ui/react';

const SimulationLayout = ({ children }: { children: JSX.Element }): JSX.Element => (
	<VStack p={{ base: '0px', sm: '16px', lg: '32px' }} w="100%" h="100%" overflowY="auto">
		{children}
	</VStack>
);

export default SimulationLayout;
