import { Box, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const AppointmentCard = ({ appointment }: { appointment: AppointmentType }): JSX.Element => {
	const appointmentStartDate = new Date(appointment.startDate);
	const appointmentEndDate = new Date(appointment.startDate);

	return (
		<HStack
			spacing="4px"
			w="100%"
			p="12px"
			borderRadius="8px"
			border="2px solid"
			borderColor="blue.200"
			bg="white"
			align="stretch"
		>
			<Box as="span" w="4px" bg={appointmentEndDate > new Date() ? 'green.500' : 'blue.200'} borderRadius="4px" />
			<Stack direction={{ base: 'column', smd: 'row', lg: 'column', xl: 'row' }} justify="space-between" w="100%">
				<VStack w="100%" spacing="0px" px="8px" align="start">
					<Text size="boldLg" id="edgar-dashboardAppointmentsPage-appointmentCardDoctorName-text">
						Patient XX
					</Text>
					<HStack>
						<Text textAlign="center" id="edgar-dashboardAppointmentsPage-appointmentCardHour-text">
							{appointmentStartDate.toLocaleDateString('fr')} - {appointmentStartDate.getHours()}h
							{appointmentStartDate.getMinutes().toString().padStart(2, '0')}{' '}
							<Icon as={RightArrowIcon} w="14px" /> {appointmentEndDate.getHours()}h
							{appointmentEndDate.getMinutes().toString().padStart(2, '0')}
						</Text>
					</HStack>
				</VStack>
				{appointmentEndDate > new Date() && <HStack px={{ base: '8px', xl: '0px' }} justify="end"></HStack>}
			</Stack>
		</HStack>
	);
};

export default AppointmentCard;
