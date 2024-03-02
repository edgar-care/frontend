import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const MedicalPersonalInfoCard = ({ personalInfos }: { personalInfos: PersonalInfos }): JSX.Element => {
	const personalInfosLabels = {
		firstname: 'Prénom',
		name: 'Nom',
		birthDate: 'Date de naissance',
		sex: 'Sexe',
		size: 'Taille',
		weight: 'Poids',
		primaryDoctorId: 'Médecin traitant',
		hasMedicalAntecedents: 'Antécédents médicaux',
	};
	const sexLabel: { [key: string]: string } = {
		MALE: 'Masculin',
		FEMALE: 'Féminin',
		OTHER: 'Autre',
	};

	const displayPersonalInfos = (key: string, info: string | number | boolean): string => {
		if ((key as keyof PersonalInfos) === 'birthDate') return new Date(info as string).toLocaleDateString('fr-FR');
		if ((key as keyof PersonalInfos) === 'sex') return sexLabel[info as string];
		if ((key as keyof PersonalInfos) === 'size') return `${((info as number) / 100).toPrecision(3)}m`;
		if ((key as keyof PersonalInfos) === 'weight') return `${info}kg`;
		return info.toString();
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
			maxW={{ base: '100%', '2xl': '400px' }}
			minW={{ base: '100%', sm: '300px' }}
		>
			<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
			<VStack pl="8px" w="100%" align="start" spacing={{ base: '8px', lg: '12px' }}>
				{Object.keys(personalInfos).map((key, index) => {
					const info = personalInfos[key as keyof PersonalInfos];

					return (
						<Text
							key={index}
							size={{ base: 'md', lg: 'lg' }}
							id={`edgar-dashboardMedicalPage-personalInfoCard-${key as keyof PersonalInfos}-text`}
						>
							{personalInfosLabels[key as keyof PersonalInfos]}: {displayPersonalInfos(key, info)}
						</Text>
					);
				})}
			</VStack>
		</HStack>
	);
};

export default MedicalPersonalInfoCard;
