import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import type { PatientMedicalType, PatientPersonalType } from 'types/dashboard/medical/PatientMedicalType';
import { type PatientSexType } from 'types/dashboard/medical/PatientSexType';

const MedicalPersonalInfoCard = ({ medicalInfos }: { medicalInfos: PatientMedicalType }): JSX.Element => {
	const personalInfosLabels = {
		firstname: 'Prénom',
		name: 'Nom',
		birthdate: 'Date de naissance',
		sex: 'Sexe',
		height: 'Taille',
		weight: 'Poids',
	};
	const sexLabel: { [key: string]: string } = {
		MALE: 'Masculin',
		FEMALE: 'Féminin',
		OTHER: 'Autre',
	};

	const displayPersonalInfos = (key: string, info: string | number): string => {
		if ((key as keyof PatientPersonalType) === 'birthdate') return new Date(info).toLocaleDateString('fr-FR');
		if ((key as keyof PatientPersonalType) === 'sex') return sexLabel[info as PatientSexType];
		if ((key as keyof PatientPersonalType) === 'height') return `${(info as number).toPrecision(3)}m`;
		if ((key as keyof PatientPersonalType) === 'weight') return `${info}kg`;
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
				{Object.keys({
					name: medicalInfos.name,
					firstname: medicalInfos.firstname,
					birthdate: medicalInfos.birthdate,
					sex: medicalInfos.sex,
					height: medicalInfos.height,
					weight: medicalInfos.weight,
				}).map((key, index) => {
					const info = medicalInfos[key as keyof PatientPersonalType];

					return (
						<Text
							key={index}
							size={{ base: 'md', lg: 'lg' }}
							id={`edgar-dashboardMedicalPage-personalInfoCard-${key as keyof PatientPersonalType}-text`}
						>
							{personalInfosLabels[key as keyof PatientPersonalType]}: {displayPersonalInfos(key, info)}
						</Text>
					);
				})}
			</VStack>
		</HStack>
	);
};

export default MedicalPersonalInfoCard;
