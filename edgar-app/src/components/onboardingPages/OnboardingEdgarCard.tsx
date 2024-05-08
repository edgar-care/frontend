'use client';

import { Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const OnboardingEdgarCard = ({ title }: { title: string }): JSX.Element => {
	const isTablet = useBreakpointValue({ base: true, lg: false });

	return (
		<VStack
			bg="blue.700"
			borderRadius={{ base: '0px 0px 48px 48px', sm: '48px' }}
			w="100%"
			maxW={{ base: '100%', lg: '700px', '4xl': '800px' }}
			p={{ base: '32px', sm: '32px 64px', md: '64px', lg: '32px 64px' }}
			justify="space-between"
			spacing="64px"
		>
			<Text
				size={{ base: 'boldXl', lg: 'bold2xl' }}
				color="white"
				textAlign="center"
				mt={{ base: '0px', lg: '32px' }}
				id="edgar-onboardingPage-EdgarCard-title-text"
			>
				{title}
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

export default OnboardingEdgarCard;
