'use client';

import { Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const ConnectionEdgarCard = (): JSX.Element => {
	const isTablet = useBreakpointValue({ base: true, lg: false });

	return (
		<VStack
			bg="blue.700"
			borderRadius={{ base: '0px 0px 48px 48px', sm: '48px' }}
			w="100%"
			p={{ base: '32px', sm: '32px 64px', md: '64px', lg: '32px 64px' }}
			justify="space-between"
		>
			<Text
				size={{ base: '3xl', lg: '4xl' }}
				color="white"
				textAlign={{ base: 'center', lg: 'start' }}
				mt={{ base: '0px', lg: '32px' }}
				id="edgar-loginPage-EdgarCard-title-text"
			>
				Bienvenue sur la plateforme edgar
			</Text>
			{!isTablet && (
				<>
					<Image src="/assets/Edgars/edgar-high-five.svg" alt="Edgar high five" width={280} height={300} />
					<Image src="/assets/logo/white-edgar-logo.svg" alt="edgar logo" width={125} height={63} />
				</>
			)}
		</VStack>
	);
};

export default ConnectionEdgarCard;
