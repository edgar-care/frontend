import { Box, HStack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import OnboardingMedicalSmallCard from 'components/onboardingPages/medical/OnboardingMedicalSmallCard';

import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';

const MedicalMedicalInfoCard = ({ medicalInfos }: { medicalInfos: MedicalInfos }): JSX.Element => {
	const medicalInfosLabels = {
		primaryDoctorName: 'Médecin traitant',
		allergies: 'Allergies',
		diseases: 'Maladies',
		treatmentsInProgress: 'Traitements en cours',
	};

	return (
		<HStack p="16px" w="100%" bg="white" border="2px solid" borderColor="blue.200" spacing="4px" borderRadius="8px">
			<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
			<VStack pl="8px" w="100%" align="start" spacing="12px">
				{Object.keys(medicalInfos).map((key, index) => {
					const info = medicalInfos[key as keyof MedicalInfos];

					return (
						<>
							{(key as keyof MedicalInfos) === 'primaryDoctorName' ? (
								<Text key={index} size="lg">
									{medicalInfosLabels[key as keyof MedicalInfos]}: {info}
								</Text>
							) : (
								<VStack w="100%" align="start">
									<Text key={index} size="lg">
										{medicalInfosLabels[key as keyof MedicalInfos]}:
									</Text>
									<Wrap w="100%" gap="8px">
										{(info as string[]).map((value) => (
											<WrapItem>
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
						</>
					);
				})}
			</VStack>
		</HStack>
	);
};

export default MedicalMedicalInfoCard;
