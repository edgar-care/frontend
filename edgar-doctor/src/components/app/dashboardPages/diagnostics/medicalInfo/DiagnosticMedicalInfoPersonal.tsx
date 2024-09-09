import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import { type PatientMedicalInfosType } from 'types/app/dashboard/patients/PatientType';
import { type PatientSexType } from 'types/app/dashboard/patients/PatientSexType';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

const DiagnosticMedicalInfoPersonal = ({
	patientInfo,
}: {
	patientInfo: { email: string } & PatientMedicalInfosType;
}): JSX.Element => {
	const { data: doctorInfo } = useGetDoctorByIdQuery(patientInfo.primaryDoctorId);

	const personalInfosLabels = {
		firstname: 'Prénom',
		name: 'Nom',
		birthdate: 'Date de naissance',
		sex: 'Sexe',
		height: 'Taille',
		weight: 'Poids',
		primaryDoctorId: 'Médecin traitant',
	};
	const sexLabel: { [key: string]: string } = {
		MALE: 'Masculin',
		FEMALE: 'Féminin',
		OTHER: 'Autre',
	};

	const displayPersonalInfos = (key: string, info: string | number): string => {
		if (key === 'birthdate') return new Date(info).toLocaleDateString('fr-FR');
		if (key === 'sex') return sexLabel[info as PatientSexType];
		if (key === 'height') return `${(info as number).toPrecision(3)}m`;
		if (key === 'weight') return `${info as number}kg`;
		if (key === 'primaryDoctorId') return `Dr. ${doctorInfo?.name.toUpperCase()} ${doctorInfo?.firstname}`;
		return info.toString();
	};

	return (
		<HStack p="16px" w="100%" bg="white" border="2px solid" borderColor="blue.200" spacing="4px" borderRadius="8px">
			<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
			<VStack pl="8px" w="100%" align="start" spacing={{ base: '8px', lg: '12px' }}>
				<Text size={{ base: 'md', lg: 'lg' }}>Adresse mail: {patientInfo.email}</Text>
				{Object.keys({
					firstname: patientInfo.firstname,
					name: patientInfo.name,
					birthdate: patientInfo.birthdate,
					sex: patientInfo.sex,
					height: patientInfo.height,
					weight: patientInfo.weight,
					primaryDoctorId: patientInfo.primaryDoctorId,
				}).map((key, index) => {
					const info = patientInfo[key as keyof PatientMedicalInfosType];

					return (
						<Text key={index} size={{ base: 'md', lg: 'lg' }}>
							{personalInfosLabels[key as keyof PatientMedicalInfosType]}:{' '}
							{displayPersonalInfos(key, info as string | number)}
						</Text>
					);
				})}
			</VStack>
		</HStack>
	);
};

export default DiagnosticMedicalInfoPersonal;
