import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import { PatientsType } from 'types/app/dashboard/patients/PatientsType';

const PersonalInfosCard = ({ patientInfos }: { patientInfos: PatientsType}): JSX.Element => {
	const formatHeight = (height: number): string => {
		return (height / 100).toLocaleString('en-US', {minimumFractionDigits: 2});
	}
    return (
		<HStack w="100%" p="16px" spacing="4px" borderRadius="8px" border="2px solid" borderColor="blue.200" align="stretch">
			<Box bg="green.500" w="4px" borderRadius="4px" />
			<VStack w="100%" spacing="32px" display="flex">
				<VStack spacing="12px" alignItems="start" w="100%">
					<Text size="lg">Adresse mail: /</Text>
					<Text size="lg">Prénom: {patientInfos.onboarding_info.name}</Text>
					<Text size="lg">Nom: {patientInfos.onboarding_info.surname.toUpperCase()}</Text>
					<Text size="lg">Date de naissance: {patientInfos.onboarding_info.birthdate}</Text>
					<Text size="lg">Sexe: {patientInfos.onboarding_info.sex}</Text>
					<Text size="lg">Taille: {formatHeight(patientInfos.onboarding_info.height)}m</Text>
					<Text size="lg">Poids: {patientInfos.onboarding_info.weight}kg</Text>
					<Text size="lg">Médecin traitant: /</Text>
				</VStack>
			</VStack>
		</HStack>
	);
};

export default PersonalInfosCard;
