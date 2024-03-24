import { type Dispatch, type SetStateAction } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import { AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

import AppointmentSlotHour from './AppointmentSlotHour';

const AppointmentSlots = ({
	appointments,
	selectedAppointment,
	setSelectedAppointment,
}: {
	appointments: AgendaSlotType[];
	selectedAppointment: string;
	setSelectedAppointment: Dispatch<SetStateAction<string>>;
}): JSX.Element => (
	<VStack w="140px" bg="white" borderRadius="8px" border="2px solid" borderColor="blue.100" p="8px">
		<VStack w="100%" textAlign="center" spacing="0px">
			<Text textTransform="capitalize">
				{new Date(appointments[0].startDate).toLocaleDateString('fr-FR', { weekday: 'long' })}
			</Text>
			<Text textTransform="capitalize">
				{new Date(appointments[0].startDate).toLocaleDateString('fr-FR', {
					day: 'numeric',
					month: 'long',
				})}
			</Text>
		</VStack>
		<VStack w="100%">
			{appointments
				.sort((a, b) => a.startDate - b.startDate)
				.map((appointment) => (
					<AppointmentSlotHour
						startDate={appointment.startDate}
						endDate={appointment.endDate}
						selected={selectedAppointment === appointment.id}
						onClick={() => setSelectedAppointment(appointment.id)}
						key={appointment.id}
					/>
				))}
		</VStack>
	</VStack>
);

export default AppointmentSlots;
