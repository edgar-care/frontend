import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const CalendarAppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => {
	const appointmentStartDate = new Date(appointment.startDate);
	const appointmentEndDate = new Date(appointment.endDate);

	return (
		<HStack spacing="4px" w="100%" p="12px" borderRadius="8px" border="2px solid" borderColor="blue.200" bg="white">
			<Box
				as="span"
				w="4px"
				alignSelf="stretch"
				bg={appointmentEndDate > new Date() ? 'green.500' : 'blue.200'}
				borderRadius="4px"
			/>
			<VStack justify="space-between" w="100%">
				<VStack w="100%" spacing="0px" px="8px" align="start">
					<Text size="boldLg" id="edgar-dashboardAppointmentsPage-appointmentCalendarCardDoctorName-text">
						Docteur XX
					</Text>
					<HStack>
						<Text textAlign="center" id="edgar-dashboardAppointmentsPage-appointmentCalendarCardHour-text">
							{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
							{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
							<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
							{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
						</Text>
					</HStack>
				</VStack>
				{appointmentEndDate > new Date() && <HStack justify="end" w="100%"></HStack>}
			</VStack>
		</HStack>
	);
};

export default CalendarAppointmentCard;
