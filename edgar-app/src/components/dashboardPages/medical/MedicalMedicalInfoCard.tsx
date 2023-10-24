import { Box, HStack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import OnboardingMedicalSmallCard from 'components/onboardingPages/medical/OnboardingMedicalSmallCard';

import { type HealthInfos } from 'types/onboarding/OnboardingInfos';

const MedicalMedicalInfoCard = ({ healthInfos }: { healthInfos: HealthInfos }): JSX.Element => {
	const medicalInfosLabels = {
		primaryDoctorName: 'Médecin traitant',
		allergies: 'Allergies',
		diseases: 'Maladies',
		treatmentsInProgress: 'Traitements en cours',
	};

	return (
		<HStack
			p="16px"
			w="100%"
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			spacing="4px"
			borderRadius="8px"
			maxW={{ base: '100%', '2xl': '500px' }}
			minW={{ base: '100%', sm: '300px' }}
		>
			<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
			<VStack pl="8px" w="100%" align="start" spacing={{ base: '8px', lg: '12px' }}>
				{Object.keys(healthInfos).map((key, index) => {
					const info = healthInfos[key as keyof HealthInfos];

					return (
						<Box as="div" key={index}>
							{(key as keyof HealthInfos) === 'primaryDoctorName' ? (
								<Text size={{ base: 'md', lg: 'lg' }}>
									{medicalInfosLabels[key as keyof HealthInfos]}: {info}
								</Text>
							) : (
								<VStack w="100%" align="start">
									<Text size={{ base: 'md', lg: 'lg' }}>
										{medicalInfosLabels[key as keyof HealthInfos]}:
									</Text>
									<Wrap w="100%" gap="8px">
										{(info as string[]).map((value) => (
											<WrapItem key={value}>
												<OnboardingMedicalSmallCard
													title={value}
													onClick={() => {}}
													canBeDeleted={false}
												/>
											</WrapItem>
										))}
									</Wrap>
								</VStack>
							)}
						</Box>
					);
				})}
			</VStack>
		</HStack>
	);
};

export default MedicalMedicalInfoCard;
