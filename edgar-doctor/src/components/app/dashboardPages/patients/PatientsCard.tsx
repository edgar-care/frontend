import { Dispatch, SetStateAction } from 'react';
import { Box, HStack, VStack, Text, Icon, useBreakpointValue } from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const PatientsCard = ({
	patient,
	selectedPatientId,
	setSelectedPatientId,
}: {
	patient: PatientType;
	selectedPatientId: string;
	setSelectedPatientId: Dispatch<SetStateAction<string>>;
}) => {
	const auth = useAuthContext();

	const isMobile = useBreakpointValue({ base: true, xl: false });

	return (
		<HStack
			bg="white"
			border="2px solid"
			borderColor={selectedPatientId === patient.id ? 'blue.500' : 'blue.200'}
			borderRadius="8px"
			p="12px"
			spacing="4px"
			w="100%"
			role="group"
			cursor="pointer"
			onClick={() => setSelectedPatientId(patient.id)}
		>
			<Box bg="green.500" h="42px" w="4px" borderRadius="4px" />
			<HStack
				w="100%"
				justify="space-between"
				pr={selectedPatientId === patient.id ? '0px' : '8px'}
				_groupHover={{ pr: '0px' }}
				transition="all .3s ease-in-out"
			>
				<VStack spacing="0px" px="8px" align="start">
					<HStack>
						<Text size="boldLg">
							{patient.medicalInfos.firstname} {patient.medicalInfos.name}
						</Text>
						{!isMobile && (
							<Text>{new Date(patient.medicalInfos.birthdate).toLocaleDateString('fr-FR')}</Text>
						)}
					</HStack>
					<Text size="sm">
						{/* TODO: add name of the doctor when it's not the primary doctor */}
						{auth.getId() === patient.medicalInfos.primaryDoctorId
							? 'Vous êtes le médecin traitant'
							: `${!isMobile ? 'Médecin traitant: ' : ''}Docteur XX`}
					</Text>
				</VStack>
				<Icon as={RightChevronIcon} w="16px" />
			</HStack>
		</HStack>
	);
};
export default PatientsCard;
