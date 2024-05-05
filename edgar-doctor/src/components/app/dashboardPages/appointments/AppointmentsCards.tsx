'use client';

import { useState } from 'react';

import { Text, VStack } from '@chakra-ui/react';

import AppointmentCard from 'components/app/dashboardPages/appointments/AppointmentCard';

import Pagination from 'components/navigation/Pagination';
import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const AppointmentsCards = ({ appointments }: { appointments: AppointmentType[] }): JSX.Element => {
	const [pageIndexNext, setPageIndexNext] = useState(1);
	const [pageIndexOld, setPageIndexOld] = useState(1);
	const upcomingAppointments = appointments.filter(
		(appointment) =>
			appointment.endDate > new Date().getTime() && !appointment.appointmentStatus.includes('CANCELED'),
	);
	const pastAppointments = appointments.filter(
		(appointment) =>
			appointment.endDate <= new Date().getTime() && !appointment.appointmentStatus.includes('CANCELED'),
	);

	return (
		<VStack spacing="32px" w="100%">
			<VStack w="100%" spacing="16px" align="start">
				<Text size="boldXl" id="edgar-dashboardAppointmentsPage-nextAppointments-text">
					Mes prochains rendez-vous
				</Text>
				<VStack w="100%">
					{paginationHandler(upcomingAppointments, pageIndexNext, 3).map((appointment) => (
						<AppointmentCard appointment={appointment} key={appointment.id} />
					))}
				</VStack>
				{upcomingAppointments.length > 3 && (
					<Pagination
						pageIndex={pageIndexNext}
						maxPageNumbers={countMaxNumberPage(upcomingAppointments, 3)}
						setPageIndex={setPageIndexNext}
						variant="secondary"
						size="small"
					/>
				)}
			</VStack>
			<VStack w="100%" spacing="16px" align="start">
				<Text size="boldXl" id="edgar-dashboardAppointmentsPage-doneAppointments-text">
					Mes rendez-vous passés
				</Text>
				<VStack w="100%">
					{paginationHandler(pastAppointments, pageIndexOld, 3).map((appointment) => (
						<AppointmentCard appointment={appointment} key={appointment.id} />
					))}
				</VStack>
				{pastAppointments.length > 3 && (
					<Pagination
						pageIndex={pageIndexOld}
						maxPageNumbers={countMaxNumberPage(pastAppointments, 3)}
						setPageIndex={setPageIndexOld}
						variant="secondary"
						size="small"
					/>
				)}
			</VStack>
		</VStack>
	);
};

export default AppointmentsCards;
