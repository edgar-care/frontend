'use client';

import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AppointmentsCalendarCard from 'components/dashboardPages/appointments/AppointmentsCalendarCard';
import AppointmentsCards from 'components/dashboardPages/appointments/AppointmentsCards';

import { useGetPatientAppointmentsQuery } from 'services/request/appointments';

const AppointmentsPageContent = (): JSX.Element => {
	const { data: appointments } = useGetPatientAppointmentsQuery();

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes rendez-vous"
				subTitle="Retrouvez toutes les informations liées à vos rendez-vous."
			/>
			<Stack
				direction={{ base: 'column', lg: 'row' }}
				w="100%"
				align="start"
				spacing={{ base: '32px', xl: '64px' }}
			>
				<VStack spacing="16px" w={{ base: '100%', md: 'auto' }}>
					<Box w="100%">
						<Link href="/simulation">
							<Button w="100%" size="customLg">
								Prendre un rendez-vous
							</Button>
						</Link>
					</Box>
					{appointments && (
						<AppointmentsCalendarCard
							appointments={[...appointments].sort(
								(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
							)}
						/>
					)}
				</VStack>
				{appointments && (
					<AppointmentsCards
						appointments={[...appointments].sort(
							(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
						)}
					/>
				)}
			</Stack>
		</VStack>
	);
};

export default AppointmentsPageContent;
