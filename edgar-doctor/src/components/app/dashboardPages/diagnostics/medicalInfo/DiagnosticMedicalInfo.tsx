import { Skeleton, Stack, VStack } from '@chakra-ui/react';

import DiagnosticTitleCard from 'components/app/dashboardPages/diagnostics/DiagnosticTitleCard';
import DiagnosticMedicalInfoPersonal from 'components/app/dashboardPages/diagnostics/medicalInfo/DiagnosticMedicalInfoPersonal';
import DiagnosticMedicalInfoHealth from 'components/app/dashboardPages/diagnostics/medicalInfo/DiagnosticMedicalInfoHealth';

import MedicalIcon from 'assets/icons/MedicalIcon';

import { useGetPatientByIdQuery } from 'services/request/patients';

const DiagnosticMedicalInfo = ({ patientId }: { patientId: string }): JSX.Element => {
	const { data: patientInfo, isLoading } = useGetPatientByIdQuery(patientId);

	return (
		<VStack w="100%" maxW="500px">
			<DiagnosticTitleCard title="Dossier médical" icon={MedicalIcon} />
			<Skeleton isLoaded={!isLoading && patientInfo !== undefined} w="100%" h="100%" borderRadius="8px">
				{patientInfo && (
					<Stack direction={{ base: 'column', md: 'row', '2xl': 'column' }} w="100%">
						<DiagnosticMedicalInfoPersonal
							patientInfo={{ email: patientInfo.email, ...patientInfo.medicalInfos }}
						/>
						<DiagnosticMedicalInfoHealth healthIssues={patientInfo.medicalInfos.healthIssues} />
					</Stack>
				)}
			</Skeleton>
		</VStack>
	);
};

export default DiagnosticMedicalInfo;
