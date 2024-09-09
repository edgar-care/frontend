'use client';

import { VStack, Stack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import AppointmentsCalendarCard from 'components/app/dashboardPages/appointments/AppointmentsCalendarCard';
import AppointmentsCards from 'components/app/dashboardPages/appointments/AppointmentsCards';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';
import { useGetPatientsQuery } from 'services/request/patients';

const AppointmentsPageContent = (): JSX.Element => {
	const { data: appointments } = useGetDoctorAppointmentsQuery();
	const { data: patients } = useGetPatientsQuery();

	return (
		<VStack w="100%" spacing="32px" h="100%">
			<DashboardPageBanner
				title="Mes rendez-vous"
				subTitle="Retrouvez toutes les informations liées aux rendez-vous de vos patients."
			/>
			<Stack
				direction={{ base: 'column', lg: 'row' }}
				w="100%"
				align="start"
				spacing={{ base: '32px', xl: '64px' }}
			>
				<VStack spacing="16px" w={{ base: '100%', md: 'auto' }}>
					<AppointmentsCalendarCard appointments={appointments} />
				</VStack>
				{appointments && patients && (
					<AppointmentsCards
						appointments={[...appointments]
							.filter((appointment) => patients.some((patient) => patient.id === appointment.patientId))
							.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())}
					/>
				)}
			</Stack>
		</VStack>
	);
};

export default AppointmentsPageContent;
