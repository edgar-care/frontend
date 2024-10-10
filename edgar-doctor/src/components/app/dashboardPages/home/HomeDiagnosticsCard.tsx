import { Box, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import DiagnosticCard from 'components/app/dashboardPages/diagnostics/DiagnosticCard';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';

const HomeDiagnosticsCard = (): JSX.Element => {
	const { data: appointments } = useGetDoctorAppointmentsQuery();

	const diagnostics =
		appointments?.filter((appointment) => appointment.appointmentStatus === 'WAITING_FOR_REVIEW') || [];

	return (
		<VStack
			spacing="16px"
			w="100%"
			bg="white"
			borderRadius="16px"
			p="16px"
			border="2px"
			borderColor="blue.200"
			align="start"
		>
			<VStack w="100%" align="start">
				<Text size="boldXl">Mes diagnostics en attente</Text>
				<Box as="span" w="100%" h="2px" bg="blue.700" />
			</VStack>
			<VStack w="100%">
				{diagnostics
					.sort((a, b) => a.startDate - b.startDate)
					.slice(0, 3)
					.map((diagnostic) => (
						<DiagnosticCard key={diagnostic.id} diagnostic={diagnostic} />
					))}
			</VStack>
			<Link href="/dashboard/diagnostics">
				<Text textDecoration="underline">Afficher tous les diagnostics</Text>
			</Link>
		</VStack>
	);
};

export default HomeDiagnosticsCard;
