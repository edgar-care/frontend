'use client';

import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AppointmentsCalendarCard from 'components/dashboardPages/appointments/AppointmentsCalendarCard';
import AppointmentsCards from 'components/dashboardPages/appointments/AppointmentsCards';

import { type AppointmentType } from 'types/dashboard/appointments/appointmentType';

const AppointmentsPageContent = (): JSX.Element => {
	const appointments: AppointmentType[] = [
		{
			id: '1',
			status: 'NOT_STARTED',
			doctorName: 'Doctor XX',
			startDate: new Date('2023-09-30 13:00'),
			endDate: new Date('2023-09-30 14:00'),
		},
		{
			id: '2',
			status: 'NOT_STARTED',
			doctorName: 'Doctor XX',
			startDate: new Date('2023-11-12 13:00'),
			endDate: new Date('2023-11-12 14:00'),
		},
		{
			id: '3',
			status: 'NOT_STARTED',
			doctorName: 'Doctor XX',
			startDate: new Date('2023-10-27 13:00'),
			endDate: new Date('2023-10-27 14:00'),
		},
		{
			id: '4',
			status: 'DONE',
			doctorName: 'Doctor YY',
			startDate: new Date('2023-09-10 13:00'),
			endDate: new Date('2023-09-10 14:00'),
		},
	];

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes rendez-vous"
				subTitle="Retrouvez toutes les informations liées à vos rendez-vous."
			/>
			<HStack w="100%" align="start" spacing="64px">
				<VStack spacing="16px">
					<Box w="100%">
						<Link href="/simulation">
							<Button w="100%" size="customLg">
								Prendre un rendez-vous
							</Button>
						</Link>
					</Box>
					<AppointmentsCalendarCard
						appointments={appointments.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())}
					/>
				</VStack>
				<AppointmentsCards
					appointments={appointments.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())}
				/>
			</HStack>
		</VStack>
	);
};

export default AppointmentsPageContent;
