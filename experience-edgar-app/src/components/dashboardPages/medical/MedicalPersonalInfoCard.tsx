import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import type { PatientSexType } from 'types/dashboard/medical/PatientSexType';
import type { PersonalInfos } from 'types/onboarding/OnboardingInfos';

const MedicalPersonalInfoCard = ({ medicalInfos }: { medicalInfos: PersonalInfos }): JSX.Element => {
	const { data: doctorInfo } = useGetDoctorByIdQuery(medicalInfos.primaryDoctorId);

	const personalInfosLabels: Record<keyof PersonalInfos, string> = {
		firstname: 'Prénom',
		name: 'Nom',
		birthdate: 'Date de naissance',
		sex: 'Sexe',
		height: 'Taille',
		weight: 'Poids',
		primaryDoctorId: 'Médecin traitant',
		hasMedicalAntecedents: '',
		id: '',
	};
	const sexLabel: Record<PatientSexType, string> = {
		MALE: 'Masculin',
		FEMALE: 'Féminin',
		OTHER: 'Autre',
	};

	const displayPersonalInfos = (key: string, info: string | number): string => {
		if ((key as keyof PersonalInfos) === 'birthdate') return new Date(info).toLocaleDateString('fr-FR');
		if ((key as keyof PersonalInfos) === 'sex') return sexLabel[info as PatientSexType];
		if ((key as keyof PersonalInfos) === 'height') return `${(info as number).toPrecision(3)}m`;
		if ((key as keyof PersonalInfos) === 'weight') return `${info}kg`;
		if ((key as keyof PersonalInfos) === 'primaryDoctorId')
			return `Dr. ${doctorInfo?.name.toUpperCase()} ${doctorInfo?.firstname}`;
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
					primaryDoctorId: medicalInfos.primaryDoctorId,
				}).map((key, index) => {
					const info = medicalInfos[key as keyof PersonalInfos] as string | number;

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
