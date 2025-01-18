import { useState } from 'react';
import { Box, Button, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import AppointmentCalendar from 'components/dashboardPages/appointments/AppointmentCalendar';
import CalendarAppointmentCard from 'components/dashboardPages/appointments/CalendarAppointmentCard';

import { useGetPatientAppointmentsQuery } from 'services/request/appointments';

import { months } from 'utils/app/dashboard/appointments/calendarUtils';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const HomeAppointmentsCard = (): JSX.Element => {
	const { data: appointments } = useGetPatientAppointmentsQuery();

	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [year, setYear] = useState<number>(new Date().getFullYear());

	return (
		<VStack
			spacing="16px"
			w={{ base: '100%', md: 'auto' }}
			bg="white"
			borderRadius="16px"
			p="16px"
			border="2px solid"
			borderColor="blue.200"
		>
			<VStack w="100%" align="start">
				<Text size="boldXl">Mes rendez-vous</Text>
				<Box w="100%" h="2px" bg="blue.700" />
			</VStack>
			<Box w="100%">
				<Link href="/simulation">
					<Button w="100%" size="customLg" id="edgar-dashboardAppointmentsPage-appointments-button">
						Prendre un rendez-vous
					</Button>
				</Link>
			</Box>
			<Stack
				direction={{ base: 'column', md: 'row', lg: 'column' }}
				w="100%"
				spacing={{ base: '32px', lg: '16px' }}
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
					<AppointmentCalendar month={month} year={year} appointments={appointments || []} />
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
									appointments.filter(
										(appointment) =>
											!appointment.appointmentStatus.includes('CANCELED') &&
											appointment.endDate > new Date().getTime(),
									)[0]
								}
							/>
						</VStack>
					)}
			</Stack>
		</VStack>
	);
};

export default HomeAppointmentsCard;
