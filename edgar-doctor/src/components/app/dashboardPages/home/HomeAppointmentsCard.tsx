import { useState } from 'react';
import { Box, Button, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import AppointmentCalendar from 'components/app/dashboardPages/appointments/AppointmentCalendar';
import CalendarAppointmentCard from 'components/app/dashboardPages/appointments/CalendarAppointmentCard';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';

import { months } from 'utils/app/dashboard/appointments/calendarUtils';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const HomeAppointmentsCard = (): JSX.Element => {
	const { data: appointments } = useGetDoctorAppointmentsQuery();

	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [year, setYear] = useState<number>(new Date().getFullYear());

	return (
		<Stack
			direction={{ base: 'column', md: 'row', lg: 'column' }}
			spacing={{ base: '32px', lg: '16px' }}
			p="16px"
			borderRadius="16px"
			bg="white"
			align={{ base: 'center', sm: 'start' }}
			border="2px solid"
			borderColor="blue.200"
		>
			<VStack spacing="16px">
				<VStack w="100%" align="start">
					<Text size="boldXl">Mon agenda</Text>
					<Box as="span" w="100%" h="2px" bg="blue.700" />
				</VStack>
				<Box w="100%">
					<Link href="/dashboard/agenda">
						<Button w="100%" id="edgar-dashboardAppointmentsPage-appointments-button">
							Consulter mon agenda
						</Button>
					</Link>
				</Box>
				<HStack w="100%" justify="space-between">
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
				<AppointmentCalendar month={month} year={year} />
				<Box as="span" w="100%" h="2px" bg="blue.700" />
			</VStack>
			{appointments &&
				appointments.filter(
					(appointment) =>
						!appointment.appointmentStatus.includes('CANCELED') &&
						appointment.endDate > new Date().getTime(),
				).length > 0 && (
					<VStack w="100%" align="start">
						<Text size="boldMd">Prochain rendez-vous</Text>
						<CalendarAppointmentCard
							appointment={
								appointments
									.slice()
									.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
									.filter(
										(appointment) =>
											!appointment.appointmentStatus.includes('CANCELED') &&
											appointment.endDate > new Date().getTime(),
									)[0]
							}
						/>
					</VStack>
				)}
		</Stack>
	);
};

export default HomeAppointmentsCard;
