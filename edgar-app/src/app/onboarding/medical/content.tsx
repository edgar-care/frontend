'use client';

import { HStack, useBreakpointValue, VStack } from '@chakra-ui/react';

import OnboardingEdgarCard from 'components/onboardingPages/OnboardingEdgarCard';
import OnboardingMedicalFields from 'components/onboardingPages/medical/OnboardingMedicalFields';

const OnboardingMedicalContent = (): JSX.Element => {
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
					spacing="0px"
					h="100%"
				>
					<OnboardingEdgarCard title="J’ai besoin de vos informations médicales afin de compléter votre espace patient" />
					<OnboardingMedicalFields />
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
					h="100%"
					maxW="1750px"
				>
					<OnboardingEdgarCard title="J’ai besoin de vos informations médicales afin de compléter votre espace patient" />
					<OnboardingMedicalFields />
				</HStack>
			)}
		</>
	);
};

export default OnboardingMedicalContent;
