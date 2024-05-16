'use client';

import { useState } from 'react';

import { Button, HStack, VStack } from '@chakra-ui/react';

import paginationHandler from 'utils/navigation/paginationHandler';
import Pagination from 'components/navigation/Pagination';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';
import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';
import AppointmentCard from '../../appointments/AppointmentCard';

const PatientsSubViewAppointments = ({
	selectedPatient,
}: {
	selectedPatient: PatientType | undefined;
}): JSX.Element => {
	const [pageIndexUpcoming, setPageIndexUpcoming] = useState(1);
	const [pageIndexPast, setPageIndexPast] = useState(1);
	const [appointmentType, setAppointmentType] = useState<'upcoming' | 'past'>('upcoming');
	const { data: appointments } = useGetDoctorAppointmentsQuery();
	const patientAppointments = appointments
		?.filter((appointment) => appointment.patientId === selectedPatient?.id)
		?.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
	const upcomingAppointments = patientAppointments?.filter(
		(patientAppointment) =>
			patientAppointment.endDate > new Date().getTime() &&
			!patientAppointment.appointmentStatus.includes('CANCELED'),
	);
	const pastAppointments = patientAppointments?.filter(
		(patientAppointment) =>
			patientAppointment.endDate <= new Date().getTime() &&
			!patientAppointment.appointmentStatus.includes('CANCELED'),
	);

	return (
		<>
			<HStack w="100%" spacing="8px">
				<Button
					w="100%"
					size="md"
					variant={appointmentType === 'upcoming' ? 'primary' : 'secondary'}
					onClick={() => setAppointmentType('upcoming')}
				>
					Prochain rendez-vous
				</Button>
				<Button
					w="100%"
					size="md"
					variant={appointmentType === 'past' ? 'primary' : 'secondary'}
					onClick={() => setAppointmentType('past')}
				>
					Rendez-vous passés
				</Button>
			</HStack>
			{appointmentType === 'upcoming' && upcomingAppointments && (
				<VStack w="100%" h="100%" justify="space-between">
					<VStack w="100%" spacing="4px">
						{paginationHandler(upcomingAppointments, pageIndexUpcoming, 7).map((patientAppointment) => (
							<AppointmentCard appointment={patientAppointment} key={patientAppointment.id} />
						))}
					</VStack>
					{upcomingAppointments.length > 7 && (
						<Pagination
							pageIndex={pageIndexUpcoming}
							maxPageNumbers={countMaxNumberPage(upcomingAppointments, 7)}
							setPageIndex={setPageIndexUpcoming}
							variant="secondary"
							size="small"
						/>
					)}
				</VStack>
			)}
			{appointmentType === 'past' && pastAppointments && (
				<VStack w="100%" h="100%" justify="space-between">
					<VStack w="100%" spacing="4px">
						{paginationHandler(pastAppointments, pageIndexPast, 3).map((patientAppointment) => (
							<AppointmentCard appointment={patientAppointment} key={patientAppointment.id} />
						))}
					</VStack>
					{pastAppointments.length > 7 && (
						<Pagination
							pageIndex={pageIndexPast}
							maxPageNumbers={countMaxNumberPage(pastAppointments, 7)}
							setPageIndex={setPageIndexPast}
							variant="secondary"
							size="small"
						/>
					)}
				</VStack>
			)}
		</>
	);
};

export default PatientsSubViewAppointments;
