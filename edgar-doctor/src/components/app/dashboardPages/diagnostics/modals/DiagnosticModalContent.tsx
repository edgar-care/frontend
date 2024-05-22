import { Box, Stack } from '@chakra-ui/react';

import DiagnosticMedicalInfo from 'components/app/dashboardPages/diagnostics/medicalInfo/DiagnosticMedicalInfo';
import DiagnosticSummary from 'components/app/dashboardPages/diagnostics/summary/DiagnosticSummary';
import DiagnosticLogs from 'components/app/dashboardPages/diagnostics/chat/DiagnosticLogs';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import { useGetDiagnosticSummaryByIdQuery } from 'services/request/diagnostics';

const DiagnosticModalContent = ({ diagnostic }: { diagnostic: AppointmentType }): JSX.Element => {
	const { data: diagnosticSummary, isLoading } = useGetDiagnosticSummaryByIdQuery(diagnostic.sessionId);

	return (
		<Stack direction={{ base: 'column', '2xl': 'row' }} w="100%" align="stretch" spacing="16px">
			<DiagnosticMedicalInfo patientId={diagnostic.patientId} />
			<Box as="span" w={{ base: '100%', '2xl': '1px' }} h={{ base: '1px', '2xl': 'auto' }} bg="blue.200" />
			<Stack
				direction={{ base: 'column', md: 'row' }}
				w={{ base: '100%', '2xl': 'auto' }}
				align="stretch"
				spacing="16px"
			>
				<DiagnosticSummary summary={diagnosticSummary} isLoading={isLoading} />
				<Box as="span" w={{ base: '100%', md: '1px' }} h={{ base: '1px', md: 'auto' }} bg="blue.200" />
				<DiagnosticLogs logs={diagnosticSummary?.logs} isLoading={isLoading} />
			</Stack>
		</Stack>
	);
};

export default DiagnosticModalContent;
