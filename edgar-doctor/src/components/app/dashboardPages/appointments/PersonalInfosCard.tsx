import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import { PatientType } from 'types/app/dashboard/patients/PatientType';

const PersonalInfosCard = ({ patientInfos }: { patientInfos: PatientType }): JSX.Element => {
	const formatHeight = (height: number): string =>
		(height / 100).toLocaleString('en-US', { minimumFractionDigits: 2 });
	return (
		<HStack
			w="100%"
			p="16px"
			spacing="4px"
			borderRadius="8px"
			border="2px solid"
			borderColor="blue.200"
			align="stretch"
		>
			<Box bg="green.500" w="4px" borderRadius="4px" />
			<VStack w="100%" spacing="32px" display="flex">
				<VStack spacing="12px" alignItems="start" w="100%">
					<Text size="lg">Adresse mail: {patientInfos.email}</Text>
					<Text size="lg">Prénom: {patientInfos.medicalInfos.firstname}</Text>
					<Text size="lg">Nom: {patientInfos.medicalInfos.name}</Text>
					<Text size="lg">
						Date de naissance: {new Date(patientInfos.medicalInfos.birthdate).toLocaleDateString('fr')}
					</Text>
					<Text size="lg">Sexe: {patientInfos.medicalInfos.sex}</Text>
					<Text size="lg">Taille: {formatHeight(patientInfos.medicalInfos.height)}m</Text>
					<Text size="lg">Poids: {patientInfos.medicalInfos.weight}kg</Text>
					<Text size="lg">Médecin traitant: {patientInfos.medicalInfos.primaryDoctorId}</Text>
				</VStack>
			</VStack>
		</HStack>
	);
};

export default PersonalInfosCard;
