'use client';

import { HStack, VStack, useBreakpointValue } from '@chakra-ui/react';

import OnboardingEdgarCard from 'components/onboardingPages/OnboardingEdgarCard';
import OnboardingPersonalFields from 'components/onboardingPages/personal/OnboardingPersonalFields';

const OnboardingPersonalPageContent = (): JSX.Element => {
	const isTablet = useBreakpointValue({ base: true, lg: false });

	return (
		<>
			{isTablet ? (
				<VStack
					bg="white"
					borderRadius={{ base: '0px', sm: '48px' }}
					w="100%"
					border={{ base: '0px', sm: '2px solid' }}
					borderColor={{ sm: 'blue.200' }}
					align="stretch"
					spacing="16px"
					h="100%"
				>
					<OnboardingEdgarCard title="J’ai besoin de vos informations personnelles afin de remplir votre espace patient" />
					<OnboardingPersonalFields />
				</VStack>
			) : (
				<HStack
					bg="white"
					borderRadius="48px"
					w="100%"
					border="2px solid"
					borderColor="blue.200"
					align="stretch"
					spacing="0px"
					maxW="1750px"
				>
					<OnboardingEdgarCard title="J’ai besoin de vos informations personnelles afin de remplir votre espace patient" />
					<OnboardingPersonalFields />
				</HStack>
			)}
		</>
	);
};

export default OnboardingPersonalPageContent;
