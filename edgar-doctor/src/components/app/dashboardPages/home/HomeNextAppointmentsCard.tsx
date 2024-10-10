import { Box, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import AppointmentCard from 'components/app/dashboardPages/appointments/AppointmentCard';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';

const HomeNextAppointmentsCard = (): JSX.Element => {
	const { data: appointments } = useGetDoctorAppointmentsQuery();

	const upcomingAppointments =
		appointments?.filter(
			(appointment) =>
				appointment.endDate > new Date().getTime() && !appointment.appointmentStatus.includes('CANCELED'),
		) || [];

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
				<Text size="boldXl">Mes prochains rendez-vous</Text>
				<Box as="span" w="100%" h="2px" bg="blue.700" />
			</VStack>
			<VStack w="100%">
				{upcomingAppointments.slice(0, 3).map((appointment) => (
					<AppointmentCard appointment={appointment} key={appointment.id} />
				))}
			</VStack>
			<Link href="/dashboard/appointments">
				<Text textDecoration="underline">Afficher tous les rendez-vous</Text>
			</Link>
		</VStack>
	);
};

export default HomeNextAppointmentsCard;
