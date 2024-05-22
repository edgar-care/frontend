import { HStack, Icon, Text, VStack } from '@chakra-ui/react';

import DiagnosticBadge from 'components/app/dashboardPages/diagnostics/DiagnosticBadge';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

import BlueCalendarIllustration from 'assets/illustrations/BlueCalendarIllustration';

const DiagnosticModalHeader = ({ diagnostic }: { diagnostic: AppointmentType }): JSX.Element => {
	const startDate = new Date(diagnostic.startDate);
	const endDate = new Date(diagnostic.endDate);

	return (
		<VStack spacing="8px" w="100%">
			<Icon as={BlueCalendarIllustration} w="48px" h="48px" />
			<HStack spacing="16px">
				<Text size="xl" align="center">
					Rendez-vous du{' '}
					{startDate.toLocaleDateString('fr-FR', {
						day: '2-digit',
						month: 'long',
						year: 'numeric',
					})}{' '}
					de {startDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}{' '}
					à {endDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}
				</Text>
				{diagnostic.appointmentStatus !== 'WAITING_FOR_REVIEW' && (
					<DiagnosticBadge diagnosticStatus={diagnostic.appointmentStatus} />
				)}
			</HStack>
		</VStack>
	);
};

export default DiagnosticModalHeader;
