import { Button, Skeleton, useDisclosure, VStack } from '@chakra-ui/react';

import DiagnosticMedicalInfoPersonal from 'components/app/dashboardPages/diagnostics/medicalInfo/DiagnosticMedicalInfoPersonal';
import DiagnosticMedicalInfoHealth from 'components/app/dashboardPages/diagnostics/medicalInfo/DiagnosticMedicalInfoHealth';

import { useGetPatientByIdQuery } from 'services/request/patients';

const PatientsSubViewMedicalInfo = ({ patientId }: { patientId: string }): JSX.Element => {
	const { data: patientInfo, isLoading } = useGetPatientByIdQuery(patientId);

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Skeleton isLoaded={!isLoading && patientInfo !== undefined} w="100%" h="100%" borderRadius="8px">
			{patientInfo && (
				<VStack w="100%" spacing="16px" align="start">
					<Button>Mettre à jour le dossier médical</Button>
					<VStack w="100%">
						<DiagnosticMedicalInfoPersonal
							patientInfo={{ email: patientInfo.email, ...patientInfo.medicalInfos }}
						/>
						<DiagnosticMedicalInfoHealth medicalAntecedents={patientInfo.medicalInfos.medicalAntecedents} />
					</VStack>
				</VStack>
			)}
		</Skeleton>
	);
};
export default PatientsSubViewMedicalInfo;
