import { Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { type AppointmentType } from 'types/dashboardPages/appointments/appointmentType';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

const CalendarAppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => (
	<HStack spacing="4px" w="100%" p="12px" borderRadius="8px" border="2px solid" borderColor="blue.200" bg="white">
		<Box
			as="span"
			w="4px"
			alignSelf="stretch"
			bg={appointment.status === 'NOT_STARTED' ? 'green.500' : 'blue.200'}
			borderRadius="4px"
		/>
		<VStack justify="space-between" w="100%">
			<VStack w="100%" spacing="0px" px="8px" align="start">
				<Text size="boldLg">{appointment.doctorName}</Text>
				<HStack>
					<Text textAlign="center">
						{appointment.startDate.toLocaleDateString('fr')} - {appointment.startDate.getHours()}h
						{appointment.startDate.getMinutes().toString().padStart(2, '0')}{' '}
						<Icon as={RightArrowIcon} w="14px" /> {appointment.endDate.getHours()}h
						{appointment.endDate.getMinutes().toString().padStart(2, '0')}
					</Text>
				</HStack>
			</VStack>
			{appointment.status !== 'DONE' && (
				<HStack justify="end" w="100%">
					<Button size="sm" variant="delete" onClick={() => {}}>
						Annuler
					</Button>
					<Button size="sm" variant="secondary" onClick={() => {}}>
						Modifier
					</Button>
				</HStack>
			)}
		</VStack>
	</HStack>
);

export default CalendarAppointmentCard;
