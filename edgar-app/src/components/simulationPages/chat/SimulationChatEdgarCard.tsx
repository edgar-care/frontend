'use client';

import { Box, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import { type SimulationChatEdgarCardType } from 'types/simulation/chat/SimulationChatEdgarCardType';

const SimulationChatEdgarCard = ({ type }: { type: SimulationChatEdgarCardType }): JSX.Element => {
	const edgarImagePaths = {
		START: '/assets/Edgars/edgar-high-five.svg',
		THINKING: '/assets/Edgars/edgar-thinking.svg',
		SMILE: '/assets/Edgars/edgar-simple-smile.svg',
	};

	return (
		<VStack
			bg="blue.700"
			borderRadius="48px"
			w="100%"
			h="100%"
			maxW="600px"
			p={{ base: '32px', sm: '32px 64px', md: '64px', lg: '32px 64px' }}
			justify="space-between"
			spacing="64px"
		>
			<Box as="span" />
			<Image src={edgarImagePaths[type]} alt="Edgar" width={280} height={300} />
			<Image src="/assets/logo/white-edgar-logo.svg" alt="edgar logo" width={125} height={63} />
		</VStack>
	);
};

export default SimulationChatEdgarCard;
