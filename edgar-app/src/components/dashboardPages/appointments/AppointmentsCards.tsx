'use client';

import { Text, VStack } from '@chakra-ui/react';

import AppointmentCard from 'components/dashboardPages/appointments/AppointmentCard';

import { type PatientAppointmentType } from 'types/dashboard/appointments/patientAppointmentType';

const AppointmentsCards = ({ appointments }: { appointments: PatientAppointmentType[] }): JSX.Element => (
	<VStack spacing="32px" w="100%">
		<VStack w="100%" spacing="16px" align="start">
			<Text size="boldXl">Mes prochains rendez-vous</Text>
			<VStack w="100%">
				{appointments
					.filter((appointment) => appointment.status === 'NOT_STARTED')
					.map((appointment) => (
						<AppointmentCard appointment={appointment} key={appointment.id} />
					))}
			</VStack>
		</VStack>
		<VStack w="100%" spacing="16px" align="start">
			<Text size="boldXl">Mes rendez-vous passés</Text>
			<VStack w="100%">
				{appointments
					.filter((appointment) => appointment.status === 'DONE')
					.map((appointment) => (
						<AppointmentCard appointment={appointment} key={appointment.id} />
					))}
			</VStack>
		</VStack>
	</VStack>
);

export default AppointmentsCards;
