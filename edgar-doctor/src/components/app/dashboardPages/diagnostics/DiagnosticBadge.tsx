import { Text, VStack } from '@chakra-ui/react';

import { type AppointmentStatusType } from 'types/app/dashboard/appointments/AppointmentStatusType';

const DiagnosticBadge = ({ diagnosticStatus }: { diagnosticStatus: AppointmentStatusType }) => {
	const isAccepted = diagnosticStatus === 'ACCEPTED_DUE_TO_REVIEW';

	return (
		<VStack
			p="4px 8px"
			border="2px solid"
			borderColor={isAccepted ? 'green.300' : 'red.300'}
			borderRadius="8px"
			bg={isAccepted ? 'green.200' : 'red.200'}
		>
			<Text size="boldMd" color={isAccepted ? 'green.700' : 'red.700'}>
				{isAccepted ? 'Accepté' : 'Refusé'}
			</Text>
		</VStack>
	);
};

export default DiagnosticBadge;
