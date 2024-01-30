import { Box, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import CalendarAppointmentCard from 'components/app/dashboardPages/appointments/CalendarAppointmentCard';
import AppointmentCalendar from 'components/app/dashboardPages/appointments/AppointmentCalendar';

import { months } from 'utils/app/dashboard/appointments/calendarUtils';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

import { type AppointmentType } from 'types/app/dashboard/appointments/appointmentType';

const AppointmentsCalendarCard = ({ appointments }: { appointments: AppointmentType[] }): JSX.Element => {
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [year, setYear] = useState<number>(new Date().getFullYear());

	return (
		<Stack
			direction={{ base: 'column', md: 'row', lg: 'column' }}
			w="100%"
			spacing={{ base: '32px', lg: '16px' }}
			p="16px"
			borderRadius="16px"
			bg="white"
			align={{ base: 'center', sm: 'start' }}
		>
			<VStack spacing="16px">
				<HStack w="100%" px="8px" justify="space-between">
					<Text size="boldLg">
						{months[month]} {year}
					</Text>
					<HStack spacing="8px">
						<Icon
							as={LeftChevronIcon}
							h="12px"
							color="black"
							cursor="pointer"
							onClick={() => {
								if (month - 1 < 0) {
									setYear(year - 1);
									setMonth(11);
								} else setMonth(month - 1);
							}}
						/>
						<Icon
							as={RightChevronIcon}
							h="12px"
							color="black"
							cursor="pointer"
							onClick={() => {
								if (month + 1 > 11) {
									setYear(year + 1);
									setMonth(0);
								} else setMonth(month + 1);
							}}
						/>
					</HStack>
				</HStack>
				<Box as="span" w="100%" h="2px" bg="blue.700" />
				<AppointmentCalendar month={month} year={year} appointments={appointments} />
				<Box as="span" w="100%" h="2px" bg="blue.700" />
			</VStack>
			{appointments.filter((appointment) => appointment.endDate > new Date().getTime()).length > 0 && (
				<VStack w="100%" align="start">
					<Text size="boldMd">Prochain rendez-vous</Text>
					<CalendarAppointmentCard
						appointment={
							appointments.filter((appointment) => appointment.endDate > new Date().getTime())[0]
						}
					/>
				</VStack>
			)}
		</Stack>
	);
};

export default AppointmentsCalendarCard;
